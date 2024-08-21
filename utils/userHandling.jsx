import { db } from "@/firebase/config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const createUser = async (uid, userdetails) => {
  if (!uid || !userdetails) {
    throw new Error("Method requires uid and userdetails.");
  }


  const { displayName, email, photoURL, emailVerified } = userdetails;

  try {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: displayName,
      email: email,
      photo: photoURL || "",
      emailVerified: emailVerified || false,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error setting user document: ", error);
    throw new Error("Failed to add user. Please try again later.");
  }
};
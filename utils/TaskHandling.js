import { db } from "@/firebase/config";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify"


export const getTaskInsideColl = async (hash) => {
  try {
    // Reference to the user's collections subcollection
    const collectionsRef = collection(db, "tasks", hash, "Todos");

    // Create a query to get all documents in the subcollection
    const q = query(collectionsRef);

    // Fetch the documents
    const querySnapshot = await getDocs(q);

    // Process and return the documents
    const collections = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return collections;
  } catch (error) {
    console.error("Error getting user collections: ", error);
    return [];
  }
}

export const AddTaskInsideColl = async (uid, hash, postDetail, ID, createdAt) => {
  if (!uid || !postDetail) {
    throw toast("Methods require uid or Post Detail");
  }


  const { title } = postDetail;

  try {
    const taskDocRef = doc(db, "tasks", hash);

    // Then specify the subcollection and document within it
    await setDoc(doc(taskDocRef, "Todos", ID), {
      hash,
      title,
      id: ID,
      uid: uid,
      status: "start",
      finishDate: null,
      createAt: createdAt,
    });
  } catch (error) {
    console.error("Error setting user document: ", error);
    toast.error("Some Internal Error occurs. Please try again later.")
    throw new Error("Failed to add user. Please try again later.");
  }
};


export const updateStatusInsideTaskInsideColl = async (
  uid,
  hash,
  status,
  id,
) => {
  if (!uid || !hash || !status || !id) {
    toast.error("Please fill all the properties.");
    return;
  }

  try {
    // Reference the document in the "Todos" subcollection
    const taskDocRef = doc(db, "tasks", hash, "Todos", id);

    // Check if the document exists
    const docSnapshot = await getDoc(taskDocRef);
    if (!docSnapshot.exists()) {
      toast.error("Task does not exist, update failed.");
      console.error("No document found at the path:", taskDocRef.path);
      return;
    }

    // Update specific fields in the existing document
    await updateDoc(taskDocRef, {
      status,
      createAt: serverTimestamp(),
    });

    return "success";
  } catch (error) {
    console.error("Error updating task document: ", error);
    throw error;
  }
};

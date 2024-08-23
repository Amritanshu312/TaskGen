"use cilent"
import { db } from "@/firebase/config";
import { doc, setDoc, serverTimestamp, collection, query, getDocs, updateDoc } from "firebase/firestore";

export const createCollection = async (userInfo, collectionName, Iconcolor, hash) => {
  if (!userInfo || typeof userInfo !== 'object') {
    throw new Error("Invalid userInfo object provided.");
  }
  if (!userInfo.uid) {
    throw new Error("User ID (uid) is required.");
  }
  if (!collectionName || typeof collectionName !== 'string') {
    throw new Error("Collection name must be a non-empty string.");
  }


  const { uid } = userInfo;

  const color = `#${[...Array(3)].map(() => Math.floor(Math.random() * 64).toString(16).padStart(2, '0')).map((_, i, a) => Math.floor((parseInt('#17153B'.slice(1), 16) >> (16 - i * 8) & 0xFF + parseInt('#' + [...Array(3)].map(() => Math.floor(Math.random() * 64).toString(16).padStart(2, '0')).join('').slice(1), 16) >> (16 - i * 8) & 0xFF) / 2).toString(16).padStart(2, '0')).join('')}`;

  try {
    // Specify the user document reference
    const userDocRef = doc(db, "users", uid);

    // Then specify the subcollection and document within it
    await setDoc(doc(userDocRef, "collections", hash), {
      uid: uid,
      totalTasks: 0,
      taskFinished: 0,
      hashID: hash,
      favourites: false,
      createdAt: serverTimestamp(),
      collectionName: collectionName.trim(),
      collectionColor: Iconcolor || color,
    });

    return "success";
  } catch (error) {
    console.error("Error setting user document: ", error);
    return "error";
  }

};


export const editCollectionData = async (userInfo, collectionName, Iconcolor, hash) => {
  if (!userInfo || typeof userInfo !== 'object') {
    throw new Error("Invalid userInfo object provided.");
  }
  if (!userInfo.uid) {
    throw new Error("User ID (uid) is required.");
  }
  if (!collectionName || typeof collectionName !== 'string') {
    throw new Error("Collection name must be a non-empty string.");
  }

  const { uid } = userInfo;

  const color = `#${[...Array(3)].map(() => Math.floor(Math.random() * 64).toString(16).padStart(2, '0')).map((_, i, a) => Math.floor((parseInt('#17153B'.slice(1), 16) >> (16 - i * 8) & 0xFF + parseInt('#' + [...Array(3)].map(() => Math.floor(Math.random() * 64).toString(16).padStart(2, '0')).join('').slice(1), 16) >> (16 - i * 8) & 0xFF) / 2).toString(16).padStart(2, '0')).join('')}`;

  try {
    // Specify the user document reference
    const userDocRef = doc(db, "users", uid);

    // Then specify the subcollection and document within it
    const collectionDocRef = doc(userDocRef, "collections", hash);

    // Update the document with new data
    await updateDoc(collectionDocRef, {
      collectionName: collectionName.trim(),
      collectionColor: Iconcolor || color,
      updatedAt: serverTimestamp(),
    });

    return "success";
  } catch (error) {
    console.error("Error updating collection data: ", error);
    return "error";
  }
};



export const getUserCollections = async (userId) => {
  if (!userId || typeof userId !== 'string') {
    throw new Error("Invalid user ID provided.");
  }

  try {
    // Reference to the user's collections subcollection
    const collectionsRef = collection(db, "users", userId, "collections");

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
};

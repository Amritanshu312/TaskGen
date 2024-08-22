"use client";
import { createContext, useEffect, useState, useMemo, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";
import { getUserCollections } from "@/utils/CollectionsHandling";

export const userContext = createContext();

export const UserState = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [collectionsData, setCollectionsData] = useState([])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.uid) {
        setLoading(true);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        setUserInfo({});
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchCollections = async () => {
      const collections = await getUserCollections(userInfo.uid)
      setCollectionsData(collections);
    }

    if (!loading) {
      fetchCollections()
    }
  }, [userInfo, loading])

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({
    userInfo,
    loading,
    collectionsData,
    setCollectionsData
  }),
    [
      userInfo,
      loading,
      collectionsData,
      setCollectionsData
    ]);

  return (
    <userContext.Provider value={contextValue}>
      {props.children}
    </userContext.Provider>
  );
};

export function useUserContext() {
  return useContext(userContext);
}
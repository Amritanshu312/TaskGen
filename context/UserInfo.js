"use client";
import { createContext, useEffect, useState, useMemo, useContext } from "react";
import Loading from "@/components/ui/loading/Loading";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export const userContext = createContext();

export const UserState = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.uid) {
        setLoading(true);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFirebaseUserInfo(docSnap.data());
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

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({
    userInfo,
    loading
  }),
    [
      userInfo,
      loading,
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
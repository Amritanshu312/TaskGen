"use client"
import { UserState } from '@/context/UserInfo';
import { auth } from '@/firebase/config';
import BottomBar from '@/partials/bottomBar/BottomBar';
import Navbar from '@/partials/navbar/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";


export default function RootLayout({ children }) {
  const router = useRouter()

  useEffect(() => {
    auth.onAuthStateChanged(user => !user && router.push("/auth/signin"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserState>
      <Navbar />
      {children}
      <BottomBar />

      <ProgressBar
        height="3px"
        color="#494968"
        options={{ showSpinner: true }}
      />
    </UserState>
  );
}

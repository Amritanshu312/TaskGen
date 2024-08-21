"use client"

import { auth } from "@/firebase/config"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaUserLarge } from "react-icons/fa6"

const Profile = () => {
  const [userInfo, setUserInfo] = useState("loading");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUserInfo(user || false));
    return () => unsubscribe();
  }, []);

  return userInfo === "loading" ? (
    <div className="bg-[#49495f] h-[35px] w-[35px] rounded-full"></div>
  ) : userInfo?.photoURL ? (
    <Image src={userInfo.photoURL} width={35} height={35} alt="profile" className="object-cover rounded-full cursor-pointer" />
  ) : (
    <Link href="/auth/signin" className="bg-[#49495f] h-[35px] w-[35px] rounded-full flex items-center justify-center text-xs cursor-pointer">
      <FaUserLarge />
    </Link>

  )
}

export default Profile
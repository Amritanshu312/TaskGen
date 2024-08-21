"use client"

import { useUserContext } from "@/context/UserInfo"
import Image from "next/image"
import Link from "next/link"
import { FaUserLarge } from "react-icons/fa6"

const Profile = () => {
  const { userInfo, loading } = useUserContext()


  return loading ? (
    <div className="bg-[#49495f] h-[35px] w-[35px] rounded-full"></div>
  ) : userInfo?.photo ? (
    <Image src={userInfo.photo} width={35} height={35} alt="profile" className="object-cover rounded-full cursor-pointer" />
  ) : userInfo.photo === "" ? (
    <div className="bg-[#49495f] h-[35px] w-[35px] rounded-full flex items-center justify-center text-xs cursor-pointer">
      <FaUserLarge />
    </div>
  ) : (
    <Link href="/auth/signin" className="bg-[#49495f] h-[35px] w-[35px] rounded-full flex items-center justify-center text-xs cursor-pointer">
      <FaUserLarge />
    </Link>
  )
}

export default Profile
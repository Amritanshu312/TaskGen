"use client"
import { useUserContext } from "@/context/UserInfo"
import { auth } from "@/firebase/config"
import { useEffect, useState } from "react"

const WelcomeInfo = () => {
  const { userInfo: { name }, loading } = useUserContext()

  return (
    <div className="text-4xl tracking-normal text-[#dcdcdf] font-['poppins'] font-medium flex flex-col gap-2">
      <div>Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'},</div>
      <div className="ml-1 text-[#efeff4]">
        {loading ? "Guest" : name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
    </div>
  )
}

export default WelcomeInfo
"use client"
import { auth } from "@/firebase/config"
import { useEffect, useState } from "react"

const WelcomeInfo = () => {
  const [username, setUsername] = useState("Guest")

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUsername(user?.displayName)
      }
    })
  }, [])

  return (
    <div className="text-4xl tracking-normal text-[#dcdcdf] font-['poppins'] font-medium flex flex-col gap-2">
      <div>Good morning,</div>
      <div className="ml-1 text-[#efeff4]">{username.charAt(0).toUpperCase() + username.slice(1)}</div>
    </div>
  )
}

export default WelcomeInfo
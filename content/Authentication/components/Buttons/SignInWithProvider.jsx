"use client"

import { signInWithFacebook, signInWithGoogle } from "@/firebase/auth"

const SignInWithProvider = ({ name, icon }) => {
  return (
    <div
      className="flex items-center gap-2 border-[3px] cursor-pointer font-['poppins'] text-lg border-[#31313e] py-2 justify-center rounded-2xl text-[#dcdcdc] hover:bg-[#20202b]"
      onClick={() => { name === "Google" ? signInWithGoogle() : null }}
      style={name !== "Google" ? { pointerEvents: "none", userSelect: "none" } : {}}
    >

      <div className="text-white">{icon}</div>
      <span>Sign In With {name}</span>
    </div>
  )
}

export default SignInWithProvider
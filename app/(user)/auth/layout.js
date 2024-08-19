"use client"
import "@/app/globals.css";
import SocialAuth from "@/content/Authentication/SocialAuth";
import { auth } from "@/firebase/config";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({ children }) {
  const pathname = usePathname().replace("/auth/", "")
  const router = useRouter()

  useEffect(() => {
    auth.onAuthStateChanged(user => user && router.push("/"))
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-96">
        <div className="text-[#dfdfe0] text-4xl font-semibold text-center mb-12">{pathname === "signin" ? "Sign In" : "Sign Up"}.</div>

        <SocialAuth />

        <div className="text-[#928d90] font-['poppins'] font-medium text-center my-3 text-[16px]">or</div>

        {children}
      </div>


      <div className="stage w-28 h-28 perspective-[1200px] perspective-origin-center fixed right-[28rem] top-16">
        <figure className="ball block bg-black m-0 rounded-full w-28 h-28  bg-[radial-gradient(circle_at_100px_100px,#2f2f3e,#0f0f13)]">
          <span className="shadow absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4),rgba(0,0,0,0.1)_40%,rgba(0,0,0,0)_50%)] transform rotate-x-[90deg] -translate-z-[150px] z-[-1]"></span>
        </figure>
      </div>

      <div className="stage opacity-50 w-[16rem] h-[16rem] perspective-[1200px] perspective-origin-center fixed left-80 bottom-4">
        <figure className="ball block bg-black m-0 rounded-full w-[16rem] h-[16rem]  bg-[radial-gradient(circle_at_100px_100px,#2f2f3e,#0f0f13)]">
          <span className="shadow absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4),rgba(0,0,0,0.1)_40%,rgba(0,0,0,0)_50%)] transform rotate-x-[90deg] -translate-z-[150px] z-[-1]"></span>
        </figure>
      </div>
    </div>
  );
}

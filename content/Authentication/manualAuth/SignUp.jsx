"use client"
import { useState } from "react"
import Input from "../components/Buttons/Input"
import { signUpWithEmail } from "@/firebase/auth"
import Link from "next/link"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const { result, error } = await signUpWithEmail(email, password);
    if (error) {
      console.error("Sign up failed:", error);
    } else {
      console.log("Sign up successful:", result);
    }
  };


  return (
    <form className="flex flex-col gap-4 mt-2" onSubmit={onSubmit}>
      <Input
        type={"email"}
        placeholder={"Email"}
        onchange={setEmail}
        value={email} />

      <Input
        type={"password"}
        placeholder={"Password"}
        onchange={setPassword}
        value={password} />

      <input
        type="submit"
        value={"submit"}
        className="w-full h-12 rounded-xl cursor-pointer bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)]"
      />

      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="text-[#b1b1b1]">Already have an account? <Link href={"/signin"} className="text-[#ebebeb] font-medium cursor-pointer hover:text-[#f76ba8]">Create Account</Link></div>
        <div className="cursor-pointer hover:text-[#f76ba8]">Forget Password</div>
      </div>

    </form>
  )
}

export default SignIn
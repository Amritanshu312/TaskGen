"use client"
import { useState } from "react"
import Input from "../components/Buttons/Input"
import { signOut } from "firebase/auth"
import { auth } from "@/firebase/config"
import { signInWithEmail } from "@/firebase/auth"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const { result, error } = await signInWithEmail(email, password);
    if (error) {
      console.error("Sign up failed:", error);
    } else {
      console.log("Sign up successful:", result);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("Successfully signed out");
    } catch (err) {
      console.error("Sign out failed:", err);
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
        <div className="text-[#b1b1b1]">Dont have an account? <span className="text-[#ebebeb] font-medium cursor-pointer hover:text-[#f76ba8]">Create Account</span></div>
        <div className="cursor-pointer hover:text-[#f76ba8]">Forget Password</div>
      </div>

      <div onClick={logout}>sign out</div>
    </form>
  )
}

export default SignIn
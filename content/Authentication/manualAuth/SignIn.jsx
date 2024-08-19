"use client";
import { useState } from "react";
import Input from "../components/Buttons/Input";
import { signInWithEmail } from "@/firebase/auth";
import Link from "next/link";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in all fields.");
    }

    const { result, error } = await signInWithEmail(email, password);
    if (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.");
      } else {
        console.error("Sign in failed:", error);
        toast.error("Sign in failed. Please try again.");
      }
    } else {
      console.log("Sign in successful:", result);
      toast.success("Welcome back!");
    }
  };

  return (
    <form className="flex flex-col gap-4 mt-2 relative z-10" onSubmit={onSubmit}>
      <Input
        type={"email"}
        placeholder={"Email"}
        onchange={setEmail}
        value={email}
      />

      <Input
        type={"password"}
        placeholder={"Password"}
        onchange={setPassword}
        value={password}
      />

      <input
        type="submit"
        value={"Submit"}
        className="w-full h-12 rounded-xl cursor-pointer bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)]"
      />

      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="text-[#b1b1b1]">
          Don’t have an account?{" "}
          <Link
            href={"/auth/signup"}
            className="text-[#ebebeb] font-medium cursor-pointer hover:text-[#f76ba8]"
          >
            Create Account
          </Link>
        </div>
        <div className="cursor-pointer hover:text-[#f76ba8]">
          Forget Password
        </div>
      </div>
    </form>
  );
};

export default SignIn;

"use client"
import { useState } from "react"
import Input from "../components/Buttons/Input"
import { signUpWithEmail } from "@/firebase/auth"
import Link from "next/link"
import { toast } from "react-toastify"
import { createUser } from "@/utils/userHandling"

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!email || !password || !Cpassword) {
      return toast.error("All fields are required.");
    }

    // Validate email format
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email format.");
    }

    // Validate password match
    if (password !== Cpassword) {
      return toast.error("Passwords don’t match.");
    }

    // Validate password strength (e.g., minimum 8 characters, at least one number)
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   return toast.error("Password must be at least 8 characters long and includes at least one uppercase letter, one lowercase letter, and one number.");
    // }

    try {
      // Proceed with the sign-up
      const { result, error } = await signUpWithEmail(email, password);

      createUser(result.user.uid, {
        displayName: result.user.uid,
        email,
      })

      if (error) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email is already in use.");
        } else {
          console.error("Sign up failed:", error);
          toast.error("Sign up failed.");
        }
      } else {
        console.log("Sign up successful:", result);
        toast.success("Welcome aboard!");
      }

    } catch (err) {
      console.error("An error occurred:", err);
      toast.error("An error occurred.");
    }
  };


  return (
    <form className="flex flex-col gap-4 mt-2 relative z-10" onSubmit={onSubmit}>
      <Input
        type={"text"}
        placeholder={"Username"}
        onchange={setUsername}
        value={username} />

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

      <Input
        type={"password"}
        placeholder={"Confirm Password"}
        onchange={setCPassword}
        value={Cpassword} />

      <input
        type="submit"
        value={"submit"}
        className="w-full h-12 rounded-xl cursor-pointer bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)]"
      />

      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="text-[#b1b1b1]">Already have an account? <Link href={"/auth/signin"} className="text-[#ebebeb] font-medium cursor-pointer hover:text-[#f76ba8]">Sign In</Link></div>
        <div className="cursor-pointer hover:text-[#f76ba8]">Forget Password</div>
      </div>

    </form>
  )
}

export default SignUp
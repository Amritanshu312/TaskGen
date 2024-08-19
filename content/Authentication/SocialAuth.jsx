import SignInWithProvider from "@/content/Authentication/components/Buttons/SignInWithProvider";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const SocialAuth = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <SignInWithProvider name={"Google"} icon={<FaGoogle />} />
      <SignInWithProvider name={"Facebook"} icon={<FaFacebook />} />
    </div>
  )
}

export default SocialAuth
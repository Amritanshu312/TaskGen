import WelcomeInfo from "@/content/Home/WelcomeInfo";
import Sidebar from "@/partials/Sidebar/Sidebar";
import { BsThreeDots } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />

      <div className="w-full mt-28 flex items-center flex-col">

        <div className="w-full max-w-[800px]">
          <div className="flex justify-between items-center mb-16">
            <div className="font-['poppins'] text-2xl font-medium">Dashboard</div>
            <div className="cursor-pointer text-xl text-[#bdbdc0]"><BsThreeDots /></div>
          </div>

          <WelcomeInfo />

        </div>

      </div>

    </div>
  );
}

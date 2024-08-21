import Profile from "@/components/Profile";
import DailyOverview from "@/content/Home/DailyOverview";
import WelcomeInfo from "@/content/Home/WelcomeInfo";
import Sidebar from "@/partials/Sidebar/Sidebar";
import { BsThreeDots } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />

      <div className="w-full mt-28 max-[635px]:mt-12 flex items-center flex-col max-[745px] mx-4">

        <div className="w-full ml-80 max-[1226px]:ml-[16rem] max-[1090px]:ml-1 max-w-[800px] max-[1226px]:max-w-[712px]">
          <div className="flex justify-between items-center mb-16">
            <div className="font-['poppins'] text-2xl font-medium">Dashboard</div>

            <div className="cursor-pointer text-xl text-[#bdbdc0] max-[635px]:hidden"><BsThreeDots /></div>
            <div className="cursor-pointer text-xl text-[#bdbdc0] min-[635px]:hidden">
              <Profile />       
            </div>
          </div>

          <WelcomeInfo />
          <DailyOverview />
        </div>

      </div>

    </div>
  );
}

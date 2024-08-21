import DailyOverview from "@/content/Home/DailyOverview";
import WelcomeInfo from "@/content/Home/WelcomeInfo";
import Sidebar from "@/partials/Sidebar/Sidebar";
import { BsThreeDots } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />

      <div className="w-full mt-28 flex items-center flex-col">

        <div className="w-full ml-80 max-[1226px]:ml-[16rem] max-w-[800px] max-[1226px]:max-w-[712px]">
          <div className="flex justify-between items-center mb-16">
            <div className="font-['poppins'] text-2xl font-medium">Dashboard</div>
            <div className="cursor-pointer text-xl text-[#bdbdc0]"><BsThreeDots /></div>
          </div>

          <WelcomeInfo />
          <DailyOverview />
        </div>

      </div>

    </div>
  );
}

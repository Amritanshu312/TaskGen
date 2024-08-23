"use client"
import { useUserContext } from "@/context/UserInfo"

const WelcomeInfo = () => {
  const { userInfo, loading } = useUserContext()

  return (
    <div className="text-4xl tracking-normal text-[#dcdcdf] font-['poppins'] font-medium flex flex-col gap-2">
      <div>Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'},</div>
      <div className="ml-1 text-[#efeff4]">
        {loading ? "Guest" : userInfo?.name?.charAt(0)?.toUpperCase() + userInfo?.name?.slice(1) || "Guest"}
      </div>
    </div>
  )
}

export default WelcomeInfo
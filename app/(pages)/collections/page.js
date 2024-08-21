import { BsThreeDots } from "react-icons/bs"

const Collections = () => {
  return (
    <div className="w-full min-h-screen flex">

      <div className="w-full mt-28 max-[635px]:mt-12 flex items-center flex-col max-[745px] mx-4">

        <div className="w-full max-[1226px]:ml-[16rem] max-[1090px]:ml-1 max-w-[800px] max-[1226px]:max-w-[712px]">
          <div className="flex justify-between items-center mb-16">
            <div className="font-['poppins'] text-2xl font-medium">Collections</div>

            <div className="cursor-pointer text-xl text-[#bdbdc0]"><BsThreeDots /></div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Collections
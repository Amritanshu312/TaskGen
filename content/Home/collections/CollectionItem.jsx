import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";


const CollectionItem = () => {
  return (
    <div className="w-full bg-[#21212b] rounded-3xl overflow-hidden">

      <div className="flex justify-between px-6 py-6 items-center cursor-pointer bg-[#272731] shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#fa76a0] w-8 h-8 rounded-xl flex items-center justify-center text-lg">S</div>
          <div>School</div>
        </div>

        <div className="text-[#7a7a80]"><IoIosArrowUp /></div>
      </div>

      <div>

        <div className="px-6 py-6 flex items-center gap-4">
          <div className="border-2 rounded-lg w-6 h-6 cursor-pointer"></div>
          <div className="font-['poppins']">
            <div className="text-[#dfdfe2] text-[17px]">Prepare Something like anything</div>
            <div className="text-[#b74f53] text-sm">Today 12:00</div>
          </div>
        </div>

        <div className="px-6 py-6 flex items-center gap-4">
          <div className="border-2 rounded-lg w-6 h-6 cursor-pointer"></div>
          <div className="font-['poppins']">
            <div className="text-[#dfdfe2] text-[17px]">Prepare Something like anything</div>
            <div className="text-[#b74f53] text-sm">Today 12:00</div>
          </div>
        </div>


      </div>

      <div className="py-4 flex items-center justify-center text-[#c9c9cf] font-['poppins'] border-t border-[#56565e56] cursor-pointer hover:bg-[#272731bf]">
        Go to Collection <span><FaArrowRight /></span>
      </div>

    </div>
  )
}

export default CollectionItem
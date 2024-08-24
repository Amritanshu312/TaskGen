"use client"
import { IoIosArrowUp } from "react-icons/io";



const TaskItem = () => {

  return (
    <div className="w-full bg-[#21212b] rounded-2xl overflow-hidden">

      <div className="flex items-center gap-4 px-4 py-3">
        <div className="border-[3px] border-[#ec7fab] rounded-lg w-6 h-6 cursor-pointer"></div>

        <div className="font-['poppins'] text-[#dfdfe2] text-[17px]">Prepare Something like anything</div>
        
      </div>

    </div>


  )
}

export default TaskItem
"use client"
import { IoIosArrowUp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const CollectionItem = () => {
  const [isOpended, setIsOpened] = useState(true)

  return (
    <div className="w-full bg-[#21212b] rounded-3xl overflow-hidden">

      <div onClick={() => setIsOpened(prev => !prev)} className="flex justify-between px-6 py-6 items-center cursor-pointer bg-[#272731] shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#fa76a0] w-8 h-8 rounded-xl flex items-center justify-center text-lg">S</div>
          <div>School</div>
        </div>

        <div className="text-[#7a7a80]"><IoIosArrowUp /></div>
      </div>

      <AnimatePresence>
        {isOpended && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 flex items-center gap-4">
              <div className="border-2 rounded-lg w-6 h-6 cursor-pointer"></div>
              <div className="font-['poppins']">
                <div className="text-[#dfdfe2] text-[17px]">
                  Prepare Something like anything
                </div>
                <div className="text-[#b74f53] text-sm">Today 12:00</div>
              </div>
            </div>

            <div className="px-6 py-6 flex items-center gap-4">
              <div className="border-2 rounded-lg w-6 h-6 cursor-pointer"></div>
              <div className="font-['poppins']">
                <div className="text-[#dfdfe2] text-[17px]">
                  Prepare Something like anything
                </div>
                <div className="text-[#b74f53] text-sm">Today 12:00</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="py-4 flex items-center justify-center text-[#c9c9cf] font-['poppins'] border-t border-[#56565e56] cursor-pointer hover:bg-[#272731bf]">
        Go to Collection <span><FaArrowRight /></span>
      </div>

    </div>
  )
}

export default CollectionItem
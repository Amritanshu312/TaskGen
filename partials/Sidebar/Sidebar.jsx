"use client"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useUserContext } from "@/context/UserInfo"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";

const Sidebar = () => {
  const { collectionsData } = useUserContext()
  const [loadAll, setLoadAll] = useState(false)

  const collections = loadAll ? (collectionsData || []) : (collectionsData || []).slice(0, 5)

  return collections?.length !== 0 && (
    <div className="h-screen fixed w-80 max-[1226px]:w-[17rem] bg-[#21212b] py-24 pl-8 max-[1090px]:hidden">
      <div className="text-[#cacacd] font-['poppins'] font-medium">Collections</div>

      <motion.div
        className="mt-7 gap-8 flex flex-col"
        key={loadAll}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
        initial="hidden"
        animate="show"
      >

        {collections
          .map((d, _) =>
            <motion.div
              key={_}
              variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1 } }}
            >
              <Link href={`/todo/${d?.hashID}`} className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: d?.collectionColor || 'skyblue' }}>{(d?.collectionName || "").slice(0, 1).toUpperCase()}</div>
                <div>{d?.collectionName || ""}</div>
              </Link>
            </motion.div>
          )}

        <div className="w-full flex justify-center items-center pr-4 mt-1">
          <div
            className="text-center justify-center items-center flex gap-2 bg-[#414051] hover:bg-[#4a4960] duration-200 px-4 py-2 w-max text-['poppins'] text-sm cursor-pointer rounded-xl"
            onClick={() => setLoadAll(prev => !prev)}
          >
            {loadAll ? 'Load Less' : 'Load More'} {loadAll ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
          </div>
        </div>

      </motion.div>

    </div>
  )
}

export default Sidebar
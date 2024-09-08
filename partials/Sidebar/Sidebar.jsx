"use client"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useUserContext } from "@/context/UserInfo"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import { encodeBase64ToUrlSafe, encryptSentence } from "@/utils/wordEncrypterDecrypter";

const Sidebar = () => {
  const { collectionsData } = useUserContext()
  const [loadAll, setLoadAll] = useState(false)

  const collections = loadAll ? (collectionsData || []) : (collectionsData || []).slice(0, 5)

  const generateUrl = (hashID, collectionName) => `/project/${hashID}?n=${encodeBase64ToUrlSafe(encryptSentence(collectionName))}&c=${encodeBase64ToUrlSafe(encryptSentence(collectionName, "2BqQPTp9AFXWJLl5L2oYyR"))}&cf=${encodeBase64ToUrlSafe(encryptSentence(collectionName, "4a85eb8300c5679e8d3a0461b8ed834d"))}&pl=${encodeBase64ToUrlSafe(encryptSentence(collectionName, "18585412F2QWuZDSTmxW7Ts8W"))}`;


  return collections?.length !== 0 && (
    <div className="h-screen fixed w-80 max-[1226px]:w-[17rem] bg-[#21212b] py-24 pl-8 max-[1090px]:hidden">
      <div className="text-[#cacacd] font-['poppins'] font-medium">Collections</div>

      <motion.div
        className="mt-7 gap-8 flex flex-col overflow-y-scroll max-h-[85%] no-scrollbar"
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
              variants={{ hidden: { opacity: 0}, show: { opacity: 1} }}
            >
              <Link href={generateUrl(d?.hashID, d?.collectionName)} className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: d?.collectionColor || 'skyblue' }}>{(d?.collectionName || "").slice(0, 1).toUpperCase()}</div>
                <div>{d?.collectionName || ""}</div>
              </Link>
            </motion.div>
          )}


      </motion.div>

      <div className="w-full flex justify-center items-center pr-4 mt-10">
        <div
          className="text-center justify-center items-center flex gap-2 bg-[#414051] hover:bg-[#4a4960] duration-200 px-4 py-2 w-max text-['poppins'] text-sm cursor-pointer rounded-xl"
          onClick={() => setLoadAll(prev => !prev)}
        >
          {loadAll ? 'Load Less' : 'Load More'} {loadAll ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
        </div>
      </div>

    </div>
  )
}

export default Sidebar
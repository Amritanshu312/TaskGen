/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import clsx from "clsx"
import { Fragment, useEffect, useState } from "react"
import CollectionsItem from "./CollectionsItem"
import Create from "./Create"
import { motion } from "framer-motion"
import { useUserContext } from "@/context/UserInfo"

const CollectionsSection = () => {
  const { collectionsData } = useUserContext()


  const [active, setActive] = useState("All Collections")
  const allCollections = ["Favourites", "All Collections"]

  return (
    <div>
      <div className="flex gap-4">
        {allCollections.map(item => <div key={item} onClick={() => setActive(item)} className={
          clsx("px-4 py-2 w-max text-['poppins'] text-sm cursor-pointer rounded-xl", {
            "bg-[#414051] border-2 border-[#414051]": item === active,
            "border-2 border-[#272734]": item !== active
          })
        }>
          {item}
        </div>
        )}
      </div>


      <motion.div
        className="mt-10 mb-24 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[20px]"
        key={active}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {(active === "All Collections" ?
          collectionsData :
          collectionsData.filter(item => item?.favourites === true)
        )
          .map((i, _) =>
            <Fragment key={_}><CollectionsItem {...i} userInfo={i} /></Fragment>
          )}

        <Create />
      </motion.div>

    </div>
  )
}

export default CollectionsSection
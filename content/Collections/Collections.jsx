/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import clsx from "clsx"
import { Fragment, useEffect, useState } from "react"
import CollectionsItem from "./CollectionsItem"
import Create from "./Create"
import { motion } from "framer-motion"
import { getUserCollections } from "@/utils/CollectionsHandling"
import { useUserContext } from "@/context/UserInfo"

const CollectionsSection = () => {
  const { userInfo, loading } = useUserContext()
  const [data, setData] = useState([])
  console.log(data);

  useEffect(() => {
    const fetchCollections = async () => {
      const collections = await getUserCollections(userInfo.uid)
      setData(collections);
    }

    if (!loading) {
      fetchCollections()
    }
  }, [userInfo])

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
        {data.map((i, _) => <Fragment key={_}><CollectionsItem {...i} /></Fragment>)}
        <Create />
      </motion.div>

      <button onClick={() => setStatechange(prev => !prev)}>reload</button>
    </div>
  )
}

export default CollectionsSection
"use client"

import clsx from "clsx"
import { useState } from "react"
import CollectionsItem from "./CollectionsItem"
import Create from "./Create"

const CollectionsSection = () => {
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


      <div className="mt-10 mb-24 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[20px]">
        <CollectionsItem />
        <CollectionsItem />
        <CollectionsItem />
        <CollectionsItem />
        <CollectionsItem />
        <Create />
      </div>

    </div>
  )
}

export default CollectionsSection
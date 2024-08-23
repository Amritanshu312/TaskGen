"use client"

import { useUserContext } from "@/context/UserInfo"

const Sidebar = () => {
  const { collectionsData } = useUserContext()
  const collections = collectionsData || []

  return collections?.length !== 0 && (
    <div className="h-screen fixed w-80 max-[1226px]:w-[17rem] bg-[#21212b] py-24 pl-8 max-[1090px]:hidden">
      <div className="text-[#cacacd] font-['poppins'] font-medium">Collections</div>

      <div className="mt-7 gap-8 flex flex-col">

        {collections.map((d, _) =>
          <div key={_} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: d?.collectionColor || 'skyblue' }}>{(d?.collectionName || "").slice(0, 1).toUpperCase()}</div>
            <div>{d?.collectionName || ""}</div>
          </div>
        )}

      </div>

    </div>
  )
}

export default Sidebar
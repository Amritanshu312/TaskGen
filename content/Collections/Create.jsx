"use client"
import CreateCollection from "@/components/Collection/CreateCollection";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";


const Create = () => {
  const [showCreateCollection, setShowCreateCollections] = useState(false)
  return (
    <>
      <div className="w-48 h-24 border-2 border-[#21212b] rounded-3xl shadow-md text-[#6e6e72] cursor-pointer text-2xl flex justify-center items-center" onClick={() => setShowCreateCollections(prev => !prev)}><FiPlus /></div>

      {showCreateCollection && <CreateCollection onclick={setShowCreateCollections} isVisible={showCreateCollection} />}

    </>
  )
}

export default Create
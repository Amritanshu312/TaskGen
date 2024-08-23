"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useUserContext } from "@/context/UserInfo";
import { toast } from 'react-toastify'
import { createCollection } from "@/utils/CollectionsHandling";
import ColorPicker from "../colorPicker";

const CreateCollection = ({ onclick }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ff6434")
  const { userInfo, setCollectionsData } = useUserContext()


  const reset = () => {
    setTitle("");
    onclick(false);
  };

  const addCollection = async () => {
    try {
      if (!title || !color) {
        return toast.error("Add Collection Title or Color.")
      }

      if (!userInfo?.uid) {
        return toast.error("There seem to be an error recheck if you are authenticated or not.")
      }

      const collectionHash = (length = 16) => Array.from({ length }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('');
      const hash = collectionHash();

      if (!hash) {
        return toast.error("There seem to be an Internal Error.")
      }

      toast.promise(
        createCollection(userInfo, title, color, hash),
        {
          pending: "Saving Collection...",
          success: "Collection added successfully!",
          error: "Error saving Collection",
        }
      );

      setCollectionsData(prev => [...prev, {
        collectionColor: color,
        collectionName: title,
        favourites: false,
        hashID: hash,
        taskFinished: 0,
        totalTasks: 0,
        uid: userInfo?.uid
      }])
      onclick(false);


    } catch (error) {
      return toast.error("There seem to be an Error.")
    }
  };


  return (
    <>
      <motion.div
        initial={{ scale: 0, translateX: '-50%' }}
        animate={{ scale: 1, translateX: '-50%' }}
        className="w-full max-w-[32rem] bg-[#21212b] rounded-2xl border border-[#262633] top-28 fixed z-10 left-1/2 py-6 px-6 max-[625px]:bottom-0 max-[625px]:max-w-full max-[625px]:"
      >
        <div className="border-2 border-[#2d2d38] rounded-xl">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Collection Name"
            className="w-full h-full bg-transparent outline-none border-none px-4 py-4"
          />
        </div>

        <div className=" mt-6">
          <div>Icon Background</div>

          <div>
            <ColorPicker onChange={setColor} />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="h-12 rounded-xl cursor-pointer bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)] flex justify-center items-center px-6 shadow-md hover:bg-[linear-gradient(234deg,#c14cd1,#ce51c7,#f76ba8,#fc9d7e)]" onClick={addCollection}>Add Collection</div>
          <div className="h-12 rounded-xl cursor-pointer bg-[#32323e] hover:bg-[#3d3d50] flex justify-center items-center px-6 shadow-md" onClick={reset}>Cancel</div>
        </div>

      </motion.div>

      <div className="fixed w-full h-full bg-[#0000008f] left-0 top-0" onClick={() => onclick(prev => !prev)}></div>
    </>
  )
}

export default CreateCollection
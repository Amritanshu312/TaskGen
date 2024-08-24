"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


const AddTask = () => {
  const [taskValue, setTaskValue] = useState("")
  return (
    <div className="w-full flex border-2 border-[#21212b] p-2 rounded-2xl">
      <div className="bg-[#fc76a0] p-2 rounded-xl text-black w-max cursor-pointer"><FaPlus /></div>
      <input type="text" placeholder="Add a Task" className="px-2 bg-transparent border-none outline-none w-full" value={taskValue} onChange={e => setTaskValue(e.target.value)}/>
    </div>
  )
}

export default AddTask
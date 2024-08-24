"use client"
import { useTodoContext } from "@/context/Todos";
import { useUserContext } from "@/context/UserInfo";
import { AddTaskInsideColl } from "@/utils/TaskHandling";
import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify"

const AddTask = () => {
  const { userInfo } = useUserContext()
  const { TodoId, setTasks } = useTodoContext()

  const [taskValue, setTaskValue] = useState("")

  const addTasks = () => {


    const generateRandomID = () => [...Array(29)].map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('');
    const ID = generateRandomID()
    const createdAt = serverTimestamp()

    toast.promise(
      AddTaskInsideColl(
        userInfo?.uid,
        TodoId,
        {
          title: taskValue
        },
        ID,
        createdAt
      ),

      {
        pending: "Saving Task...",
        success: "Task added successfully!",
        error: "Error saving Task",
      }
    )

    setTasks(prev => [...prev, {
      hash: TodoId,
      title: taskValue,
      id: ID,
      uid: userInfo?.uid,
      status: "start",
      finishDate: null,
      createAt: createdAt,
    }])
  }

  return (
    <div className="w-full flex border-2 border-[#21212b] p-2 rounded-2xl">
      <div className="bg-[#fc76a0] p-2 rounded-xl text-black w-max cursor-pointer"><FaPlus /></div>
      <input
        type="text"
        placeholder="Add a Task"
        className="px-2 bg-transparent border-none outline-none w-full"
        value={taskValue}
        onChange={e => setTaskValue(e.target.value)}
        onKeyUp={e => e.key === "Enter" && addTasks()}
      />
    </div>
  )
}

export default AddTask
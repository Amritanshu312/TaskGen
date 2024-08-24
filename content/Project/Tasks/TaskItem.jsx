"use client"
import { useTodoContext } from "@/context/Todos";
import { updateStatusInsideTaskInsideColl } from "@/utils/TaskHandling";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { toast } from "react-toastify";



const TaskItem = ({
  uid,
  hash,
  finishDate,
  id,
  title,
  status
}) => {
  const { setTasks } = useTodoContext()

  const updateTasksStatus = async () => {
    const newStatus = status === "complete" ? "start" : "complete";

    try {
      await toast.promise(
        updateStatusInsideTaskInsideColl(uid, hash, newStatus, id, title, finishDate),
        {
          pending: "Updating Task...",
          success: "Task updated successfully!",
          error: "Error Updating Task",
        }
      );

      setTasks(prevTasks => {
        const updatedTasks = prevTasks.map(item =>
          item.id === id && item.status !== newStatus
            ? { ...item, status: newStatus }
            : item
        );

        return updatedTasks;
      });
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };


  return (
    <div className="w-full bg-[#21212b] rounded-2xl overflow-hidden">

      <div className="flex items-center gap-4 px-4 py-3">
        <div className="border-[3px] border-[#ec7fab] rounded-lg w-6 h-6 cursor-pointer" onClick={updateTasksStatus}></div>

        <div className="font-['poppins'] text-[#dfdfe2] text-[17px]">{title}</div>

      </div>

      {/* <div className="flex items-center gap-2 font-['poppins'] font-medium ml-[54px]"><MdOutlineCalendarMonth /> <span className="text-[#3ec1bf] text-[15px]">Monday</span></div> */}

    </div>


  )
}

export default TaskItem
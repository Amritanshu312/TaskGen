"use client"
import { useTodoContext } from "@/context/Todos";
import { updateStatusInsideTaskInsideColl } from "@/utils/TaskHandling";
import clsx from "clsx";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { toast } from "react-toastify";



const TaskItem = ({
  uid,
  hash,
  finishDate,
  id,
  title,
  status,
  iscompleted
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
    <div className="w-full bg-[#21212b] rounded-2xl overflow-hidden flex justify-between relativ">

      <div className="flex items-center gap-4 px-4 py-3 w-[90%]">
        <div className={clsx("border-[3px] border-[#ec7fab] rounded-lg min-w-6 h-6 cursor-pointer", { "p-1": iscompleted })} onClick={updateTasksStatus}>
          {iscompleted && <div className="bg-[#ec7fab] w-full h-full rounded-lg"></div>}
        </div>

        <div className={
          clsx(
            "font-['poppins'] text-[#dfdfe2] text-[17px] line-clamp-1 w-full",
            { "line-through": iscompleted }
          )}>{title}</div>

      </div>

      <div className="w-16 h-full bg-red-900"><PiDotsThreeOutlineFill /></div>


    </div>


  )
}

export default TaskItem
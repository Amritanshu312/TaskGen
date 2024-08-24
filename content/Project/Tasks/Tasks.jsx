"use client"
import { useTodoContext } from "@/context/Todos"
import TaskItem from "./TaskItem"
import { Fragment } from "react"

const Tasks = ({ status }) => {
  const { Tasks } = useTodoContext()

  const data = Tasks.filter((item) => {
    if (item?.status) {
      // If the item's status matches the desired status, include it in the filtered array
      return item.status === status;
    } else {
      // If the item's status is undefined or null and the desired status is "start", include the whole task list
      if (status === "start") {
        return true;
      }
    }
    // Otherwise, exclude the item
    return false;
  });


  return data.length !== 0 && (
    <div>
      <div className="font-['poppins'] text-[#ccccd2] font-medium">
        {status === "start" ? "Tasks" :
          status === "complete" ? "Completed" :
            status === "pending" && "Pending"
            || 'Tasks'}
        -
        {data.length}

      </div>

      <div className="mt-6 flex flex-col gap-3">
        {data.map((d, _) => <Fragment key={_} ><TaskItem {...d} status={status} /></Fragment>)}
      </div>
    </div>
  )
}

export default Tasks
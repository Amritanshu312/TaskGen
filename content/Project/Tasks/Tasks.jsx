"use client";
import { useTodoContext } from "@/context/Todos";
import TaskItem from "./TaskItem";
import { Fragment, useEffect, useState } from "react";
import { Reorder } from "framer-motion";

const TaskList = ({ status }) => {
  const { Tasks } = useTodoContext(); // Consider renaming this to tasks
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const filteredTasks = Tasks.filter((item) => {
        if (item?.status) {
          // If the item's status matches the desired status, include it in the filtered array
          return item.status === status;
        } else if (status === "start") {
          // If the item's status is undefined or null and the desired status is "start", include the whole task list
          return true;
        }
        return false;
      });

      setData(filteredTasks);
    };

    getData();
  }, [Tasks, status]);

  return (
    data.length !== 0 && (
      <div>
        <div className="font-['poppins'] text-[#ccccd2] font-medium">
          {status === "start" ? "Tasks" : status === "complete" ? "Completed" : status === "pending" ? "Pending" : "Tasks"} - {data.length}
        </div>

        <Reorder.Group axis="y" values={data} onReorder={setData}>
          <div className="mt-6 flex flex-col gap-3">
            {data.map((task) => (
              <Reorder.Item key={task.id} value={task}>
                <TaskItem {...task} status={status} iscompleted={status === "complete"}/>
              </Reorder.Item>
            ))}
          </div>
        </Reorder.Group>
      </div>
    )
  );
};

export default TaskList;

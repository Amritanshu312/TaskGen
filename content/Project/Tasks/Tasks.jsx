import TaskItem from "./TaskItem"

const Tasks = () => {
  return (
    <div>
      <div className="font-['poppins'] text-[#ccccd2] font-medium">Tasks - 8</div>
      <div className="mt-6 flex flex-col gap-3">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  )
}

export default Tasks
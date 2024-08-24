import AddTask from "@/content/Project/AddTask"
import Title from "@/content/Project/components/Title"
import Tasks from "@/content/Project/Tasks/Tasks"
import { TodoState } from "@/context/Todos"
import { BsThreeDots } from "react-icons/bs"

const Project = ({
  params
}) => {
  const { hashId: todoId } = params

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full mt-28 max-[635px]:mt-12 flex items-center flex-col max-[745px] mx-4">
        <div className="w-full max-[1226px]:ml-[16rem] max-[1090px]:ml-1 max-w-[800px] max-[1226px]:max-w-[712px]">

          <div className="flex justify-between items-center mb-12">
            <Title />
            <div className="cursor-pointer text-xl text-[#bdbdc0]"><BsThreeDots /></div>
          </div>

          <TodoState TodoId={todoId}>

            <AddTask />

            <div className="mt-10 ml-1 flex flex-col gap-10">
              <Tasks status={"start"} />
              <Tasks status={"complete"} />
              <Tasks status={"pending"} />
            </div>

          </TodoState>

        </div>
      </div>
    </div>
  )
}

export default Project
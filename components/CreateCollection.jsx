import Input from "@/content/Authentication/components/Buttons/Input"
import { useState } from "react"

const CreateCollection = ({ onclick }) => {
  const [title, setTitle] = useState("")

  const reset = () => {
    setTitle("")
    onclick(false)
  }

  return (
    <>
      <div className="w-full max-w-[32rem] bg-[#21212b] rounded-2xl border border-[#262633] top-28 fixed z-10 left-1/2 -translate-x-1/2 py-6 px-6">
        <div className="border-2 border-[#2d2d38] rounded-xl">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Collection Name"
            className="w-full h-full bg-transparent outline-none border-none px-4 py-4"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <div className="h-12 rounded-xl cursor-pointer bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)] flex justify-center items-center px-6 shadow-md hover:bg-[linear-gradient(234deg,#c14cd1,#ce51c7,#f76ba8,#fc9d7e)]">Add Collection</div>
          <div className="h-12 rounded-xl cursor-pointer bg-[#32323e] hover:bg-[#3d3d50] flex justify-center items-center px-6 shadow-md" onClick={reset}>Cancel</div>
        </div>

      </div>

      <div className="fixed w-full h-full bg-[#0000008f] left-0 top-0" onClick={() => onclick(prev => prev)}></div>
    </>
  )
}

export default CreateCollection
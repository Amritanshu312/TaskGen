const Sidebar = () => {
  return (
    <div className="h-screen fixed w-80 max-[1226px]:w-[17rem] bg-[#21212b] py-24 pl-8 max-[1090px]:hidden">
      <div className="text-[#cacacd] font-['poppins'] font-medium">Collections</div>

      <div className="mt-7 gap-8 flex flex-col">

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#fa76a0] w-8 h-8 rounded-xl flex items-center justify-center text-lg">S</div>
          <div>School</div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#71c3be] w-8 h-8 rounded-xl flex items-center justify-center text-lg">W</div>
          <div>Work</div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#a86fd7] w-8 h-8 rounded-xl flex items-center justify-center text-lg">D</div>
          <div>Design</div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#fa76a0] w-8 h-8 rounded-xl flex items-center justify-center text-lg">S</div>
          <div>School</div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#71c3be] w-8 h-8 rounded-xl flex items-center justify-center text-lg">W</div>
          <div>Work</div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-[#a86fd7] w-8 h-8 rounded-xl flex items-center justify-center text-lg">D</div>
          <div>Design</div>
        </div>

      </div>

    </div>
  )
}

export default Sidebar
"use client"
import { IoSearch } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="fixed w-full h-20 bottom-0 flex bg-[#181820] items-center justify-between px-8 text-2xl text-[#a1a1a9] min-[635px]:hidden">
      <Link href={"/"} className="cursor-pointer hover:text-white"><RiDashboardFill /></Link>
      <Link href={"/collections"} className="cursor-pointer hover:text-white"><MdOutlineEventNote /></Link>
      <div className="w-8 h-8 bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)] rounded-xl flex items-center justify-center text-2xl cursor-pointer">+</div>
      <div className="cursor-pointer hover:text-white"><IoSearch /></div>
      <div className="cursor-pointer hover:text-white"><FaRegBell /></div>
    </div>
  )
}

export default BottomBar
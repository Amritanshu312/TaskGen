/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IoSearch } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Profile from "@/components/Profile";
import CreateCollection from "@/components/CreateCollection";

const Navbar = () => {
  const pathname = usePathname()
  const [showCreateCollection, setShowCreateCollections] = useState(false)

  const DashboardIcon = useCallback(() => (
    <Link href={"/"} className={clsx("flex gap-2 items-center text-lg cursor-pointer duration-100", { "text-white": pathname === "/" })}>
      <RiDashboardFill /> <span className="text-base">Dashboard</span>
    </Link>
  ), [pathname]);

  const CollectionsIcon = useCallback(() => (
    <Link href={"/collections"} className={clsx("flex gap-2 items-center text-lg cursor-pointer duration-100", { "text-white": pathname === "/collections" })}>
      <MdOutlineEventNote /> <span className="text-base">Collections</span>
    </Link>
  ), [pathname]);

  return (
    <div className="w-full fixed z-10 h-16 bg-[#21212b] top-0 left-0 justify-between px-8 flex items-center shadow-md max-[635px]:hidden">
      <div className="flex gap-8 items-center text-[#a1a1a9]">
        <DashboardIcon />
        <CollectionsIcon />
      </div>

      <div className="flex gap-4 items-center">
        <div className="w-8 h-8 bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)] rounded-xl flex items-center justify-center text-2xl cursor-pointer" onClick={()=> setShowCreateCollections(prev=> !prev)}>+</div>

        <div className="text-xl cursor-pointer">
          <IoSearch />
        </div>
        <div className="text-[19px] cursor-pointer">
          <FaRegBell />
        </div>

        <Profile />
      </div>

      {showCreateCollection && <CreateCollection />}

    </div>
  );
};

export default React.memo(Navbar);

"use client";

import { IoSearch } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import React, { useEffect, useState, useCallback } from "react";
import { auth } from "@/firebase/config";
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const [userInfo, setUserInfo] = useState("loading");

  const pathname = usePathname()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUserInfo(user || false));
    return () => unsubscribe();
  }, []);

  const DashboardIcon = useCallback(() => (
    <Link href={"/"} className={clsx("flex gap-2 items-center text-lg cursor-pointer duration-100", { "text-white": pathname === "/" })}>
      <RiDashboardFill /> <span className="text-base">Dashboard</span>
    </Link>
  ), []);

  const CollectionsIcon = useCallback(() => (
    <Link href={"/collections"} className={clsx("flex gap-2 items-center text-lg cursor-pointer duration-100", { "text-white": pathname === "/collections" })}>
      <MdOutlineEventNote /> <span className="text-base">Collections</span>
    </Link>
  ), []);

  return (
    <div className="w-full fixed z-10 h-16 bg-[#21212b] top-0 left-0 justify-between px-8 flex items-center shadow-md">
      <div className="flex gap-8 items-center text-[#a1a1a9]">
        <DashboardIcon />
        <CollectionsIcon />
      </div>

      <div className="flex gap-4 items-center">
        <div className="w-8 h-8 bg-[linear-gradient(234deg,#fc9d7e,#f76ba8,#ce51c7,#c14cd1)] rounded-xl flex items-center justify-center text-2xl cursor-pointer">
          +
        </div>
        <div className="text-xl cursor-pointer">
          <IoSearch />
        </div>
        <div className="text-[19px] cursor-pointer">
          <FaRegBell />
        </div>

        {userInfo === "loading" ? (
          <div className="bg-[#49495f] h-[35px] w-[35px] rounded-full"></div>
        ) : userInfo ? (
          <Image src={userInfo.photoURL} width={35} height={35} alt="profile" className="object-cover rounded-full cursor-pointer" />
        ) : (
          <Link href="/auth/signin" className="bg-[#49495f] h-[35px] w-[35px] rounded-full flex items-center justify-center text-xs cursor-pointer">
            <FaUserLarge />
          </Link>
        )}
      </div>
    </div>
  );
};

export default React.memo(Navbar);

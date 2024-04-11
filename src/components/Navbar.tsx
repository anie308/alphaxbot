"use client";

import Link from "next/link";
import React from "react";
import logo from "@/assets/alphalogo.svg";
import Image from "next/image";
import { HiBars4 } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-[#081428] sticky z-40 top-0 h-[80px] lg:p-[20px_35px] flex flex-col lg:flex-row items-center justify-between 2xl:container">
      <div className="w-full flex lg:w-fit items-center justify-between lg:justify-start p-[20px] lg:p-0">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="ml-[-15px] lg:ml-0 h-[40px]"
          />
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <HiBars4 className="text-white text-[30px]" />
        </button>
      </div>
      <div
        className={`${
          open ? "left-0" : "left-[-100%] lg:left-0"
        } fixed lg:relative transition-all top-0 h-screen lg:h-fit bg-black lg:bg-transparent w-full lg:w-fit flex flex-col lg:flex-row items-start lg:items-center space-y-[30px] p-[20px] lg:p-0 lg:space-y-0 lg:space-x-[30px] z-20`}
      >
        <div className="lg:hidden flex items-center justify-end w-full">
          <button onClick={() => setOpen(!open)}>
            <FaPlus className="rotate-45 text-[30px]" />
          </button>
        </div>
        <Link href="/">Features</Link>
        <Link href="/">AlphaX Whitepaper</Link>
        <button className="bg-[#6942E2] text-white p-[8px_30px] rounded-[6px]">
          Join us
        </button>
      </div>
    </div>
  );
}

export default Navbar;

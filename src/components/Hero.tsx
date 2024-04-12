import Image from "next/image";
import React from "react";
import herobg from "@/assets/herobg.svg";
import time from "@/assets/time.svg";

import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="overflow-hidden h-[600px] lg:h-[650px] relative">
      <Image src={herobg} alt="hero" className="w-full h-full object-cover" />
      <div className="absolute top-0 w-full h-full grid lg:grid-cols-2 gap-[20px] p-[20px] items-center">
        <div className="mt-[20px] lg:mt-0 lg:pl-[40px]">
          <p className="text-[35px] lg:text-[64px] font-[600] leading-[40px] lg:leading-[76px] font-syne">
            Trade like an ALPHA with AI-powered{" "}
            <span className="text-[#6942E2]">onchain</span> analysis!
          </p>
          <button className="rounded-[4px]  p-[10px_40px] mt-[20px] lg:mt-[30px] bg-[#6942E2] text-white font-syne flex items-center space-x-[20px]">
            <span>Become an Alpha Trader</span> <FaArrowRightLong />
          </button>
        </div>
        <div className="flex items-start lg:items-center justify-center w-full h-full">
          <Image src={time} alt="" className="h-[60%] lg:h-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

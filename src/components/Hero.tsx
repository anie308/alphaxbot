import Image from "next/image";
import React from "react";
import herobg from "@/assets/herobg.svg";
import time from "@/assets/time.svg";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="">
      <div className="overflow-hidden h-[600px] lg:h-[650px] relative flex items-center justify-center">
        <Image src={herobg} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute top-0 w-full h-full grid lg:grid-cols-2 gap-[20px] p-[20px] items-center 2xl:container">
          <div className="mt-[20px] lg:mt-0 pl-0 lg:pl-[40px]">
            <p className="text-[30px] lg:text-[50px] font-[600] leading-[40px] lg:leading-[70px] font-syne">
              Trade like an ALPHA with AI-powered 
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
      <div className="w-full bottom-[-13%] lg:bottom-[-9%]  flex items-center justify-center absolute ">
        <div className="w-[90%]  lg:w-[70%] flex items-center space-x-[5px] lg:space-x-[15px] justify-center bg-[#D9D9D933] h-[50px] lg:h-[80px] rounded-[20px] p-[10px]">
        <CiCircleCheck className="text-[25px]" />
        <span className="text-[14px] lg:text-[20px] font-syne">Tested and trusted by Alphas of the Trading Game...</span>
        
        </div>
      </div>
    </div>
  );
}

export default Hero;

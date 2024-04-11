import Image from "next/image";
import React from "react";
import herobg from "@/assets/herobg.svg";
import time from "@/assets/time.svg";
function Hero() {
  return (
    <div className="overflow-hidden h-[550px] lg:h-[650px] relative">
      <Image src={herobg} alt="hero" className="w-full h-full object-cover" />
      <div className="absolute top-0 w-full h-full grid lg:grid-cols-2 gap-[20px] p-[20px] items-center">
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          distinctio reprehenderit aspernatur sed fugiat quisquam. Impedit
          ipsum, odio molestias architecto iusto quas. Officia sapiente quam
          nobis quis dolores asperiores odit.
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <Image src={time} alt="" className="h-[70%] lg:h-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

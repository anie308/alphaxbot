import React from "react";
import rock from "@/assets/rock.svg";
import Image from "next/image";
function Join() {
  return (
    <div className="bg-[#6942E2] h-[750px] lg:h-[800px] flex items-center justify-center px-[20px] lg:p-0">
      <div className="h-[85%] lg:h-[70%] w-full lg:w-[75%] flex flex-col lg:flex-row items-center justify-between border join rounded-[20px] lg:rounded-[43px] p-[30px_40px] lg:p-[20px_40px]">
        <div className="flex-1">
          <p className="font-syne text-[35px] lg:text-[64px] leading-[40px] lg:leading-[70px]">
            Be a king in the trading game. Play like one.
          </p>
          <div className="w-full grid lg:grid-cols-2 gap-[20px] mt-[30px]">
            <button className="rounded-[4px]  p-[10px_20px] bg-[#6942E2] text-white font-syne">Join our Community</button>
            <button className="rounded-[4px] p-[10px_20px] border border-[#FFFFFF] font-syne">Get Customer Support</button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Image src={rock} alt="rock" className="w-full lg:w-[80%] h-[90%] lg:h-[80%]" />
        </div>
      </div>
    </div>
  );
}

export default Join;

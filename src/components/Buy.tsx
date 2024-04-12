import Image from "next/image";
import React from "react";
import chart from "@/assets/chart.svg";
import buy from "@/assets/buy.svg";

function Buy() {
  return (
    <div className="bg-[#081428] p-[40px_20px]  lg:p-[50px_40px] h-fit lg:h-[700px] grid lg:grid-cols-2 gap-[40px]  items-center">
      <div className="my-[40px] lg:mt-0 relative flex items-center justify-center w-full min-h-full">
        <div className="h-[200px] lg:h-[300px] buy w-[200px] lg:w-[300px] bg-[#28E7C5] rounded-full"></div>
        <div className="absolute">
          <Image src={buy} alt="buy" className="" />
        </div>
        {/* <Image src={buy} alt="buy" className="lg:hidden" /> */}
      </div>
      <div className=" flex flex-col justify-center h-full">
        <p className="font-[600] font-syne text-[20px] lg:text-[40px] text-[#28E7C5]">
          AlphaXBot isn&apos;t your <br className="hidden lg:block" /> ordinary
          trading bot.
        </p>
        <p className="font-syne text-[20px] mt-[20px] w-full lg:w-[70%]">
          Powered by cutting-edge onchain analysis and Artificial Intelligence,
          it delivers precise signals tailored to your preferred chains and
          trading strategies.
        </p>
        <p className="font-syne text-[20px] mt-[20px] w-full lg:w-[70%]">
          Whether you&apos;re a seasoned trader or just dipping your toes into
          the crypto market, AlphaXBot equips you with the insights you need to
          succeed.
        </p>
      </div>
    </div>
  );
}

export default Buy;

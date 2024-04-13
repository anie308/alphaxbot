import React from "react";
import onchain from "@/assets/onchain.svg";
import multi from "@/assets/multi.svg";
import compre from "@/assets/compre.svg";
import trading from "@/assets/trading.svg";
import intuit from "@/assets/intuit.svg";
import high from "@/assets/high.svg";

import Image from "next/image";
function Features() {
  return (
    <div className="bg-[#FBFAFF] flex flex-col items-center justify-center px-[20px] overflow-hidden py-[50px] lg:py-[100px] relative">
      <div className="box1 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute top-0 lg:top-[-10%] left-0 lg:left-[-15%]"></div>
      <div className="box2 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute bottom-0 lg:bottom-[-10%] left-0 lg:left-[-15%]"></div>
      <div className="box1 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute bottom-0 lg:bottom-[-15%] right-0 lg:right-[-10%]"></div>
      <div className="box2 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] rounded-full absolute top-0 lg:top-[-15%] right-0 lg:right-[-10%]"></div>
      <p className="text-[#081428] mb-[40px] font-[600] font-syne text-[28px] lg:text-[36px] text-center z-20">
        AlphaX Bot Features
      </p>
      <div className="grid lg:grid-cols-3 gap-[20px] w-full lg:w-[80%] z-20">
        <div className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black">
          <div className="h-[136px] w-full bg-black">
            <Image
              src={onchain}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-syne text-[#081428] text-[20px] font-[600] mt-[5px]">
            Onchain Analysis & AI Signals
          </p>
          <p className="font-[400] font-syne text-[16px] text-[#081428] leading-[20px]">
            Leverages onchain data analysis and AI algorithms to generate
            accurate trading signals.
          </p>
          <p className="font-[400] font-syne text-[16px] mt-[5px] text-[#081428] leading-[20px]">
            Signals are based on real-time insights from various blockchain
            networks.
          </p>
        </div>
        <div className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black">
          <div className="h-[136px] w-full bg-black">
            <Image src={multi} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="font-syne text-[#081428] text-[20px] font-[600] mt-[5px]">
            Multi-Chain Compatibility
          </p>
          <p className="font-[400] font-syne text-[16px] text-[#081428] leading-[20px]">
            Provides signals and trading options for popular blockchain networks
            like Ethereum, Solana, BSC, and Arbitrum.
          </p>
        </div>
        <div className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black">
          <div className="h-[136px] w-full bg-black">
            <Image src={compre} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="font-syne text-[#081428] text-[20px] font-[600] mt-[5px]">
            Comprehensive Signal Delivery
          </p>
          <p className="font-[400] font-syne text-[16px] text-[#081428] leading-[20px]">
            Delivers detailed buy, sell, and hold recommendations with
            entry/exit points and risk assessments.{" "}
          </p>
        </div>
        <div className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black">
          <div className="h-[136px] w-full bg-black">
            <Image
              src={trading}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-syne text-[#081428] text-[20px] font-[600] mt-[5px]">
            Customizable Trading Strategies
          </p>
          <p className="font-[400] font-syne text-[16px] text-[#081428] leading-[20px]">
            Allows users to customize their trading strategies with various buy
            and sell options, including limit orders and stop-loss orders.{" "}
          </p>
        </div>
        <div className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black">
          <div className="h-[136px] w-full bg-black">
            <Image src={intuit} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="font-syne text-[#081428] text-[20px] font-[600] mt-[5px]">
            Intuitive User Interface
          </p>
          <p className="font-[400] font-syne text-[16px] text-[#081428] leading-[20px]">
            Features a user-friendly interface for easy navigation and seamless
            trading execution.
          </p>
        </div>
        <div className="bg-white rounded-[8px] shadow-sm flex flex-col items-start p-[20px] text-black">
          <div className="h-[136px] w-full bg-black">
            <Image src={high} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="font-syne text-[#081428] text-[20px] font-[600] mt-[5px]">
            High Accuracy and Reliability
          </p>
          <p className="font-[400] font-syne text-[16px] text-[#081428] leading-[20px]">
            Ensures high accuracy in signal generation through rigorous data
            analysis and AI-driven algorithms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;

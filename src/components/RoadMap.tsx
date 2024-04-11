"use client";
import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

function RoadMap() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="bg-white flex flex-col items-center justify-center px-[20px] overflow-hidden py-[50px] lg:py-[100px] relative">
      <p className="text-[#081428] mb-[40px] font-[600] font-syne text-[28px] lg:text-[36px] text-center z-20">
        Roadmap
      </p>
      <div className="w-full lg:w-[70%] text-black grid gap-[20px]">
        <div
          className={`${
            step === 1 ? "h-fit " : "h-[70px]"
          } rd1 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 1 ? 0 : 1))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 1: Development and Beta Testing (3 months)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            assumenda nostrum nam nihil at ullam quos veniam consectetur iusto
            corrupti, a ipsa laborum sit fugit eligendi placeat, quia error
            eveniet.
          </div>
        </div>
        <div
          className={`${
            step === 2 ? "h-fit " : "h-[70px]"
          } rd2 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 2 ? 0 : 2))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 2: Launch and Early Adoption (3 months)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            assumenda nostrum nam nihil at ullam quos veniam consectetur iusto
            corrupti, a ipsa laborum sit fugit eligendi placeat, quia error
            eveniet.
          </div>
        </div>
        <div
          className={`${
            step === 3 ? "h-fit " : "h-[70px]"
          } rd3 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 3 ? 0 : 3))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 3: Expansion and Optimization (6 months)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            assumenda nostrum nam nihil at ullam quos veniam consectetur iusto
            corrupti, a ipsa laborum sit fugit eligendi placeat, quia error
            eveniet.
          </div>
        </div>
        <div
          className={`${
            step === 4 ? "h-fit " : "h-[70px]"
          } rd3 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 4 ? 0 : 4))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 4: Scaling and Sustainability (Ongoing)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            assumenda nostrum nam nihil at ullam quos veniam consectetur iusto
            corrupti, a ipsa laborum sit fugit eligendi placeat, quia error
            eveniet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;

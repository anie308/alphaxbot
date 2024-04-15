import React from "react";
import logo from "@/assets/alphalogo.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
   <div className="bg-[#081428] w-full flex items-center justify-center">
     <div className="grid lg:grid-cols-2  p-[40px_20px] lg:p-[70px_50px] 2xl:container">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" className="h-[50px]" />
        </Link>
        <p className="font-syne text-[16px] lg:text-[18px] mt-[10px] lg:mt-[20px] w-fit text-start text-white border-b border-[#EAEAEA] pb-[20px]">
          AlphaX Bot delivers precise signals tailored to{" "}
          <br className="hidden lg:block" /> your preferred chains and trading
          strategies.{" "}
        </p>
        <p className="mt-[20px] font-syne">© 2024. All rights reserved.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start space-y-[20px] lg:space-y-0 lg:space-x-[50px] justify-start mt-[20px] lg:mt-0">
        <div className="text-[24px] font-syne">Twitter</div>
        <div className="text-[24px] font-syne">Telegram</div>
        <div className="text-[24px] font-syne">Whitepaper</div>
      </div>
    </div>
   </div>
  );
}

export default Footer;

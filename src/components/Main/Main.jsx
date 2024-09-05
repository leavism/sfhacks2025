"use client";

import { useState } from "react";
import Image from "next/image";
import CountDown from "@/components/countdown/Countdown";
import AboutUs from "@/components/aboutUs/AboutUs";
import Navbar from "@/components/Navbar";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-screen h-screen bg-webdev-temp  flex flex-col gap-4 md:gap-12  ">
        <div className="md:px-24 md:py-4 ">
          <Navbar isOpen={isOpen} handleToggle={handleToggle} />
        </div>
        <div className="grid justify-items-center translate-y-16 md:-translate-y-16  lg:-translate-y-60 scale-[90%] md:scale-[60%] lg:scale-[55%] self-center xl:scale-[60%] xl:-translate-y-60 z:scale-[70%] z:-translate-y-44 k:scale-[60%] k:-translate-y-44 bruh:scale-[70%] bruh:-translate-y-20 ok:scale-[70%] ok:-translate-y-36">
          <Image
            src="/logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className={`w-1/2 h-auto md:w-1/2 ${isOpen ? "hidden" : "block"}`}
          />
          <CountDown />
          <a href="https://discord.gg/P5PsDR6G7W" target="_blank">
            <button className="bg-sfPink w-40 h-12 text-xl text-black rounded-full ">
              {" "}
              Discord{" "}
            </button>
          </a>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}
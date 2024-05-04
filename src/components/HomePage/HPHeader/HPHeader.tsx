"use client";

import PopupHPHeader from "@/components/PopupHPHeader/PopupHPHeader";
import Image from "next/image";
import { useState } from "react";

const HPHeader = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="">
      <div className="relative h-[300px]">
        <Image
          src="/homePage/hpHeader/main-bg (2).jpg"
          width={1920}
          height={1080}
          alt="baner"
          className="absolute top-0 left-0 w-full h-full object-cover blur-md"
        />

        <div className="absolute top-1/2 left-0 flex items-center gap-4 flex-col w-full">
          <Image
            src="/header/main_logo.png"
            width={100}
            height={100}
            alt="logo"
            className="rounded-xl shadow-buttonMainBrick transition-all duration-200 cursor-pointer hover:scale-110"
            onClick={togglePopup}
          />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">LORENC BASE</p>
            {/* <div className="flex items-center gap-4 text-[#ada7a0] ">
              <p className="">Notes count: 158</p>
              <p className="text-xs">●</p>
              <p className="">Users: 11</p>
            </div> */}
          </div>
        </div>
      </div>
      <PopupHPHeader popupOpen={popupOpen} closePopup={closePopup} />
    </div>
  );
};
export default HPHeader;

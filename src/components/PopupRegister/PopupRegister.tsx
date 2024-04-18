"use client";

import Link from "next/link";

interface IPopupRegisterProps {
  closePopupRegister: () => void; 
}

export function PopupRegister({ closePopupRegister }: IPopupRegisterProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full mb-8 px-8">
      <div className="max-w-5xl mx-auto bg-[#FAF0E6] p-4 flex flex-col gap-4 items-center text-center shadow-buttonMainBrick">
        <p className="text-[#001a2c] font-bold text-2xl">DESCRIPTION</p>
        <span className="text-md text-[#001a2c] font-medium">
          As a regular user, you can browse content but wont be able to create
          or modify notes. For elevated privileges, please contact the
          administrator
        </span>
        <div className="flex gap-8">
            <Link
              href="/contacts"
              className="font-bold px-4 py-1 shadow-button  bg-[#001a2c] shadow-buttonMainDark text-[#FAF0E6] transition-all duration-200 cursor-pointer hover:shadow-buttonMainDarkBrick"
            >
              CONTACTS
            </Link>
            <button onClick={closePopupRegister} className="bg-[#FF3333] font-bold px-4 py-1 transition-all duration-200 cursor-pointer shadow-buttonRed hover:shadow-buttonRedBrick">
              CLOSE
            </button>
          </div>
      </div>
    </div>
  );
}

export default PopupRegister;

"use client";

import Link from "next/link";

export function PopupRegister({closePopupRegister}) {
  return (
    <div className="fixed bottom-0 left-0 w-full mb-8 px-8">
      <div className="border border-[#5f5f5f] max-w-5xl mx-auto bg-black sm:bg-transparent backdrop-blur p-2 flex flex-col gap-2 items-center text-center">
        <p className="font-bold text-center text-lg">DESCRIPTION</p>
        <span className="text-md">
          As a regular user, you can browse content but wont be able to create
          or modify notes. For elevated privileges, please contact the
          administrator
        </span>
        <div className="flex gap-8">
          <Link
            href="/contacts"
            className="font-bold px-2 shadow-button bg-white text-black transition-all duration-200 cursor-pointer hover:bg-black hover:text-white"
          >
            CONTACTS
          </Link>
          <button onClick={closePopupRegister} className="text-[#480607] bg-[#FF3333] font-bold px-2 transition-all duration-200 cursor-pointer shadow-buttonRed hover:bg-[#480607] hover:text-[#FF3333]">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupRegister;

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PopupAuth } from "../PopupAuth/PopupAuth";

export function LoginButton() {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <button
          onClick={togglePopup}
          className="bg-[#FAF0E6] text-black shadow-buttonMain transition-all duration-200 px-4 py-1 font-bold hover:shadow-buttonMainBrick"
        >
          LOGIN
        </button>
      ) : (
        <div>
          <button className="text-[#480607] font-bold bg-[#FF3333] shadow-buttonRed transition-all duration-200 px-2 hover:bg-[#480607] hover:text-[#FF3333]">
            LOGOUT
          </button>
        </div>
      )}
      <PopupAuth popupOpen={popupOpen} closePopup={closePopup}/>
    </>
  );
}

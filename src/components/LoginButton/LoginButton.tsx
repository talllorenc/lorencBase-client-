import { useEffect, useState } from "react";
import { PopupAuth } from "../PopupAuth/PopupAuth";
import { useProfileQuery } from "@/redux/slices/users/usersApiSlice";
import Link from "next/link";

export function LoginButton() {
  const { data: user, isLoading, isError, isSuccess } = useProfileQuery('');
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {!isSuccess ? (
        <button
          onClick={togglePopup}
          className="bg-[#FAF0E6] text-black shadow-buttonMain transition-all duration-200 px-4 py-1 font-bold hover:shadow-buttonMainBrick"
        >
          LOGIN
        </button>
      ) : (
        <div>
          <Link href="/profile" className="text-[#480607] uppercase font-bold bg-[#FF3333] shadow-buttonRed transition-all duration-200 px-4 py-1 hover:shadow-buttonRedBrick">
            {user?.name}
          </Link>
        </div>
      )}
      <PopupAuth popupOpen={popupOpen} closePopup={closePopup} />
    </>
  );
}

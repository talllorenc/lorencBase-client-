import { useEffect, useState } from "react";
import { PopupAuth } from "../../PopupAuth/PopupAuth";
import { useProfileQuery } from "@/redux/slices/users/usersApiSlice";
import Link from "next/link";
import { selectCurrentUser } from "@/redux/slices/auth/authSlice";
import { useSelector } from "react-redux";
import useUserProfile from "@/hooks/userProfile";

export function LoginButton() {
  const currentUser = useUserProfile();
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {!currentUser ? (
        <Link
          href={"/login"}
          className="bg-[#FAF0E6] text-black shadow-buttonMain transition-all duration-200 px-4 py-1 font-bold hover:shadow-buttonMainBrick"
        >
          LOGIN
        </Link>
      ) : (
        <div>
          <Link
            href="/profile"
            className="text-[#480607] uppercase font-bold bg-[#FF3333] shadow-buttonRed transition-all duration-200 px-4 py-1 hover:shadow-buttonRedBrick"
          >
            {currentUser?.name}
          </Link>
        </div>
      )}
      {/* <PopupAuth popupOpen={popupOpen} closePopup={closePopup} /> */}
    </>
  );
}

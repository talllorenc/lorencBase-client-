import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PopupAuth } from "../PopupAuth/PopupAuth";
import { useSendLogoutMutation } from "@/redux/api/authApi";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/redux/slices/authSlice";


export function LoginButton() {
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();
    const isAuthenticated = useSelector(selectCurrentToken) !== null;
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
          <button
            onClick={sendLogout}
            className="text-[#480607] font-bold bg-[#FF3333] shadow-buttonRed transition-all duration-200 px-4 py-1 hover:shadow-buttonRedBrick"
          >
            LOGOUT
          </button>
        </div>
      )}
      <PopupAuth popupOpen={popupOpen} closePopup={closePopup} />
    </>
  );
}

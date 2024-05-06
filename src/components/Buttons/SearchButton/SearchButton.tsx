import { PopupSearch } from "@/components/PopupSearch/PopupSearch";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setPopupOpen(!popupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/") {
        setPopupOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className=" cursor-pointer" onClick={handlePopupOpen}>
      <div className="hidden md:flex items-center gap-1 border border-[#9c9b9b] text-[#9c9b9b] px-2 py-1 font-boldp">
        <p className="border px-1 rounded bg-[#F8F4FF] text-[#0A0A0A] font-bold">
          /
        </p>
        to search
      </div>
      <div className="flex md:hidden" onClick={handlePopupOpen}>
        <FaSearch className="text-[#F8F4FF] text-xl" />
      </div>
      <PopupSearch popupOpen={popupOpen} closePopup={closePopup} />
    </div>
  );
};

export default SearchButton;

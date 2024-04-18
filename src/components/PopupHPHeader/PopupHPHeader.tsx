import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface IPopupHPHeaderProps {
  popupOpen: boolean;
  closePopup: () => void;
}

export function PopupHPHeader({ popupOpen, closePopup }: IPopupHPHeaderProps) {
  return (
    <AnimatePresence>
      {popupOpen && (
        <motion.div
          className="fixed p-2 top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={closePopup}
        >
          <motion.div
            className="flex flex-col gap-4 items-center max-w-[600px] shadow-buttonMainBrick rounded-lg p-4 bg-[#FAF0E6]"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[#001a2c] font-bold text-2xl">WELCOME FREN</p>

            <div className="w-full text-[#001a2c] flex items-center flex-col text-center">
              <span className="font-medium text-lg">
                Welcome to lorencBase! Here, you will find a collection of my
                programming creations and solutions. This portal carries an
                exclusively introductory format. If you want to add your
                solutions, please contact me
              </span>
            </div>

            <div className="flex gap-8">
              <Link
                href="/contacts"
                className="font-bold px-4 py-1 shadow-button  bg-[#001a2c] shadow-buttonMainDark text-[#FAF0E6] transition-all duration-200 cursor-pointer hover:shadow-buttonMainDarkBrick"
              >
                CONTACTS
              </Link>
              <button onClick={closePopup} className="bg-[#FF3333] font-bold px-4 py-1 transition-all duration-200 cursor-pointer shadow-buttonRed hover:shadow-buttonRedBrick">
                CLOSE
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupHPHeader;

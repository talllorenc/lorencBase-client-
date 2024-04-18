import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "../AuthForm/LoginForm";

interface IPopupAuthProps {
  popupOpen: boolean;
  closePopup: () => void;
}

export function PopupAuth({ popupOpen, closePopup }: IPopupAuthProps ) {
  return (
    <AnimatePresence>
      {popupOpen && (
        <motion.div
          className="fixed p-2 top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={closePopup}
        >
          <motion.div
            className="flex flex-col gap-4 items-center min-w-[300px] shadow-buttonMainBrick rounded-lg p-4 bg-[#FAF0E6]"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between w-full">
              <p className="text-[#001a2c] font-bold text-2xl">LOGIN</p>
              <button
                onClick={closePopup}
                className="flex border font-medium border-[#8c8b8b] bg-[#001a2c] text-[#FAF0E6] p-1 rounded-lg ml-auto"
              >
                Esc
              </button>
            </div>

            <div className="w-full mt-4">
              <LoginForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

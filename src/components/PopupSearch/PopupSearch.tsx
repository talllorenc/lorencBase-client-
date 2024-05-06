import { motion, AnimatePresence } from "framer-motion";
import GlobalSearch from "../GlobalSearch/GlobalSearch";

interface IPopupAuthProps {
  popupOpen: boolean;
  closePopup: () => void;
}

export function PopupSearch({ popupOpen, closePopup }: IPopupAuthProps) {
  return (
    <AnimatePresence>
      {popupOpen && (
        <motion.div
          className="fixed p-4 top-0 left-0 w-full h-screen bg-black bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={closePopup}
        >
          <motion.div
            className="flex flex-col gap-4 items-center shadow-buttonMainBrick bg-[#0A0A0A] rounded-lg container"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 w-full flex items-center flex-col gap-4">
              <span className="text-[#9c9b9b] text-center">
                At the moment, the search works only by the name of the note.
                Advanced search will be added soon
              </span>
              <GlobalSearch />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

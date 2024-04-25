import Link from "next/link";
import { LoginButton } from "../LoginButton/LoginButton";
import { motion, AnimatePresence } from "framer-motion";

interface IPopupAuthProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const headerLinks = [
  {
    id: 1,
    title: "Notes",
    path: "/notes",
  },
  {
    id: 2,
    title: "Helpers",
    path: "/helpers",
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
  },
];

export function MobileMenu({ isMenuOpen, closeMenu }: IPopupAuthProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-[#1c1b1b] bg-opacity-70 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={closeMenu}
        >
          <motion.div
            className="bg-black w-[200px] fixed top-0 right-0 h-screen shadow-buttonMainBrick"
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: isMenuOpen ? 0 : "100%",
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            exit={{ x: "100%", opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              {headerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-md border-b p-4 font-bold"
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex items-center justify-center mt-4">
                <LoginButton />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;

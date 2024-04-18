import Link from "next/link";
import { LoginButton } from "../LoginButton/LoginButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import {FaBars} from "react-icons/fa"

const headerLinks = [
  {
    id: 1,
    title: "Notes",
    path: "/notes",
  },
  {
    id: 2,
    title: "Contacts",
    path: "/contacts",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 backdrop-blur z-50">
      <div className="w-full max-w-7xl mx-auto px-5">
        <nav className="flex items-center justify-between py-2">
          <Link
            href="/"
            className="flex transition-all duration-200 items-center hover:scale-110"
          >
            <p className="text-3xl font-bold">lorencBase</p>
          </Link>

          <div className="hidden sm:flex items-center gap-4">
            {headerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-md hover:underline"
              >
                {link.title}
              </Link>
            ))}
            <LoginButton />
          </div>

          <div className="sm:hidden">
            <FaBars onClick={toggleMenu} className="text-2xl"/>
            <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu}/>
          </div>
        </nav>
      </div>
    </header>
  );
}

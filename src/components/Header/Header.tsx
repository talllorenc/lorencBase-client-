import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="w-full fixed top-0 left-0 backdrop-blur z-50">
      <div className="w-full max-w-7xl mx-auto px-5">
        <nav className="flex items-center justify-between py-2">
          <Link href="/" className="flex transition-all duration-200 items-center hover:scale-110">
            <Image
              src="/header/main_logo.png"
              width={30}
              height={30}
              className="w-full h-full object-contain rounded-xl"
              alt="main logo"
            />
            <p className="text-3xl">lb.</p>
          </Link>

          <div className="flex items-center gap-4">
            {headerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-md hover:underline"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-white text-black shadow-button transition-all duration-200 px-2 font-medium hover:bg-black hover:text-white "
            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

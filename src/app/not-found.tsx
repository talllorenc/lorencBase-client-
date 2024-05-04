import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <p className="text-8xl font bold">404</p>
        <p className="font-medium text-xl">Whoops, that page is gone</p>
      </div>

      <Link
        href="/"
        className="bg-[#FAF0E6] text-black shadow-buttonMain transition-all duration-200 px-4 py-1 font-bold hover:shadow-buttonMainBrick"
      >
        HOME PAGE
      </Link>
    </div>
  );
}



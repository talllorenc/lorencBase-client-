"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {FaSearch} from "react-icons/fa";

interface GlobalSearchProps {
  onSearch: (term: string) => void;
}

const SearchInput = ({ onSearch }: GlobalSearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    onSearch(term);
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <FaSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-[#9c9b9b]"/>
      <input
        className="border-2 border-blue-500 rounded w-full bg-transparent focus:outline-none px-8 py-1"
        type="text"
        placeholder="Something to search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchInput;

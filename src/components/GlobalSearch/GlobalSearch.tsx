"use client";

import SearchInput from "@/components/GlobalSearch/SearchInput";
import SearchList from "@/components/GlobalSearch/SearchList";
import { useState } from "react";

const GlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <SearchInput onSearch={handleSearch} />
      {searchTerm && <SearchList searchTerm={searchTerm} />}
    </div>
  );
};
export default GlobalSearch;

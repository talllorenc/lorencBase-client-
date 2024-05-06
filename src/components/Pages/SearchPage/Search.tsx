"use client";

import GlobalSearch from "@/components/GlobalSearch/SearchInput";
import SearchList from "@/components/GlobalSearch/SearchList";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-center text-6xl font-bold">SEARCH</h1>
        <div className="mt-8 max-w-2xl mx-auto flex flex-col gap-4">
          <GlobalSearch onSearch={handleSearch} />

          {searchTerm && <SearchList searchTerm={searchTerm} />}
        </div>
      </div>
    </div>
  );
};
export default Search;

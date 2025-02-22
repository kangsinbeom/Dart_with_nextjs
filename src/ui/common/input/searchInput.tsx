"use client";

import SearchIcon from "@/ui/icon/search";
import { FormEvent } from "react";

interface SearchInputProps {
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchInput = ({ onSubmitHandler }: SearchInputProps) => {
  return (
    <form className="relative" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="box-border w-full rounded-lg border border-cgray-600 px-3 py-2 text-sm"
        placeholder="Search..."
        name="search"
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2"
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchInput;

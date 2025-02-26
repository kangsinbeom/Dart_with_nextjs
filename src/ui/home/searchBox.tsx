"use client";

import SearchInput from "@/ui/common/input/searchInput";
import { searchCategoryInfo } from "@/utils/data";
import Button from "../common/button/button";
import { SearchState } from "@/store/search";
import { FormEvent } from "react";

interface SearchBoxProps
  extends Pick<SearchState, "setSearchParams" | "searchParams"> {
  onSubmitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchBox = ({
  onSubmitHandler,
  searchParams,
  setSearchParams,
}: SearchBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <SearchInput onSubmitHandler={onSubmitHandler} />
      <div className="flex w-full gap-3">
        {searchCategoryInfo.map(({ text, value }) => (
          <Button
            key={value}
            text={text}
            value={value}
            isFocused={searchParams.filter === value}
            onClickHandler={(event) => setSearchParams("filter")(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;

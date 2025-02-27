"use client";

import { SearchState } from "@/store/search";
import AllIcon from "../icon/all";
import Button from "../common/button/button";
import { SearchDataKey, SearchInfoType } from "@/utils/type";
import clsx from "clsx";
import { ButtonBaseStyles } from "@/utils/func/getButtonStyles";

interface CategoryBox
  extends Pick<SearchState, "setSearchParams" | "searchParams"> {
  label: string;
  hasAllButton?: boolean;
  buttonStyle?: ButtonBaseStyles;
  list: SearchInfoType[];
  listType: SearchDataKey;
}

const CategoryBox = ({
  label,
  hasAllButton = false,
  buttonStyle = "rounded",
  list,
  listType,
  searchParams,
  setSearchParams,
}: CategoryBox) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <p>{label}</p>
        {hasAllButton && (
          <button
            onClick={(event) => setSearchParams(listType)(event)}
            data-value="all"
          >
            <AllIcon isSelected={searchParams[listType] === "all"} />
          </button>
        )}
      </div>
      <div
        className={clsx(
          "flex gap-1",
          buttonStyle === "rounded"
            ? "rounded-full border border-black p-0.5"
            : "",
        )}
      >
        {list.map(({ text, value }) => (
          <Button
            key={value}
            text={text}
            value={value}
            style={buttonStyle}
            isFocused={searchParams[listType] == value}
            onClickHandler={(event) => setSearchParams(listType)(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryBox;

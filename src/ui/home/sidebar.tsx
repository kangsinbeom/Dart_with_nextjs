"use client";

import useSearchBoxOption from "@/hooks/useSearchBoxOption";
import CategoryBox from "@/ui/home/categoryBox";
import CostBox from "@/ui/home/costBox";
import SearchBox from "@/ui/home/searchBox";
import FilterIcon from "@/ui/icon/filter";
import { searchExhibitionInfo, searchSortedInfo } from "@/utils/data";
import PostButton from "./postButton";
import ResetIcon from "../icon/reset";

const Sidebar = () => {
  const { onSubmitHandler, resetHandler, setExpenseParams, ...cateoryOption } =
    useSearchBoxOption();

  return (
    <div className="flex min-w-[320px] flex-col items-center gap-5 border-t border-cblack-100 px-5 py-10">
      <header className="flex w-full flex-row justify-between">
        <p className="font-bold">FILTER</p>
        <FilterIcon />
      </header>
      <div className="flex w-full flex-col gap-5">
        <div className="flex flex-row items-center justify-end gap-1">
          <p className="text-sm font-bold text-cgray-400">초기화</p>
          <button onClick={resetHandler}>
            <ResetIcon />
          </button>
        </div>
        <SearchBox onSubmitHandler={onSubmitHandler} {...cateoryOption} />
        <CostBox
          setExpenseParams={setExpenseParams}
          searchParams={cateoryOption.searchParams}
        />
        <CategoryBox
          label="전시상태"
          list={searchExhibitionInfo}
          listType="exhibition"
          hasAllButton
          {...cateoryOption}
        />
        <CategoryBox
          label="정렬"
          list={searchSortedInfo}
          listType="sorted"
          {...cateoryOption}
        />
      </div>
      <PostButton />
    </div>
  );
};

export default Sidebar;

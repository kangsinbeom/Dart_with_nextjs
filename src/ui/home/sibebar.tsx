"use client";

import useSearchBoxOption from "@/hooks/useSearchBoxOption";
import CategoryBox from "@/ui/home/categoryBox";
import CostBox from "@/ui/home/costBox";
import SearchBox from "@/ui/home/searchBox";
import { searchExhibitionInfo, searchSortedInfo } from "@/utils/data";
import FilterIcon from "../icon/filter";

const Sibebar = () => {
  const { onSubmitHandler, ...cateoryOption } = useSearchBoxOption();

  return (
    <div className="flex w-[320px] flex-col gap-5 px-5 py-10">
      <div className="flex w-full flex-row justify-between">
        <p className="font-bold">FILTER</p>
        <FilterIcon />
      </div>
      <div className="flex flex-col gap-5">
        <SearchBox onSubmitHandler={onSubmitHandler} {...cateoryOption} />
        <CostBox {...cateoryOption} />
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
    </div>
  );
};

export default Sibebar;

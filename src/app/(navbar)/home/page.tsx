"use client";

import CategoryBox from "@/ui/home/categoryBox";
import CostBox from "@/ui/home/costBox";
import SearchBox from "@/ui/home/searchBox";
import { searchExhibitionInfo } from "@/utils/data";

const HomePage = () => {
  return (
    <div>
      <div className="w-[320px]">
        <SearchBox />
        <CostBox />
        <CategoryBox label="전시상태" list={searchExhibitionInfo} />
      </div>
    </div>
  );
};

export default HomePage;

"use client";

import { useSearchStore } from "@/store/search";
import AllIcon from "../icon/all";
import Button from "../common/button/button";
import { searchCostInfo } from "@/utils/data";

const CostBox = () => {
  const {
    searchParams: { expense },
    setSearchParams,
  } = useSearchStore();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <p>비용</p>
        <AllIcon isSelected={expense.length == 2} />
      </div>
      <div className="flex gap-4">
        {searchCostInfo.map(({ text, value }) => (
          <Button
            key={value}
            text={text}
            value={value}
            style="circle"
            isFocused={expense.includes(value as "pay" | "free")}
            onClickHandler={(event) => setSearchParams("expense")(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default CostBox;

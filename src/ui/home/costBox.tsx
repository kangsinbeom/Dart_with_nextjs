import { SearchState } from "@/store/search";
import AllIcon from "../icon/all";
import Button from "../common/button/button";
import { searchCostInfo } from "@/utils/data";

const CostBox = ({
  searchParams,
  setExpenseParams,
}: Pick<SearchState, "searchParams" | "setExpenseParams">) => {
  return (
    <div className="flex flex-col gap-2 border-cblack-900">
      <div className="flex flex-row items-center gap-2">
        <p>비용</p>
        <button
          onClick={(event) => setExpenseParams(true)(event)}
          data-value="all"
        >
          <AllIcon isSelected={searchParams.expense.length == 2} />
        </button>
      </div>
      <div className="flex gap-4">
        {searchCostInfo.map(({ text, value }) => (
          <Button
            key={value}
            text={text}
            value={value}
            style="circle"
            isFocused={searchParams.expense.includes(value as "pay" | "free")}
            onClickHandler={(event) => setExpenseParams(false)(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default CostBox;

"use client";

import { useSearchStore } from "@/store/search";
import AllIcon from "../icon/all";
import Button from "../common/button/button";
import { SearchInfoType } from "@/utils/type";

interface CategoryBox {
  label: string;
  hasAllButton?: boolean;
  buttonStyle?: string;
  list: SearchInfoType[];
}

const CategoryBox = ({
  label,
  hasAllButton = true,
  buttonStyle = "rounded",
  list,
}: CategoryBox) => {
  const {
    searchParams: { expense },
    setSearchParams,
  } = useSearchStore();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <p>{label}</p>
        {hasAllButton && <AllIcon isSelected={expense.length == 2} />}
      </div>
      <div className="flex gap-4">
        {list.map(({ text, value }) => (
          <Button
            key={value}
            text={text}
            value={value}
            style={buttonStyle}
            isFocused={expense.includes(value as "pay" | "free")}
            onClickHandler={(event) => setSearchParams("exhibition")(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryBox;

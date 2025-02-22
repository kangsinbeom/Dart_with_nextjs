import getButtonBaseStyles from "@/utils/func/getButtonStyles";
import clsx from "clsx";
import { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  value?: string;
  isFocused?: boolean;
  style?: string;
  onClickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
  text,
  value,
  isFocused,
  style = "rounded",
  onClickHandler,
}: ButtonProps) => {
  const baseStyle = getButtonBaseStyles(style);
  return (
    <button
      className={clsx(baseStyle, isFocused ? "bg-black text-white" : "")}
      onClick={onClickHandler}
      data-value={value}
    >
      {text}
    </button>
  );
};

export default Button;

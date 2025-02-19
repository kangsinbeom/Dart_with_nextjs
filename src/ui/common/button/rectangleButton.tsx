import clsx from "clsx";

interface RectangleButtonProps {
  label: string;
  onClickButton?: () => void;
  styles?: string;
  disabled?: boolean;
}

const RectangleButton = ({
  label,
  onClickButton,
  styles,
  ...buttonOption
}: RectangleButtonProps) => {
  return (
    <button
      className={clsx(
        "flex w-full justify-center border py-4 text-4xl",
        styles || "bg-cwhite text-cblack-100",
      )}
      onClick={onClickButton}
      {...buttonOption}
    >
      {label}
    </button>
  );
};

export default RectangleButton;

/**
 * 
 * rectangleGray: css`
    border: 1px solid ${colors.gray200};
    background-color: ${colors.gray200};
    color: ${colors.gray500};
  `,
 * 
 */

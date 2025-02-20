import InputField, { InputFieldProps } from "./inputField";

interface InputWithButtonProps extends InputFieldProps {
  buttonLabel: string;
  onClickButton: () => void;
  buttonType?: "button" | "submit" | "reset";
}

const InputWithButton = ({
  buttonLabel,
  onClickButton,
  buttonType = "button",
  ...props
}: InputWithButtonProps) => {
  return (
    <div>
      <div className="flex flex-row items-end gap-10">
        <InputField {...props} />
        <button
          className="h-10 w-20 min-w-24 border text-xs"
          onClick={onClickButton}
          type={buttonType}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default InputWithButton;

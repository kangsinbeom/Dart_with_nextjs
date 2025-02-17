import InputField, { InputFieldProps } from "./inputField";

export interface InputWithButtonProps extends InputFieldProps {
  buttonLabel: string;
  onClickButton?: () => void;
}

const InputWithButton = ({
  buttonLabel,
  onClickButton,
  ...props
}: InputWithButtonProps) => {
  return (
    <div className="flex flex-row items-end gap-10">
      <InputField {...props} />
      <button
        className="h-10 w-20 min-w-24 border text-xs"
        onClick={onClickButton}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default InputWithButton;

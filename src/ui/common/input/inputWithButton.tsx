import InputField, { InputFieldProps } from "./inputField";

interface InputWithButtonProps extends InputFieldProps {
  buttonLabel: string;
}

const InputWithButton = ({ buttonLabel, ...props }: InputWithButtonProps) => {
  return (
    <div className="flex flex-row items-center">
      <InputField {...props} />
      <button className="h-10 w-20 border text-xs">{buttonLabel}</button>
    </div>
  );
};

export default InputWithButton;

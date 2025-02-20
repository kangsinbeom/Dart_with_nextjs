import InputField, { InputFieldProps } from "./inputField";

interface InputWithButtonProps extends InputFieldProps {
  buttonLabel: string;
  onClickButton: () => void;
}

const InputWithButton = ({
  buttonLabel,
  onClickButton,
  ...props
}: InputWithButtonProps) => {
  return (
    <div>
      <div className="flex flex-row items-end gap-10">
        <InputField {...props} disabled />
        <button
          className="h-10 w-20 min-w-24 border text-xs"
          onClick={onClickButton}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

// const render = (type: string) => {
//   switch (type) {
//     case "email":
//       return <SignupEmailCheckBox />;
//   }
// };

export default InputWithButton;

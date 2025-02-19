import { AgreeInfoType } from "@/utils/type";
import CheckIcon from "../icon/check";

interface SignupCheckBoxProps extends AgreeInfoType {
  checked?: boolean;
  onToggleButton: () => void;
}

const SignupCheckBox = ({
  desc,
  title,
  checked = false,
  onToggleButton,
}: SignupCheckBoxProps) => {
  const onClickButton = () => {
    alert(`아직 기다려야 함 ${desc}`);
    return;
  };
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-5" onClick={onToggleButton}>
        <CheckIcon color={checked ? "" : "#aaaaaa"} />
        <p className="text-2xl">{title}</p>
      </div>
      <button
        onClick={onClickButton}
        className="border border-cwhite px-4 py-1"
        type="button"
      >
        이용 약관
      </button>
    </div>
  );
};

export default SignupCheckBox;

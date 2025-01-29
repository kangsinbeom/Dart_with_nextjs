import { AgreeInfoType } from "@/utils/type";
import CheckIcon from "../icon/check";

const SignupCheckBox = ({ desc, title }: AgreeInfoType) => {
  const onClickButton = () => {
    console.log(desc);
    return;
  };
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-5">
        <CheckIcon />
        <p className="text-2xl">{title}</p>
      </div>
      <button onClick={onClickButton} className="border border-cwhite px-4">
        이용 약관
      </button>
    </div>
  );
};

export default SignupCheckBox;

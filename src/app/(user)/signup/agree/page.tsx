"use client";

import RectangleButton from "@/ui/common/button/rectangleButton";
import Line from "@/ui/common/textNLine/line";
import SignupCheckBox from "@/ui/signup/signupCheckBox";
import { agreeInfo } from "@/utils/data";
import useAgreeData from "@/hooks/useAgreeData";
import BackButton from "@/ui/common/button/backButton";

const SignupAgreePage = () => {
  const { agreeState, onToggleButton, disabled, onClickNextButton } =
    useAgreeData();

  return (
    <section className="flex h-fit w-full max-w-[610px] flex-col gap-8">
      <header>
        <p className="text-4xl">약관동의</p>
        <Line />
      </header>
      <div className="flex flex-col gap-6 px-4">
        {agreeInfo.map(({ desc, title }, index) => (
          <SignupCheckBox
            key={title}
            title={title}
            desc={desc}
            checked={agreeState[index]}
            onToggleButton={() => onToggleButton(index)}
          />
        ))}
      </div>
      <p className="text-cgray-400">
        * 필수항목에 동의하지 않으실 경우 서비스 가입이 불가능합니다.
      </p>
      {/* buttonBox */}
      <div className="flex w-full gap-5">
        <BackButton
          styles="bg-cgray-400 text-cgray-500 flex w-full justify-center border py-4 text-4xl"
          label="취소"
        />
        <RectangleButton
          label="다음"
          onClickButton={onClickNextButton}
          disabled={disabled}
        />
      </div>
    </section>
  );
};

export default SignupAgreePage;

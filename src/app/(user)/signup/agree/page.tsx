"use client";

import Line from "@/ui/common/textNLine/line";
import SignupCheckBox from "@/ui/signup/signupCheckBox";
import { agreeInfo } from "@/utils/data";

const SignupAgreePage = () => {
  return (
    <section className="h-fit w-full">
      <p className="text-4xl">약관동의</p>
      <Line />
      <div className="flex flex-col gap-6 px-4">
        {agreeInfo.map(({ desc, title }) => (
          <SignupCheckBox key={title} title={title} desc={desc} />
        ))}
      </div>
      <p className="text-cgray-400">
        * 필수항목에 동의하지 않으실 경우 서비스 가입이 불가능합니다.
      </p>
      <button>취소</button>
      <button>다음</button>
    </section>
  );
};

export default SignupAgreePage;

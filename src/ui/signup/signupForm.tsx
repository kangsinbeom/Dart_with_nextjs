"use client";

import { createUser } from "@/apis/action";
import BackButton from "../common/button/backButton";
import InputField from "../common/input/inputField";
import InputWithButton from "../common/input/inputWithButton";
import { useModalStore } from "@/store/modal";

const SignupForm = () => {
  const expendModal = useModalStore((state) => state.expendModal);
  return (
    <form className="flex flex-col gap-8" action={createUser}>
      <InputWithButton
        label="이메일"
        value="email"
        buttonLabel="이메일 검증"
        onClickButton={() => expendModal("email")}
      />
      <InputWithButton
        label="닉네임"
        value="nickname"
        buttonLabel="중복 확인"
        onClickButton={() => {}}
      />
      <InputField label="비밀번호" value="password" />
      <InputField label="비밀번호 확인" value="checkedPassword" />
      <div className="flex w-full gap-10">
        <BackButton
          styles="h-20 w-full bg-cgray-300 text-2xl font-bold text-cgray-600"
          label="취소"
        />
        <button
          className="h-20 w-full bg-cwhite text-2xl font-bold text-cblack-900"
          type="submit"
        >
          확인
        </button>
      </div>
    </form>
  );
};

export default SignupForm;

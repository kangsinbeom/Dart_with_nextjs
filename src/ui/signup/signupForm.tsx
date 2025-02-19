"use client";

import BackButton from "../common/button/backButton";
import InputField from "../common/input/inputField";
import InputWithModal from "./inputModal";

const SignupForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <InputWithModal
        label="이메일"
        value=""
        buttonLabel="이메일 검증"
        modalInfo={{
          header: "이메일 검증",
          buttonLabel: "인증번호 받기",
          label: "이메일",
        }}
      />
      <InputWithModal
        label="닉네임"
        value=""
        buttonLabel="중복 확인"
        modalInfo={{
          header: "닉네임 중복 확인",
          buttonLabel: "중복 확인",
          label: "닉네임",
        }}
      />
      <InputField label="비밀번호" value="" />
      <InputField label="비밀번호 확인" value="" />
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

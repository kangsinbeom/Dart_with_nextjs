"use client";

import InputWithButton from "../common/input/inputWithButton";
import useEmailCheck from "@/hooks/useEmailCheck";

const SignupEmailCheckBox = () => {
  const { closeModal, expendAlert, handleSubmit } = useEmailCheck();
  return (
    <section className="flex h-1/2 w-3/5 flex-col items-center justify-between border-4 border-cwhite bg-cblack-100 py-10 text-cwhite">
      <header className="text-3xl font-bold">이메일 검증</header>
      <form onSubmit={handleSubmit}>
        <InputWithButton
          buttonLabel="인증번호 발송"
          label="이메일"
          value="email"
          onClickButton={() =>
            expendAlert('아직 준비중이라 "1111"을 입력해주세요')
          }
        />
        <InputWithButton
          buttonLabel="확인"
          label="인증번호"
          value="code"
          buttonType="submit"
          onClickButton={() => {}}
        />
      </form>

      <div>
        <button onClick={closeModal} type="button">
          닫기
        </button>
      </div>
    </section>
  );
};

export default SignupEmailCheckBox;

/**
 * 인증발송 API가 발송되면 이후로 Count하는 것과 함께 확인란을 만들어야지 그리고 확인이 완료되면 alert창 띄우고
 * 현재 창 닫기 및 info에 있는 email에 현재 값이 반영되게 해야지
 * mocking server 만들어서 해볼까?
 */

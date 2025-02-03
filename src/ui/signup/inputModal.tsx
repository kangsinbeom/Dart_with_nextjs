"use client";

import ModalPortal from "@/context/modalPortal";
import InputWithButton from "../common/input/inputWithButton";
import SignupInputModal from "../modal/signupInputModal";
import useOutsideClick from "@/hooks/useOutsideClick";

const InputWithModal = () => {
  const { isExpand, onToggle } = useOutsideClick();
  return (
    <div>
      <InputWithButton
        buttonLabel="이메일 인증"
        label="이메일"
        disabled
        onClickButton={onToggle}
      />
      {isExpand && (
        <ModalPortal>
          <SignupInputModal
            header="이메일 검증"
            buttonLabel="인증번호 받기"
            label="이메일"
            onClickCloseButton={onToggle}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default InputWithModal;

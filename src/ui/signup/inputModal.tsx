"use client";

import ModalPortal from "@/context/modalPortal";
import useOutsideClick from "@/hooks/useOutsideClick";
import SignupInputModal, {
  SignupInputModalProps,
} from "../modal/signupInputModal";
import InputField, { InputFieldProps } from "../common/input/inputField";

interface InputWithModalProps extends InputFieldProps {
  buttonLabel: string;
  modalInfo: Omit<SignupInputModalProps, "onClickCloseButton">;
}

const InputWithModal = ({
  buttonLabel,
  modalInfo,
  ...props
}: InputWithModalProps) => {
  const { isExpand, onToggle } = useOutsideClick();
  return (
    <div>
      <div className="flex flex-row items-end gap-10">
        <InputField {...props} disabled />
        <button
          className="h-10 w-20 min-w-24 border text-xs"
          onClick={onToggle}
        >
          {buttonLabel}
        </button>
      </div>
      {isExpand && (
        <ModalPortal>
          <SignupInputModal {...modalInfo} onClickCloseButton={onToggle} />
        </ModalPortal>
      )}
      <div></div>
    </div>
  );
};

export default InputWithModal;


import { useModalStore } from "@/store/modal";
import { useAlertStore } from "@/store/alert";
import { FormEvent } from "react";

const useEmailCheck = () => {
  const closeModal = useModalStore((state) => state.closeModal);
  const expendAlert = useAlertStore((state) => state.expendAlert);
  const confirmEamil = (code: number) => {
    if (code === 1111) {
      expendAlert("사용가능한 이메일입니다.");
    } else {
      expendAlert("잘못된 인증번호입니다.");
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };
  return {
    closeModal,
    expendAlert,
    confirmEamil,
    handleSubmit,
  };
};

export default useEmailCheck;

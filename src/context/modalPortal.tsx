"use client";

import { useModalStore } from "@/store/modal";
import SignupEmailCheckBox from "@/ui/signup/signupEmailCheckBox";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = () => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const type = useModalStore((state) => state.type);
  useEffect(() => {
    setModalRoot(document.getElementById("modal-portal"));
  }, []);

  return (
    <>
      {modalRoot
        ? createPortal(
            <div className="dimmed modal-positon">{render(type)}</div>,
            modalRoot,
          )
        : null}
    </>
  );
};

const render = (type: string) => {
  switch (type) {
    case "email":
      return <SignupEmailCheckBox />;
  }
};

export default ModalPortal;

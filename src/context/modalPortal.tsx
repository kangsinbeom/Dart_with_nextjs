"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: PropsWithChildren) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modal-portal"));
  }, []);

  return (
    <>{modalRoot ? createPortal(<div>{children}</div>, modalRoot) : null}</>
  );
};

export default ModalPortal;

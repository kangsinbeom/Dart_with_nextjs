"use client";

import ModalPortal from "@/context/modalPortal";
import { useModalStore } from "@/store/modal";
import { PropsWithChildren } from "react";

const ModalProvider = ({ children }: PropsWithChildren) => {
  const isExpended = useModalStore((state) => state.isExpended);
  return (
    <>
      {isExpended && <ModalPortal />}

      {children}
    </>
  );
};

export default ModalProvider;

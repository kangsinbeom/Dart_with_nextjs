import ModalProvider from "@/provider/modalProvider";
import React, { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ModalProvider />
      {children}
    </>
  );
};

export default Provider;

import AlertProvider from "@/provider/alertProvider";
import ModalProvider from "@/provider/modalProvider";
import React, { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ModalProvider />
      <AlertProvider />
      {children}
    </>
  );
};

export default Provider;

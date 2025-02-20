"use client";

import AlertPortal from "@/context/alertPortal";
import { useAlertStore } from "@/store/alert";
import { PropsWithChildren } from "react";

const AlertProvider = ({ children }: PropsWithChildren) => {
  const { isExpended, text } = useAlertStore();
  return (
    <>
      {isExpended && <AlertPortal text={text} />}

      {children}
    </>
  );
};

export default AlertProvider;

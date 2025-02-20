"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import notification from "../../public/images/notification.png";
import Image from "next/image";
import CancelIcon from "@/ui/icon/cancel";
import { useAlertStore } from "@/store/alert";

const AlertPortal = ({ text }: { text: string }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const closeAlert = useAlertStore((state) => state.closeAlert);
  useEffect(() => {
    setModalRoot(document.getElementById("alert-portal"));
  }, []);

  return (
    <>
      {modalRoot
        ? createPortal(
            <div className="modal-positon">
              <div className="relative">
                <Image
                  src={notification}
                  alt=""
                  width={300}
                  style={{ borderRadius: 15, zIndex: -1 }}
                />
                <p className="absolute left-1/2 top-6 max-w-[200px] -translate-x-1/2 break-words">
                  {text}
                </p>
                <div
                  className="absolute right-3 top-3 hover:cursor-pointer"
                  onClick={closeAlert}
                >
                  <CancelIcon />
                </div>
              </div>
            </div>,
            modalRoot,
          )
        : null}
    </>
  );
};

export default AlertPortal;

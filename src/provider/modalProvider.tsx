"use client";

import ModalPortal from "@/context/modalPortal";
import { useModalStore } from "@/store/modal";
import { PropsWithChildren } from "react";

const ModalProvider = ({ children }: PropsWithChildren) => {
  const isExpended = useModalStore((state) => state.isExpended);
  return (
    <>
      {isExpended && (
        <ModalPortal>
          <section className="flex h-1/2 w-3/5 flex-col items-center justify-between border-4 border-cwhite bg-cblack-100 py-10 text-cwhite"></section>
        </ModalPortal>
      )}

      {children}
    </>
  );
};

export default ModalProvider;

/**
 * content를 전달해야하는데 이때 section 저기 전체 값을 가져와서 설정을 해야하네 그러려면 어쨌든 modalState에
 * content라는 컴포넌트 값이 들어가야하는 것은 정답임
 * 여기서부터 시작해보자구 현재 provider로 전달하는 것까지는 이상 없이 잘 되는 중
 */

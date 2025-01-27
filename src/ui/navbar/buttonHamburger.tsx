"use client";

import { useState } from "react";
import { listItem } from "@/utils/data";
import HamburgerIcon from "@/ui/icon/hamburger";
import Link from "next/link";
import clsx from "clsx";

const ButtonHamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="mobile:block hidden ">
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
      <div
        className={clsx(
          "fixed bg-cblack-900 inset-0 bg-opacity-20 z-0",
          isOpen ? "block" : "hidden"
        )}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={clsx(
          "fixed z-10 bg-white right-0 top-0 w-2/4 h-full",
          isOpen ? "animate-fade-left block" : "animate-fade-right hidden"
        )}
      >
        <div>여기에 이미지 간단하게 넣고</div>
        <ul>
          {listItem.map(({ name, src }) => (
            <li key={name}>
              <Link href={src}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * 어떻게 fade-out을 잘 적용할 수 있을까? isOpen 상태값을 통해서 modal을 관리하는 게 뭐가 더 좋을까? 고민을 해보자
 * 해답을 찾아보자
 */

export default ButtonHamburger;

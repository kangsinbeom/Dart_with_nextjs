"use client";

import MainLogoIcon from "../../icon/mainLogo";
import ButtonBox from "./buttonBox";
import UserBox from "./userBox";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex w-full h-[80px] bg-cgray-50 justify-between items-center">
      <Link href="/">
        <MainLogoIcon />
      </Link>
      <div className="flex gap-5">
        <ButtonBox />
        <UserBox />
      </div>
    </div>
  );
};

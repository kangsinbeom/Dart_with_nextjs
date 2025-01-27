"use client";

import MainLogoIcon from "../icon/mainLogo";
import ButtonBox from "./buttonBox";
import ButtonHamburger from "./buttonHamburger";
import UserBox from "./userBox";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-cgray-50 px-20 tablet:px-10">
      <Link href="/home">
        <MainLogoIcon />
      </Link>
      <div className="flex gap-5 mobile:hidden">
        <ButtonBox />
        <UserBox />
      </div>
      <ButtonHamburger />
    </nav>
  );
};

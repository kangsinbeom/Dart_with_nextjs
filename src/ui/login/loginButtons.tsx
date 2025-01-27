import React from "react";
import ArrowIcon from "../icon/arrow";
import { loginButtons } from "@/utils/data";
import HarfArrowIcon from "../icon/halfArrow";
import Link from "next/link";

const LoginButtons = () => {
  return (
    <div className="relative flex w-full flex-col gap-4 text-cwhite">
      {loginButtons.map(({ buttonLabel, path, title }, index) => (
        <div key={index} className="flex max-w-80 justify-between">
          <p>{title}</p>
          <Link href={path} className="gap-3 center-position">
            <HarfArrowIcon />
            <p>{buttonLabel}</p>
          </Link>
        </div>
      ))}
      <button type="submit" className="absolute right-2">
        <ArrowIcon />
      </button>
    </div>
  );
};

export default LoginButtons;

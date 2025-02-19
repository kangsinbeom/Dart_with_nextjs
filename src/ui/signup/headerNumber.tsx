"use client";

import { useCustomPathname } from "@/hooks/useCustomPathname";
import getSignupPage from "@/utils/func/getSignupPage";

const HeaderNumber = () => {
  const page = getSignupPage({ array: useCustomPathname(), target: "agree" });
  return (
    <div className="absolute left-0">
      <div className="h-10 w-10 bg-cgray-500" />
      <p className="absolute left-4 top-0">{page}</p>
    </div>
  );
};

export default HeaderNumber;

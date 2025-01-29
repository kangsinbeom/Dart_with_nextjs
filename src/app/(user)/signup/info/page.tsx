import InputField from "@/ui/common/input/inputField";
import Line from "@/ui/common/textNLine/line";
import React from "react";
import { useFormContext } from "react-hook-form";

const SignupInfoPage = () => {
  const {} = useFormContext();
  return (
    <div className="w-full">
      <p className="text-4xl">필수</p>
      <Line />
      <InputField />
    </div>
  );
};

export default SignupInfoPage;

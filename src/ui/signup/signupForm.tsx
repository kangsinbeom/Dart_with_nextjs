"use client";

import InputField from "../common/input/inputField";
import InputWithModal from "./inputModal";

const SignupForm = () => {
  return (
    <div className="flex flex-col">
      <InputWithModal />
      <InputWithModal />
      <InputField label="email" value="" />
      <InputField label="password" value="" />
    </div>
  );
};

export default SignupForm;

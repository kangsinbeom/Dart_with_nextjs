"use client";

import InputField from "../common/input/inputField";
import InputWithButton from "../common/input/inputWithButton";

const SignupForm = () => {
  return (
    <div className="flex flex-col">
      <InputWithButton label="test" value="" buttonLabel="입력" />
      <InputField label="email" value="" />
      <InputField label="password" value="" />
    </div>
  );
};

export default SignupForm;

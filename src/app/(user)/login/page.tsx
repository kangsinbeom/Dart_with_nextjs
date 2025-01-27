"use client";

import InputField from "@/ui/common/input/inputField";
import HarfArrowIcon from "@/ui/icon/halfArrow";
import LogoIcon from "@/ui/icon/logo";
import LoginButtons from "@/ui/login/loginButtons";
import SocialButtons from "@/ui/login/socialButtons";
import { loginFormData } from "@/utils/data";
import { LoginFormDataType } from "@/utils/type";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormDataType>();

  return (
    <section className="relative flex w-full max-w-[500px] flex-col px-5">
      <header className="relative center-position">
        <HarfArrowIcon styles="absolute left-0" />
        <LogoIcon />
      </header>
      <div className="pb-16">
        {loginFormData.map(({ label, registerOptions, value }) => (
          <InputField
            key={value}
            register={register(value, registerOptions)}
            label={label}
            value={value}
            error={errors[value]}
          />
        ))}
      </div>
      <LoginButtons />
      <SocialButtons />
    </section>
  );
};

export default LoginPage;

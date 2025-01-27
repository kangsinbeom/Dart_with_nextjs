"use client";

import BlindIcon from "@/ui/icon/blind";
import getInputFieldOptions from "@/utils/func/getInputFieldOption";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  value: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
  disabled?: boolean;
}

const InputField = ({
  label,
  value,
  register,
  error,
  disabled = false,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isBlind, setIsBlind] = useState<boolean>(true);

  const inputOptions = getInputFieldOptions(value, isBlind);

  useEffect(() => {
    if (value === "email" || value === "nickname") {
      setIsFocused(true);
    }
  }, [value]);
  return (
    <div className="relative mt-10 flex w-full flex-col border-b border-white">
      <label
        className={clsx(
          "absolute top-0 text-xl text-cwhite transition-all",
          isFocused ? "top-[-15px] text-sm" : "",
        )}
        htmlFor={value}
      >
        {label}
      </label>
      <input
        id={value}
        {...register}
        {...inputOptions}
        autoFocus={value === "email" || value === "nickname" ? true : false}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (e.target.value === "") {
            setIsFocused(false);
          }
        }}
        disabled={disabled}
        maxLength={40}
        className={clsx(
          "mt-3 rounded-sm border-b border-white p-2 pt-0 text-lg text-white",
          disabled ? "bg-cgray-500" : "",
        )}
      />
      {value.includes("password") && (
        <BlindIcon
          onClick={() => setIsBlind((prev) => !prev)}
          color={isBlind ? "white" : "green"}
          styles="absolute right-0"
        />
      )}
      {error && <div className="absolute text-cred-900">{error?.message}</div>}
    </div>
  );
};

export default InputField;

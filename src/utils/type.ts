// utils
export interface LIstItem {
  name: string;
  src: string;
}

// user
import { RegisterOptions } from "react-hook-form";

export interface SignupFormData {
  email: string;
  nickname: string;
  password: string;
  introduce?: string;
  birthday?: string;
}

export type LoginFormDataType = Pick<SignupFormData, "email" | "password">;

export interface LoginFormField {
  label: string;
  value: keyof LoginFormDataType;
  registerOptions: RegisterOptions<LoginFormDataType>;
}

export interface LoginButtonsType {
  title: string;
  buttonLabel: string;
  path: string;
}

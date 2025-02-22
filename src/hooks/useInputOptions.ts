import getInputFieldOptions from "@/utils/func/getInputFieldOption";
import { FocusEvent, useState } from "react";

interface UseInputOptionsType {
  isFocused: boolean;
  isBlinded: boolean;
  setIsFocused: (value: boolean) => void;
  toggleBlinded: () => void;
  labelFocusedNBlur: LabelFocusedNBlurType;
  inputOptions: { type: string; autoComplete?: string };
}

interface LabelFocusedNBlurType {
  onFocus: () => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

interface UseInputOptionsParams {
  label: string;
  disabled?: boolean;
}

const useInputOptions = ({
  label,
  disabled = false,
}: UseInputOptionsParams): UseInputOptionsType => {
  const [inputOption, setInputOption] = useState<
    Pick<UseInputOptionsType, "isBlinded" | "isFocused">
  >({
    isFocused: disabled,
    isBlinded: false,
  });

  const setIsFocused = (value: boolean) => {
    setInputOption((prev) => ({
      ...prev,
      isFocused: value,
    }));
  };

  const toggleBlinded = () => {
    setInputOption((prev) => ({
      ...prev,
      isBlinded: !prev.isBlinded,
    }));
  };

  const labelFocusedNBlur: LabelFocusedNBlurType = {
    onFocus: () => setIsFocused(true),
    onBlur: (e: FocusEvent<HTMLInputElement, Element>) => {
      if (e.target.value === "") {
        setIsFocused(false);
      } else setIsFocused(true);
    },
  };

  const inputOptions = getInputFieldOptions(label, inputOption.isBlinded);

  return {
    isFocused: inputOption.isFocused,
    isBlinded: inputOption.isBlinded,
    setIsFocused,
    toggleBlinded,
    labelFocusedNBlur,
    inputOptions,
  };
};

export default useInputOptions;

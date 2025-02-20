import useInputOptions from "@/hooks/useInputOptions";
import BlindIcon from "@/ui/icon/blind";
import clsx from "clsx";

export interface InputFieldProps {
  label: string;
  value?: string;
  disabled?: boolean;
}

const InputField = ({ label, value, disabled = false }: InputFieldProps) => {
  const {
    isBlinded,
    isFocused,
    toggleBlinded,
    labelFocusedNBlur,
    inputOptions,
  } = useInputOptions({ label, disabled });

  /**
 *
 * useEffect(() => {
    if (label === "email" || label === "nickname") {
      setIsFocused(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label]);
  // 이거 signupForm이나 이런 상위 컴포넌트로 뺄 수 없나? 거기서 가장 상위에 있는 input에 focus되도록 하는 방식으로다가

 */

  return (
    <div className="relative flex w-full flex-row items-center gap-5">
      <label
        className={clsx(
          isFocused ? "top-[-15px] text-sm" : "text-xl",
          "absolute top-0 text-cwhite transition-all duration-300",
        )}
        htmlFor={value}
      >
        {label}
      </label>
      <input
        name={value}
        id={value}
        {...inputOptions}
        {...labelFocusedNBlur}
        autoFocus={value === "email" || value === "nickname" ? true : false}
        disabled={disabled}
        maxLength={40}
        className={clsx(
          "mt-3 w-full rounded-sm border-b border-white p-2 pt-0 text-lg text-white",
          disabled ? "bg-cgray-500" : "",
        )}
      />
      {value?.toLocaleLowerCase().includes("password") && (
        <BlindIcon
          onClick={toggleBlinded}
          color={isBlinded ? "green" : "white"}
          styles="absolute right-0 top-1/2 -translate-y-1/2"
        />
      )}
      {/* {error && <div className="absolute text-cred-900">{error?.message}</div>} */}
    </div>
  );
};

export default InputField;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
/**
 * 어짜피 3개가 다 필수사항이긴한데 배열로 받으면 무슨 약관에 동의했는지 유추할 수 없고, 나중에 선택사항이라도 들어오면
 * 낭패가 되니깐 나중에 고치자.
 */

const useAgreeData = () => {
  const [agreeState, setAgreeState] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const router = useRouter();

  const onClickNextButton = () => {
    if (!disabled) {
      router.push("/signup/info");
      localStorage.setItem("agreement", "true");
    }
  };
  const onToggleButton = (index: number) =>
    setAgreeState((prev) => prev.map((val, i) => (i === index ? !val : val)));
  const disabled = !agreeState.reduce((acc, cur) => acc && cur, true);
  return { agreeState, onToggleButton, disabled, onClickNextButton };
};

export default useAgreeData;

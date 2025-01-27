"use client";

import Link from "next/link";

const UserBox = () => {
  return (
    <Link href="/login">
      <button className="text-xs bg-black w-20 h-8 text-cwhite">로그인</button>
    </Link>
  );
};

/**
 * 여기서 button tag 대신 link를 사용한 이유는 button의 경우 추가적인 API 호출이나 함수 호출이 있을 때 사용하는 것이
 * 더 적합하다는 GPT옹의 말씀 때문이다.
 * 단순히 navigate 기능만하는 button이기에 link를 사용하였다.
 *
 * 근데 link tag만 사용하니깐 css적으로 많이 무너지는 것을 발견하였기에 button을 link로 감싸야겠다는 생각을 하여서 적용
 *
 */

export default UserBox;

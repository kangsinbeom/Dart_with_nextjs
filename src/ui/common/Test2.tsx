"use client";

import { useRouter } from "next/navigation";

const Test2 = () => {
  const router = useRouter();
  return <div onClick={() => router.push("/")}>Test2</div>;
};

export default Test2;

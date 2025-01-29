import { usePathname } from "next/navigation";

export const useCustomPathname = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  return paths;
};

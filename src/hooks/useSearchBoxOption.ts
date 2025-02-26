import { useSearchStore } from "@/store/search";
import getURLSearchParams from "@/utils/func/getURLSearchParams";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const useSearchBoxOption = () => {
  const { searchParams, setSearchParams, resetSearchParams, setExpenseParams } =
    useSearchStore();

  const router = useRouter();
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const search = formData.get("search");
    if (!search) {
      return alert("검색어를 입력해주세요");
    }
    const data = getURLSearchParams({
      ...searchParams,
      search: search as string,
    });
    router.push(`?${data}`);
    event.currentTarget.reset();
  };
  const resetHandler = () => {
    resetSearchParams();
    router.push("/");
  };
  return {
    searchParams,
    setSearchParams,
    onSubmitHandler,
    resetHandler,
    setExpenseParams,
  };
};

export default useSearchBoxOption;

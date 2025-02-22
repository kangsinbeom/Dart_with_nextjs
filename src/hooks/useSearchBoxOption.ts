import { useSearchStore } from "@/store/search";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const useSearchBoxOption = () => {
  const { searchParams, setSearchParams } = useSearchStore();
  const router = useRouter();
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const search = formData.get("search");
    router.push(`?search=${search}`);
  };

  return {
    searchParams,
    setSearchParams,
    onSubmitHandler,
  };
};

export default useSearchBoxOption;

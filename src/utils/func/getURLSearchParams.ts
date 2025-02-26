import { SearchData } from "../type";

interface SearchParamsInfo extends SearchData {
  search: string;
}

const getURLSearchParams = (searchParams: SearchParamsInfo) => {
  let newSearchParams;
  if (searchParams.expense.length > 1) {
    newSearchParams = Object.entries({ ...searchParams, expense: "all" });
  } else {
    newSearchParams = Object.entries({
      ...searchParams,
      expense: searchParams.expense[0],
    });
  }
  const seachParsmsArray = newSearchParams.filter(
    (value) => value[1] !== "" && value[1] !== "latest" && value[1] !== "all",
  );
  return new URLSearchParams(seachParsmsArray).toString();
};

export default getURLSearchParams;

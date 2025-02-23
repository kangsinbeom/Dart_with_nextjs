import { initialSearchData } from "@/utils/data";
import { SearchData } from "@/utils/type";
import { MouseEvent } from "react";
import { create } from "zustand";

export interface SearchState {
  searchParams: SearchData;
  setSearchParams: (
    category: string,
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchParams: initialSearchData,
  setSearchParams: (category) => {
    return (event: MouseEvent<HTMLButtonElement>) => {
      const value = event.currentTarget.getAttribute("data-value") as string;
      if (!(category === "expense")) {
        set((state) => ({
          ...state,
          searchParams: { ...state.searchParams, [category]: value },
        }));
      } else {
        const expense = get().searchParams.expense;
        const newExpense = expense.includes(value as "pay" | "free")
          ? expense.filter((item) => item !== value)
          : [...expense, value as "pay" | "free"];
        set((state) => ({
          ...state,
          searchParams: {
            ...state.searchParams,
            expense:
              newExpense.length > 0 ? newExpense : initialSearchData.expense,
          },
        }));
      }
    };
  },
}));

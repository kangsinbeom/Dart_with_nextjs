import { initialSearchData } from "@/utils/data";
import { SearchData } from "@/utils/type";
import { MouseEvent } from "react";
import { create } from "zustand";

export interface SearchState {
  searchParams: SearchData;
  setSearchParams: (
    category: string,
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  setExpenseParams: (
    isAll: boolean,
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  resetSearchParams: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchParams: initialSearchData,
  setSearchParams: (category) => {
    return (event: MouseEvent<HTMLButtonElement>) => {
      const value = event.currentTarget.getAttribute("data-value") as string;
      set((state) => ({
        ...state,
        searchParams: { ...state.searchParams, [category]: value },
      }));
    };
  },
  setExpenseParams: (isAll: boolean) => {
    return (event: MouseEvent<HTMLButtonElement>) => {
      if (isAll) {
        set((state) => ({
          ...state,
          searchParams: {
            ...state.searchParams,
            expense: ["free", "pay"],
          },
        }));
      } else {
        const value = event.currentTarget.getAttribute("data-value") as string;
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
  resetSearchParams: () => {
    set((state) => ({ ...state, searchParams: initialSearchData }));
  },
}));

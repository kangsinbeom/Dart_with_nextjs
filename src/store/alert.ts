import { create } from "zustand";

interface AlertState {
  isExpended: boolean;
  text: string;
  expendAlert: (text: string) => void;
  closeAlert: () => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  isExpended: false,
  text: "",
  expendAlert: (text) => set((state) => ({ ...state, isExpended: true, text })),
  closeAlert: () => set((state) => ({ ...state, isExpended: false })),
}));

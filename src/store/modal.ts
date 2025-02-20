import { create } from "zustand";

interface ModalState {
  isExpended: boolean;
  type: string;
  expendModal: (type: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isExpended: false,
  type: "email",
  expendModal: (type) =>
    set((state) => ({ ...state, isExpended: !state.isExpended, type: type })),
}));

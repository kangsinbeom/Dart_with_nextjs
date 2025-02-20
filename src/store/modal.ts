import { create } from "zustand";

interface ModalState {
  isExpended: boolean;
  type: string;
  expendModal: (type: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isExpended: false,
  type: "email",
  expendModal: (type) => set((state) => ({ ...state, isExpended: true, type })),
  closeModal: () => set((state) => ({ ...state, isExpended: false })),
}));

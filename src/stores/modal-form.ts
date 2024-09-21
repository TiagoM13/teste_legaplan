import { create } from "zustand";

interface ModalFormState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalFormStore = create<ModalFormState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

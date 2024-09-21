import { create } from "zustand";

interface ModalConfirmDeletionState {
  isOpen: boolean;
  taskId: number | null;
  openModal: (id: number) => void;
  closeModal: () => void;
}

export const useModalDeletionStore = create<ModalConfirmDeletionState>((set) => ({
  isOpen: false,
  taskId: null,
  openModal: (id: number) => set({ isOpen: true, taskId: id }),
  closeModal: () => set({ isOpen: false, taskId: null }),
}));

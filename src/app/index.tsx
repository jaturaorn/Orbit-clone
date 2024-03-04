import { create } from "zustand";

interface AppState {
  pick: number;
  showModal: boolean;
  showModal2: boolean;

  transpose: boolean;
  enabled: boolean;

  setPick: (pick: number) => void;

  setShowModal: (show: boolean) => void;
  setShowModal2: (show: boolean) => void;
  setTranspose: (transpose: boolean) => void;
  setEnabled: (value: boolean) => void;
  onClose: () => void;
  onClose2: () => void;
}

export const useStore = create<AppState>((set) => ({
  pick: 1,
  showModal: false,
  showModal2: false,
  transpose: false,
  enabled: false,

  setPick: (pick) => set({ pick }),
  setTranspose: (transpose) => set({ transpose }),
  setShowModal: (showModal) => set({ showModal }),
  setShowModal2: (showModal2) => set({ showModal2 }),
  onClose: () => set({ showModal: false }),
  onClose2: () => set({ showModal2: false }),
  setEnabled: (value) => set({ enabled: value }),
}));

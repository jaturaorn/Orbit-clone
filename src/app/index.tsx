import { create } from "zustand";

interface AppState {
  pick: number;
  showModal: boolean;
  showModal2: boolean;
  chain1: number;
  chain2: number;
  transpose: boolean;
  enabled: boolean;

  setPick: (pick: number) => void;
  setChain1: (chain1: number) => void;
  setChain2: (chain2: number) => void;
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
  chain1: 0,
  chain2: 1,

  setPick: (pick) => set({ pick }),
  setTranspose: (transpose) => set({ transpose }),
  setShowModal: (showModal) => set({ showModal }),
  setShowModal2: (showModal2) => set({ showModal2 }),
  onClose: () => set({ showModal: false }),
  onClose2: () => set({ showModal2: false }),
  setEnabled: (value) => set({ enabled: value }),
  setChain1: (chain1) => set({ chain1 }),
  setChain2: (chain2) => set({ chain2 }),
}));

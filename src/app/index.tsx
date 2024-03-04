import { create } from "zustand";

type State = {
  pick: number;
  showModal: boolean;
  showModal2: boolean;
  setPick: (value: number) => void;
  setShowModal: (value: boolean) => void;
  setShowModal2: (value: boolean) => void;
};

const useStore = create<State>((set) => ({
  pick: 1,
  showModal: false,
  showModal2: false,
  setPick: (value) => set(() => ({ pick: value })),
  setShowModal: (value) => set(() => ({ showModal: value })),
  setShowModal2: (value) => set(() => ({ showModal2: value })),
}));

// Create your store, which includes both state and (optionally) actions
// const usePersonStore = create<State & Action>((set) => ({
//   firstName: "",
//   lastName: "",
//   updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
//   updateLastName: (lastName) => set(() => ({ lastName: lastName })),
// }));

export { useStore };

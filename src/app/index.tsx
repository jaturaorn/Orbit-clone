import { create } from "zustand";

/*
TODO: Interface AppState: โค้ดกำหนด interface AppState 
TODO: เพื่อระบุชนิดของ state ทั้งหมดที่เก็บใน store นี้ 
TODO: รวมถึง actions ที่ใช้ในการเปลี่ยนแปลง state
*/
interface AppState {
  /*
  TODO: กำหนดค่าเริ่มต้นของ State: ในฟังก์ชันที่ส่งเข้าไปใน create กำหนดค่าเริ่มต้นของ state ทั้งหมด 
  */
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

/*
TODO: Import Statements: โค้ดเริ่มต้นด้วยการ import create 
TODO: จาก Zustand ซึ่งเป็นฟังก์ชันที่ใช้ในการสร้าง store ของเรา
*/
export const useStore = create<AppState>((set) => ({
  /*
  TODO: Zustand เพื่อสร้าง store ซึ่งรับฟังก์ชันที่มีการเรียก set เป็นพารามิเตอร์ ซึ่งใช้ในการอัปเดตค่า state
  TODO:
  */
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

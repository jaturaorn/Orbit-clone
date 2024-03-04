"use client";

import { useStore } from "../index";

const Tabs = () => {
  const pick = useStore((state) => state.pick);
  const setPick = useStore((state) => state.setPick);
  return (
    <main className=" flex justify-center my-3 bg-base-100">
      <div
        role="tablist"
        className="relative tabs tabs-boxed tabs-sm w-56 h-10 items-center bg-white shadow-xl border border-slate-100"
      >
        <a
          role="tab"
          className={`tab w-full h-full 
          ${pick == 1 ? "text-white" : "text-black"}
          
           font-bold text-lg z-10`}
          onClick={() => {
            setPick(1);
          }}
        >
          Sender
        </a>
        <div
          className={`absolute w-28 h-10 transition-all duration-300
         ${pick == 1 && "translate-x-[0]"} 
         ${pick == 2 && "translate-x-[100%]"} 
         bg-red-500 rounded-xl`}
        ></div>
        <a
          role="tab"
          className={`relative tab w-full ${
            pick == 2 ? "text-white" : "text-black"
          } h-full font-semibold text-lg z-10`}
          onClick={() => {
            setPick(2);
          }}
        >
          Maker
        </a>
      </div>
    </main>
  );
};

export default Tabs;

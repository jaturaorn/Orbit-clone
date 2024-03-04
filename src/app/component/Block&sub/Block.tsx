"use client";

import { useStore } from "@/app";

import { useState } from "react";

import { ImLoop } from "react-icons/im";

import { Switch } from "@headlessui/react";

import SubBlock from "./SubBlock";
import SubBlock1 from "./SubBlock1";
import InforText from "./InforText";
import Modal from "../Modal";
import Modal2 from "../Modal2";

const Block = () => {
  // const [chain1, setChain1] = useState(0);
  // const [chain2, setChain2] = useState(1);

  const {
    showModal,
    showModal2,
    enabled,
    setEnabled,
    transpose,
    setTranspose,
  } = useStore();

  return (
    <main className="flex justify-center my-5">
      <div
        className={`card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 h-[525px] 
      ${transpose === true ? "h-[498px]" : ""}`}
      >
        <div className="card-body relative h-[260px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <p className="font-bold text-xl">Token</p>

              <select className="select select-bordered select-sm w-full max-w-sm">
                <option>ETH</option>
                <option>USDC</option>
                <option>USDT</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <p className={`font-bold text-xl`}>
                {enabled ? (
                  <a className="text-blue-500">V2</a>
                ) : (
                  <a className="text-slate-500">V1</a>
                )}
              </p>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>

          <div>
            <SubBlock />
          </div>

          <div className="flex justify-center absolute top-[37%] left-[50%]">
            <button
              className="w-8 h-8 p-2 rounded-lg bg-red-500 hover:bg-red-700"
              onClick={() => setTranspose(!transpose)}
            >
              <ImLoop size={15} color="white" className="w-full h-full" />
            </button>
          </div>

          <div>
            <SubBlock1 />
          </div>

          <div className="h-[350px] mt-[275px]">
            <button
              className="btn bg-red-500 hover:bg-red-700 
            btn-block text-xl font-bold text-white shadow-lg"
            >
              SEND
            </button>

            <InforText transpose={transpose} />
          </div>
        </div>
      </div>
      {showModal && <Modal />}
      {showModal2 && <Modal2 />}
    </main>
  );
};

export default Block;

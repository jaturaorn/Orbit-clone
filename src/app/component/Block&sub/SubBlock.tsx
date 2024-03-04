"use client";

import { useStore } from "../../index";

import { FaEthereum } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiInterbase } from "react-icons/si";
import { MdOutlineAndroid } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoInfiniteSharp } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { FaFeather } from "react-icons/fa";

const SubBlock = ({ chain1 }: { chain1: any }) => {
  const { setShowModal, enabled, transpose } = useStore();
  return (
    <div
      className={`bg-base-300 absolute top-[13%] w-[450px] 
    h-28 rounded-xl flex-col p-2 my-2 cursor-pointer transition-all duration-200
    ${
      transpose == true
        ? "translate-x-[0%] top-[43%] translate-y-[0%] z-10"
        : "translate-x-[0%] top-[12%] translate-y-[0%] z-10"
    }
    `}
    >
      <p className="text-sm text-slate-500">From</p>
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-x-2"
          onClick={() => setShowModal(true)}
        >
          {chain1 == 0 && (
            <div className="flex gap-x-2">
              <FaEthereum color="gray" size={25} />
              <p className="font-semibold uppercase">Ethereum</p>
            </div>
          )}
          {chain1 == 1 && (
            <div className="flex gap-x-2">
              <SiInterbase size={25} color="blue" />
              <p className="font-semibold uppercase">base</p>
            </div>
          )}
          {chain1 == 2 && (
            <div className="flex">
              <MdOutlineAndroid size={25} />
              <p className="font-semibold uppercase">linea</p>
            </div>
          )}
          {chain1 == 3 && (
            <div className="flex gap-x-2">
              <FaFeather size={25} />
              <p className="font-semibold uppercase">zkSyncEra</p>
            </div>
          )}
          {chain1 == 4 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} color="purple" />
              <p className="font-semibold uppercase">Arbitrum</p>
            </div>
          )}
          {chain1 == 5 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} />
              <p className="font-semibold uppercase">zkSyneLite</p>
            </div>
          )}
          {chain1 == 6 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygonzkevm</p>
            </div>
          )}
          {chain1 == 7 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygon</p>
            </div>
          )}
          {chain1 == 8 && (
            <div className="flex gap-x-2">
              <DiNodejsSmall size={25} />
              <p className="font-semibold uppercase">loopring</p>
            </div>
          )}
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="at least 0.00005"
            className="input input-ghost w-full max-w-md"
          />
          <p>
            {enabled ? (
              <select className="select select-bordered select-sm w-[74px]">
                <option>ETH</option>
                <option>USDC</option>
                <option>USDT</option>
              </select>
            ) : (
              <a className="text-blue-600">Max</a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBlock;

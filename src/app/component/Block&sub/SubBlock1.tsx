import { useStore } from "../../index";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiInterbase } from "react-icons/si";
import { BsQuestionLg } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineAndroid } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoInfiniteSharp } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { FaFeather } from "react-icons/fa";

const SubBlock1 = () => {
  const { setShowModal2, enabled, transpose, chain2 } = useStore();
  return (
    <div
      className={`bg-base-300 absolute top-[43%] w-[450px] 
    h-28 rounded-xl flex-col p-2 my-2 cursor-pointer transition-all duration-200
    ${
      transpose == true
        ? "translate-x-[0%] top-[12%] translate-y-[0%] z-10"
        : "translate-x-[0%] top-[43%] translate-y-[0%] z-10"
    }
    `}
    >
      <p>To</p>
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-x-2"
          onClick={() => setShowModal2(true)}
        >
          {chain2 == 0 && (
            <div className="flex gap-x-2">
              <FaEthereum color="gray" size={25} />
              <p className="font-semibold uppercase">Ethereum</p>
            </div>
          )}
          {chain2 == 1 && (
            <div className="flex gap-x-2">
              <SiInterbase size={25} color="blue" />
              <p className="font-semibold uppercase">base</p>
            </div>
          )}
          {chain2 == 2 && (
            <div className="flex">
              <MdOutlineAndroid size={25} />
              <p className="font-semibold uppercase">linea</p>
            </div>
          )}
          {chain2 == 3 && (
            <div className="flex gap-x-2">
              <FaFeather size={25} />
              <p className="font-semibold uppercase">zkSyncEra</p>
            </div>
          )}
          {chain2 == 4 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} color="purple" />
              <p className="font-semibold uppercase">Arbitrum</p>
            </div>
          )}
          {chain2 == 5 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} />
              <p className="font-semibold uppercase">zkSyneLite</p>
            </div>
          )}
          {chain2 == 6 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygonzkevm</p>
            </div>
          )}
          {chain2 == 7 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygon</p>
            </div>
          )}
          {chain2 == 8 && (
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
            placeholder="0"
            className="input input-ghost w-full max-w-sm"
          />
        </div>
        {enabled ? (
          <select className="select select-bordered select-sm w-[74px]">
            <option>ETH</option>
            <option>USDC</option>
            <option>USDT</option>
          </select>
        ) : (
          <button className="bg-slate-400 rounded-full p-1 text-white">
            <BsQuestionLg color="white" size={12} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SubBlock1;

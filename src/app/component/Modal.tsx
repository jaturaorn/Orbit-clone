import { useStore } from "../index";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { SiInterbase } from "react-icons/si";
import { MdOutlineAndroid } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoInfiniteSharp } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { FaFeather, FaEthereum } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Modal = () => {
  const { onClose, setChain1, chain2 } = useStore();

  function click(a: number) {
    setChain1(a);
    onClose();
  }
  return (
    <div
      className="fixed bg-black/30 bg-opacity-60 top-0
    left-0 right-0 bottom-0 z-50 flex justify-center
    items-center"
    >
      <div
        className="w-[330px] max-w-full h-[365px] bg-white
        rounded-xl p-4 flex flex-col relative"
      >
        <div
          className="absolute top-4 left-[89%] cursor-pointer"
          onClick={onClose}
        >
          <RxCross1 color="gray" size={23} />
        </div>
        <h2 className="text-center mb-2 font-semibold text-xl">
          Select a Chain
        </h2>
        <div className="flex items-center gap-x-3 bg-slate-200 w-full rounded-xl p-1 mb-3">
          <div>
            <HiMagnifyingGlass color="gray" size={30} />
          </div>
          <div>
            <input
              type="text"
              placeholder="input search text"
              className="bg-slate-200 rounded-xl w-[245px] h-[30px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 overflow-y-scroll h-[255px] cursor-pointer">
          <p className="p-1 text-black/70 font-semibold text-sm hover:bg-slate-100">
            Popular
          </p>
          <div
            className={`flex items-center gap-x-4 hover:bg-slate-100 p-1 
            ${chain2 == 0 && "hidden"}`}
            onClick={() => click(0)}
          >
            <FaEthereum color="gray" size={25} />
            <p className="font-semibold uppercase">Ethereum</p>
          </div>
          <div
            className={`flex items-center gap-x-4 hover:bg-slate-100 p-1 
            ${chain2 == 1 && "hidden"} `}
            onClick={() => click(1)}
          >
            <SiInterbase size={25} color="blue" />
            <p className="font-semibold uppercase">base</p>
          </div>
          <div
            className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
            ${chain2 == 2 && "hidden"}`}
            onClick={() => click(2)}
          >
            <MdOutlineAndroid size={25} />
            <p className="font-semibold uppercase">linea</p>
          </div>
          <div
            className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
            ${chain2 == 3 && "hidden"}`}
            onClick={() => click(3)}
          >
            <FaFeather size={25} />
            <p className="font-semibold uppercase">zkSync Era</p>
          </div>
          <div
            className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
            ${chain2 == 4 && "hidden"}`}
            onClick={() => click(4)}
          >
            <FaArrowRightArrowLeft size={25} color="purple" />
            <p className="font-semibold uppercase">Arbitrum</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-1 text-black/70 font-semibold text-sm hover:bg-slate-100">
              Networks
            </p>

            <div
              className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
              ${chain2 == 5 && "hidden"}`}
              onClick={() => click(5)}
            >
              <FaArrowRightArrowLeft size={25} />
              <p className="font-semibold uppercase">zkSyne Lite</p>
            </div>
            <div
              className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
              ${chain2 == 6 && "hidden"}`}
              onClick={() => click(6)}
            >
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygon zkevm</p>
            </div>
            <div
              className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
              ${chain2 == 7 && "hidden"}`}
              onClick={() => click(7)}
            >
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygon</p>
            </div>
            <div
              className={`flex items-center gap-x-3 hover:bg-slate-100 p-1
              ${chain2 == 8 && "hidden"}`}
              onClick={() => click(8)}
            >
              <DiNodejsSmall size={25} />
              <p className="font-semibold uppercase">loopring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { FaRedditAlien } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { BsQuestionLg } from "react-icons/bs";
import { IoTime } from "react-icons/io5";

const InforText = ({ transpose }: { transpose: boolean }) => {
  return (
    <div className="flex flex-col my-5 gap-y-3">
      <div
        className={`flex gap-3 items-center
        ${transpose === true ? "hidden" : ""} `}
      >
        <FaRedditAlien />
        <div className="flex items-center gap-3">
          <p className="text-slate-300 text-sm">Gas Fee Saved</p>
          <TbMinusVertical />
          <p className="text-red-500 text-sm">Save $22.16 ~ $22.46</p>
          <button className="bg-slate-400 rounded-full p-1 text-white">
            <BsQuestionLg color="white" size={12} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <IoTime />
          <p className="text-slate-300 text-sm">Time Spend 45s</p>
          <TbMinusVertical />
          <p className="text-red-500 text-sm">Save 5 min</p>
          <button className="bg-slate-400 rounded-full p-1 text-white">
            <BsQuestionLg color="white" size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InforText;

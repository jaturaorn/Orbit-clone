const Text = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-2">
        <button
          className="flex justify-center items-center bg-[#7bc2ba] 
  rounded-full w-[18px] h-[18px] p-2 text-white text-center text-sm"
        >
          1
        </button>
        <p className="text-sm text-slate-500">
          Become a maker and configure node parameters.
        </p>
      </div>
      <div className="flex gap-x-2">
        <button
          className="flex justify-center items-center bg-[#7bc2ba] 
  rounded-full w-[18px] h-[18px] p-2 text-white text-center text-sm"
        >
          2
        </button>
        <p className="text-sm text-slate-500">
          Run to ensure instant response to users.
        </p>
      </div>
      <div className="flex gap-x-2">
        <button
          className="flex justify-center items-center bg-[#7bc2ba] 
  rounded-full w-[18px] h-[18px] p-2 text-white text-center"
        >
          3
        </button>
        <p className="text-sm text-slate-500">
          Maintain sufficient liquidity in the node by depositing margin.
        </p>
      </div>
      <div className="flex gap-x-2">
        <button
          className="flex justify-center items-center bg-[#7bc2ba] 
  rounded-full w-[18px] h-[18px] p-2 text-white text-center"
        >
          4
        </button>
        <p className="text-sm text-slate-500">
          Experience arbitration process when transactions fail.
        </p>
      </div>
    </div>
  );
};

export default Text;

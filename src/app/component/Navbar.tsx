import { GoMoon } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] bg-white shadow-lg p-2">
      <div className="flex justify-between">
        <div
          className="w-32 h-10"
          style={{
            backgroundImage:
              "url('data:image/png;base64,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')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex items-center gap-x-5 ml-[95px] group transition-all duration-300 ease-in-out cursor-pointer">
          <a
            className="font-semibold text-lg text-slate-400 underline
            decoration-red-500 decoration-[0.20rem]"
          >
            L2 Bridge
          </a>
          <a className="font-semibold text-lg text-slate-400">L2 Data</a>
          <a className="font-semibold text-lg text-slate-400">About us</a>
        </div>
        <div className="flex items-center gap-x-2">
          <a className="px-1 py-1.5 bg-red-500 hover:bg-red-700  text-xl font-semibold text-white rounded-md">
            Connect a Wallet
          </a>
          <button className="btn btn-circle">
            <GoMoon size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

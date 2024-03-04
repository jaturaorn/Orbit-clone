import { FaBook, FaDiscord } from "react-icons/fa";

const TextLogo = () => {
  return (
    <div className="flex flex-col gap-y-3 my-8">
      <div className="flex gap-x-2">
        <FaBook color="gray" />
        <p className="text-sm text-slate-600 underline">
          Docs for Market Marker
        </p>
      </div>
      <div className="flex gap-x-2">
        <FaDiscord color="gray" />
        <p className="text-sm text-slate-600 underline">
          Get Help in Orbiter Discord
        </p>
      </div>
    </div>
  );
};

export default TextLogo;

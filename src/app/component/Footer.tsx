import { FaBook } from "react-icons/fa6";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content mt-[99px]">
      <nav className="gap-y-5">
        <div className="grid grid-flow-col gap-10 text-slate-400 cursor-pointer">
          <FaBook size={20} />
          <FaGithub size={20} />
          <FaTwitter size={20} />
          <FaMedium size={20} />
          <FaDiscord size={20} />
        </div>
        <aside className="text-slate-400 hover:underline">
          <a className="cursor-pointer">Terms of Use</a>
        </aside>
      </nav>
    </footer>
  );
};

export default Footer;

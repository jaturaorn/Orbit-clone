import { Transition } from "@headlessui/react";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

import { useStore } from "../index";

const Dropdownself = () => {
  const { isOpen, toggleDropdown, closeDropdown } = useStore();
  return (
    <div>
      <div className="relative inline-block">
        <button
          type="button"
          className="inline-flex items-center p-1.5 font-semibold gap-x-2
          bg-slate-300/25 rounded-lg hover:bg-slate-500/25 focus:outline-none"
          onClick={toggleDropdown}
        >
          <FaEthereum color="gray" />
          ETH
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <div
            className="absolute left-0 mt-1.5 origin-top-right bg-white 
          rounded-lg shadow-lg w-44 ring-1 ring-black ring-opacity-5 z-100"
          >
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  className="flex items-center p-2 text-sm 
                  text-gray-700 font-semibold hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <FaEthereum color="gray" className="h-4 w-6" />
                  ETH
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* <Transition
          show={true}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div></div>
        </Transition> */}
      </div>
      {/* <div className="relative inline-block">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={toggleDropdown}
        >
          Dropdown{" "}
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 origin-top-right bg-white rounded-lg shadow-lg w-44 ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Dropdownself;

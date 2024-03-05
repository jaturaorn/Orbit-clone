import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { IconContext } from "react-icons";
import { FaEthereum } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const Dropdown1 = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="flex w-full justify-center items-center rounded-md bg-[#f5f5f5] px-2 
          py-1 text-md font-bold text-black hover:bg-black/30 gap-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <FaEthereum color="gray" className="h-4 w-6" />
          ETH
          <IoChevronDownOutline color="#a7a7a7" className=" h-4 w-6" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 mt-2 w-48 origin-top-left divide-y 
          divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 
          focus:outline-none z-100"
        >
          <div className="px-3 py-3">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#f5f5f5]" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 
                   font-semibold gap-x-2 `}
                >
                  {active ? <EditActiveIcon /> : <EditInactiveIcon />}
                  ETH
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown1;

function EditInactiveIcon(props: any) {
  return (
    <IconContext.Provider value={{ color: "#949494", className: "h-5 w-5" }}>
      <div>
        <FaEthereum {...props} />
      </div>
    </IconContext.Provider>
  );
}

function EditActiveIcon(props: any) {
  return (
    <IconContext.Provider value={{ color: "#363636", className: "h-5 w-5" }}>
      <div>
        <FaEthereum {...props} />
      </div>
    </IconContext.Provider>
  );
}

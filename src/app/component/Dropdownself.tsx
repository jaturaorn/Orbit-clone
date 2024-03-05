import { Fragment } from "react";
import { Transition } from "@headlessui/react";

const Dropdownself = () => {
  return (
    <div>
      <div>
        <button></button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div></div>
        </Transition>
      </div>
    </div>
  );
};

export default Dropdownself;

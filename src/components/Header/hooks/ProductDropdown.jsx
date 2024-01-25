import React, { useState } from "react";
import Arrow from "../icons/Arrow.jsx";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center gap-2 justify-center w-full rounded-md px-2 py-2 bg-white text-[12px] font-semibold text-gray-700"
        onClick={toggleDropdown}
      >
        Product
        <Arrow></Arrow>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100">
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

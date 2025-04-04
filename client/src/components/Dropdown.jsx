import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Prevents premature closing
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setOpen(false), 100); // Delayed closing
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-white bg-transparent">
        {label}{" "}
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""} `}
        />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-yellow-200 shadow-lg rounded">
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ label, children }) => {
  const [subOpen, setSubOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setSubOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setSubOpen(false), 100);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-300 cursor-pointer">
        {label}{" "}
        {children && (
          <FiChevronDown
            className={`text-gray-500 ${subOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>
      {subOpen && children && (
        <div className="absolute left-full top-0 mt-0 w-48 rounded bg-yellow-300 shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export { Dropdown, DropdownItem };

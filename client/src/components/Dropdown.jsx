/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FiChevronDown } from "react-icons/fi";

// --- Dropdown Component (Unchanged) ---
const Dropdown = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Prevents premature closing
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay so user can move mouse into dropdown content
    timeoutId = setTimeout(() => setOpen(false), 150); // Slightly longer delay
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button to trigger dropdown visibility on hover */}
      <button className="flex items-center gap-1 text-white hover:text-[#FBBF24] transition px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
        {" "}
        {/* Added focus style and padding/font */}
        {label}{" "}
        <FiChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`} // Added duration
        />
      </button>

      {/* Dropdown Content Area */}
      {open && (
        <div className="absolute font-semibold left-0 mt-1 w-48 bg-lime-100 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 z-50">
          {" "}
          {/* Adjusted styling/z-index */}
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {" "}
            {/* Added ARIA roles */}
            {children} {/* DropdownItem components go here */}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ label, children, to }) => {
  // State and handlers for potential sub-menus (if children exist)
  const [subOpen, setSubOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setSubOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setSubOpen(false), 100);
  };

  // --- Logic Change: Render Link if 'to' prop exists ---
  if (to) {
    return (
      <Link
        to={to}
        className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-400 cursor-pointer" // Apply styling to Link
        role="menuitem"
        // onClick could be added here if needed to close the main dropdown
      >
        {label}
        {/* Display chevron only if there are also children (unlikely for a link) */}
        {children && <FiChevronDown className={`text-gray-500 ml-auto`} />}
      </Link>
    );
  }

  // --- Original Logic for items with submenus (if 'children' exist but 'to' doesn't) ---
  if (children) {
    return (
      <div
        className="relative group" // Keep group for potential future submenu styling
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menuitem" // Add role
        aria-haspopup="true" // Indicate submenu possibility
        aria-expanded={subOpen}
      >
        <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 rounded hover:bg-yellow-400 cursor-pointer">
          {label}{" "}
          <FiChevronDown
            className={`text-gray-500 transition-transform duration-200 ${
              subOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {subOpen && (
          <div className="absolute left-full top-0 -mt-1 w-48 rounded bg-yellow-300 shadow-lg z-10">
            {" "}
            {/* Adjusted position/z-index */}
            <div className="py-1" role="menu" aria-orientation="vertical">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- Fallback for simple label item without link or children ---
  return (
    <span
      className="block px-4 py-2 text-sm text-gray-700 rounded"
      role="menuitem"
    >
      {label}
    </span>
  );
};

export { Dropdown, DropdownItem };

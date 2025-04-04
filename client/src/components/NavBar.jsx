import { useState, useEffect } from "react";
import QuoteModal from "./QuoteModel";
import { Link, useLocation } from "react-router-dom";
import { DropdownItem, Dropdown } from "./Dropdown";
import logo from "../images/logoPart.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleModel() {
    setModal(!modal);
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#003229] top-0"
          : location.pathname !== "/"
          ? "bg-[#003229]"
          : "bg-transparent top-10"
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo Symbol" className="h-10" />
            <span className=" font-varela text-4xl font-bold text-zinc-200">
              Termitrack
            </span>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#FBBF24] transition">
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#FBBF24] transition"
            >
              About Us
            </Link>
            <a
              href="#services"
              className="text-white hover:text-[#FBBF24] transition"
            >
              <Dropdown label="Products">
                <DropdownItem label="Commercial">
                  <DropdownItem label="Termite Control" />
                  <DropdownItem label="Rodent Control" />
                  <DropdownItem label="Insect Removal" />
                </DropdownItem>
                <DropdownItem label="Residential">
                  <DropdownItem label="Bed Bug Treatment" />
                  <DropdownItem label="Mosquito Control" />
                  <DropdownItem label="Cockroach Control" />
                </DropdownItem>
              </Dropdown>
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#FBBF24] transition"
            >
              Contact Us
            </a>
          </div>
          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button
              className="bg-[#FBBF24] text-black py-2 px-4 rounded-lg shadow-md hover:bg-[#F59E0B] transition"
              onClick={toggleModel}
            >
              Get a Free Quote
            </button>
          </div> */}
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white hover:text-[#FBBF24] focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#003229] text-white transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white absolute top-4 right-4 focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-4 p-6">
          <a
            href="#home"
            className="block py-2 hover:text-[#FBBF24] transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-[#FBBF24] transition"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-[#FBBF24] transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-[#FBBF24] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
          <button
            className="w-full mt-2 bg-[#FBBF24] text-black py-2 px-4 rounded-lg shadow-md hover:bg-[#F59E0B] transition"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <QuoteModal isOpen={modal} onClose={toggleModel} />
    </nav>
  );
};
export default Navbar;

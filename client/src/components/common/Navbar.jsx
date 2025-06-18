import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Predictions", path: "/predictions" },
    { label: "Market News", path: "/market-news" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#0b1120] to-[#1c2c49] text-white sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#00B4D8] tracking-tight"
        >
          StockPredict
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-[#00B4D8] transition duration-300 ${
                location.pathname === path
                  ? "text-[#00B4D8] font-semibold"
                  : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none z-50 relative transition-transform duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose className="transform rotate-180 transition duration-300" /> : <IoMenu />}
        </button>
      </div>

      {/* Animated Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed top-16 left-0 w-full bg-[#1c2c49] text-white z-40 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col space-y-3 px-4 py-4 transition-opacity duration-500">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 rounded hover:bg-[#24304f] transition duration-300 ${
                location.pathname === path
                  ? "text-[#00B4D8] font-semibold"
                  : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

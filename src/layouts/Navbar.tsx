import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Images/Logo.webp";
import GradientButton from "../ui/Button/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full mx-auto bg-transparent py-4 flex justify-between items-center px-4 md:px-10 relative">
      {/* Left Section */}
      <div className="flex items-center gap-8 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Omnisol AI Logo"
            className="w-[34px] object-contain"
          />
          <h1 className="font-main font-medium text-[26px] leading-[35px] tracking-[-0.018em] text-white">
            Omnisol AI
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 font-main font-medium text-[16px] text-white md:mx-10 xl:mx-10 2xl:mx-12">
          <li>
            <Link to="/services" className="cursor-pointer transition-all">
              Services +
            </Link>
          </li>
          <li>
            <Link to="/blog" className="cursor-pointer transition-all">
              Blog
            </Link>
          </li>
          <li className="relative">
            <Link to="/careers" className="cursor-pointer transition-all">
              We are hiring
            </Link>
            <span className="absolute bg-NavNewLinkBg font-poppins px-1.5 py-0.3 rounded-sm -top-3 right-[-24px] text-[10px] text-NavNewText font-semibold rotate-[-8deg]">
              NEW
            </span>
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <GradientButton
          text="Let’s Talk"
          className="!h-[50px] !w-[150px] !text-[12px] z-50"
        />
      </div>

      {/* ✅ Mobile Menu Icon (Hamburger / Close) */}
      <div
        className="md:hidden z-50 cursor-pointer flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Hamburger Lines */}
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-[2px] bg-white my-[6px] transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`absolute top-[75px] left-0 w-full bg-[#0e0e0e] flex flex-col items-center gap-6 py-6 text-white font-main font-medium text-[16px] z-40 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link
          to="/services"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#EB8642] transition-all"
        >
          Services +
        </Link>
        <Link
          to="/blog"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#EB8642] transition-all"
        >
          Blog
        </Link>
        <Link
          to="/careers"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#EB8642] transition-all relative"
        >
          We are hiring
          <span className="absolute -top-2 right-[-24px] text-[10px] text-[#00FF00] font-semibold">
            NEW
          </span>
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <button className="px-6 py-2 bg-gradient-to-r from-[#F07056] to-[#EB8642] rounded-full text-white font-[Poppins] text-[16px] hover:scale-105 transition-transform duration-300 shadow-md">
            Let’s Talk
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

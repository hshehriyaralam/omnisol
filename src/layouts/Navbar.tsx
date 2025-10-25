import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Images/Logo.webp";
import GradientButton  from "../ui/Button/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full mx-auto bg-hero  py-4 flex justify-between items-center px-4 md:px-10 relative">
        <div className="absolute inset-0   bg-gradient-to-r from-black via-transparent to-black opacity-40 pointer-events-none   "></div>
      {/* Left Section */}
      <div className="flex items-center gap-8  z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Omnisol AI Logo"
            className="w-[34px] object-contain"
          />
          <h1 className="font-main font-medium text-[28px] md:text-[26px] leading-[35px] tracking-[-0.018em] text-NavLinks">
            Omnisol AI
          </h1>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 font-main font-medium text-[16px] md:text-[16px] text-white md:mx-10 xl:mx-10 2xl:mx-12">
          <li>
            <Link
              to="/services"
              className="cursor-pointer  transition-all"
            >
              Services +
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="cursor-pointer  transition-all"
            >
              Blog
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/careers"
              className="cursor-pointer  transition-all"
            >
              We are hiring
            </Link>
            <span className="absolute bg-NavNewLinkBg  font-poppins    px-1.5 py-0.3 rounded-sm  -top-3 right-[-24px] text-[10px] text-NavNewText font-semibold  rotate-[-8deg]">
              NEW
            </span>
          </li>
        </ul>
      </div>

      {/* Right Button */}
     <GradientButton 
      text="Let’s Talk"
      className="hidden md:block z-50  h-[50px] md:h-[60px] w-[120px] md:w-[150px] text-[14px] md:text-[16px]"
      
     />

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-white text-[24px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-black flex flex-col items-center gap-6 py-6 text-white font-main font-medium text-[16px] z-50">
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-NavLinks transition-all"
          >
            Services +
          </Link>
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="hover:text-NavLinks transition-all"
          >
            Blog
          </Link>
          <Link
            to="/careers"
            onClick={() => setMenuOpen(false)}
            className="hover:text-NavLinks transition-all relative"
          >
            We are hiring
            <span className="absolute   -top-2 right-[-24px] text-[10px] text-[#00FF00] font-semibold">
              NEW
            </span>
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="px-6 py-2 bg-gradient-to-r from-[#F07056] to-[#EB8642] rounded-full text-white font-[Poppins] text-[16px] hover:scale-105 transition-transform duration-300 shadow-md">
              Let’s Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

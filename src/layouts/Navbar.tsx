import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "/Images/Logo.webp";
import GradientButton from "../ui/Button/Button";
import SecButton from "../components/commons/secButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    services: false,
    consulting: false,
    company: false,
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const serviceButtonRef = useRef<HTMLSpanElement | null>(null);

  const toggleDropdown = (section: keyof typeof openDropdowns) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleLinkClick = () => {
    setServiceOpen(false);
    setMenuOpen(false);
  };

  const handleServiceMouseEnter = () => setServiceOpen(true);
  const handleServiceMouseLeave = (event: React.MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node) &&
      serviceButtonRef.current &&
      !serviceButtonRef.current.contains(event.relatedTarget as Node)
    ) {
      setServiceOpen(false);
    }
  };

  const handleDropdownMouseEnter = () => setServiceOpen(true);
  const handleDropdownMouseLeave = (event: React.MouseEvent) => {
    if (
      serviceButtonRef.current &&
      !serviceButtonRef.current.contains(event.relatedTarget as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node)
    ) {
      setServiceOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        serviceButtonRef.current &&
        !serviceButtonRef.current.contains(event.target as Node)
      ) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setServiceOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuLinks = {
    services: [
      { to: "/services/aidevelopmentservices", label: "AI Development" },
      { to: "/services/aiagents", label: "AI Agents" },
      { to: "/services/chatbotdevelopmentservice", label: "Chatbot Development" },
      { to: "/services/generativeai", label: "Generative AI" },
      { to: "/services/datamigration", label: "Data Migration" },
    ],
    consulting: [
      { to: "/services/aiconsulting", label: "AI Consulting" },
      { to: "/services/aipoc", label: "AI POC" },
      { to: "/services/digitaltransformation", label: "Digital Transformation" },
      { to: "/services/technicalfeasibility", label: "Technical Feasibility" },
      { to: "/services/userexperience", label: "User Experience & Design" },
    ],
    company: [
      { to: "/services/workshop", label: "Workshop" },
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  };

  return (
    <nav className="relative w-full bg-hero py-4 px-4 md:px-10 flex justify-between items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 pointer-events-none"></div>

      {/* Left Section (Logo + Desktop Menu) */}
      <div
        className={`flex items-center gap-3 md:gap-6 md:z-50 transition-all duration-300 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100 z-50"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 cursor-pointer relative z-50">
          <img
            src={logo}
            alt="Omnisol AI Logo"
            className="w-[34px] h-[34px] object-contain"
          />
          <h1 className="font-main font-medium text-[22px] md:text-[26px] tracking-[-0.018em] text-NavLinks">
            Omnisol AI
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-main font-medium text-[16px] text-white">
          <li className="relative">
            <span
              ref={serviceButtonRef}
              className="cursor-pointer transition-all select-none"
              onMouseEnter={handleServiceMouseEnter}
              onMouseLeave={handleServiceMouseLeave}
            >
              Services +
            </span>

            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="fixed top-[90px] left-0 right-0 w-full bg-white text-black shadow-lg z-40"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-90px)] overflow-y-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="w-full lg:w-4/6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                          {Object.entries(mobileMenuLinks).map(([title, links]) => (
                            <div key={title}>
                              <h3 className="font-medium mb-6 text-2xl capitalize">{title}</h3>
                              <ul className="space-y-4 text-base font-normal">
                                {links.map((link) => (
                                  <li key={link.to}>
                                    <Link
                                      to={link.to}
                                      onClick={handleLinkClick}
                                      className="hover:text-blue-600 transition-colors duration-200"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="bg-header-sub p-6 rounded-xl">
                          <h4 className="font-semibold mb-2 text-header-sub-color">
                            Engagement Models we have
                          </h4>
                          <p className="text-sm text-black opacity-70">
                            For tailored AI solutions specific to your needs.
                          </p>
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="border border-header-box-border rounded-lg p-4 bg-header-box">
                              <h4 className="text-header-box-border font-medium">
                                Project-based delivery
                              </h4>
                            </div>
                            <div className="border border-header-box-border rounded-lg p-4 bg-header-box">
                              <h4 className="text-header-box-border font-medium">
                                Dedicated Team
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full lg:w-2/6 bg-[url('/FooterAssests/Bg.png')] bg-cover bg-right bg-no-repeat text-white p-6 rounded-lg flex flex-col justify-between">
                        <div>
                          <h4 className="text-2xl mb-4 font-semibold">
                            Should AI be the next step for your business?
                          </h4>
                          <p className="text-base leading-relaxed opacity-90">
                            Book a free consultation call with us to explore
                            whether AI fits your needs.
                          </p>
                        </div>
                        <div className="mt-6">
                          <SecButton text="Contact Us" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/blog" className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              Blog
            </Link>
          </li>

          <li className="relative">
            <Link to="/hiring/hiring3" className="cursor-pointer hover:text-gray-300 transition-colors duration-200">
              We are hiring
            </Link>
            <span className="absolute bg-NavNewLinkBg px-1.5 py-0.3 rounded-sm -top-3 right-[-24px] text-[10px] text-NavNewText font-semibold rotate-[-8deg]">
              NEW
            </span>
          </li>
        </ul>
      </div>

      {/* Right Button */}
      <div className="z-50 hidden md:block">
        <GradientButton
          text="Let's Talk "
          width="180px"
          height="50px"
          arrowSize="20px"
          arrowBgSize="35px"
          fontSize="15px"
          textTranslate="60px"
          arrowTranslate="-90px"
          hideArrowOnMobile={false}
        />
      </div>

      {/* Mobile Hamburger */}
      <div
        className={`md:hidden z-[999] cursor-pointer flex flex-col justify-center items-center w-8 h-8 ${
          menuOpen ? "hidden" : "" // 👈 Hide hamburger icon when menu is open
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-white my-[6px] transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bg-white w-full h-full z-[900] overflow-y-auto font-main transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-black">Menu</h2>
          <button
            className="text-black text-xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-5">
          {Object.entries(mobileMenuLinks).map(([section, links]) => (
            <div
              className="border-b border-gray-100 pb-4 mt-6" // 👈 Added mt-6 for spacing between dropdowns
              key={section}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(section as keyof typeof openDropdowns)}
              >
                <span className="text-xl font-medium text-black capitalize">
                  {/* 👆 increased from text-lg to text-xl */}
                  {section}
                </span>
                {openDropdowns[section as keyof typeof openDropdowns] ? (
                  <ChevronUp className="text-gray-600 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-gray-600 w-5 h-5" />
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdowns[section as keyof typeof openDropdowns]
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-3">
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={handleLinkClick}
                      className="block text-gray-600 text-base hover:text-blue-600 transition-colors duration-200"
                    >
                      {/* 👆 increased from text-sm to text-base */}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Additional Links */}
          <div className="space-y-6 ">
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className="block text-xl font-medium text-black hover:text-blue-600 transition-colors duration-200"
            >
              {/* 👆 increased from text-lg to text-xl */}
              Blog
            </Link>
            <Link
              to="/hiring/hiring3"
              onClick={handleLinkClick}
              className="block text-xl font-medium text-black hover:text-blue-600 transition-colors duration-200 relative"
            >
              {/* 👆 increased from text-lg to text-xl */}
              We are hiring
              <span className="absolute bg-NavNewLinkBg px-1.5 py-0.3 rounded-sm -top-3 right-0 text-[10px] text-NavNewText font-semibold rotate-[-8deg]">
                NEW
              </span>
            </Link>
          </div>

          {/* CTA Card */}
          <div className="bg-[url('/FooterAssests/Bg.png')] bg-cover bg-no-repeat bg-right text-white rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Should AI be the next step for your business?
            </h3>
            <p className="text-sm leading-relaxed mb-4 opacity-90">
              Book a free consultation call with us.
            </p>
            <button
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

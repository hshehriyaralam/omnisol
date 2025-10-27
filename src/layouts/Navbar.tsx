import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Images/Logo.webp";
import GradientButton from "../ui/Button/Button";
import SecButton from "../components/common/secButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    services: false,
    consulting: false,
    company: false,
  });

  const toggleDropdown = (section: keyof typeof openDropdowns) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
          <li className="relative group">
            <Link
              to="/services"
              className="cursor-pointer  transition-all"
            >
              Services +
              <div className="fixed top-[90px] left-0 right-0 w-full opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white text-black shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-90px)]">
                  <div className="flex gap-8">
                    <div className=" w-4/6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        <div>
                          <h3 className="font-medium  mb-6 text-2xl">Services</h3>
                          <ul className="space-y-4 text-base font-normal">
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                            <li><Link to="/services/machine-learning" className="hover:text-blue-600">Machine Learning</Link></li>
                            <li><Link to="/services/automation" className="hover:text-blue-600">AI Automation</Link></li>
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium  mb-6 text-2xl">Services</h3>
                          <ul className="space-y-4 text-base font-normal">
                            <li><Link to="/services/strategy" className="hover:text-blue-600">AI Strategy</Link></li>
                            <li><Link to="/services/assessment" className="hover:text-blue-600">AI Assessment</Link></li>
                            <li><Link to="/services/implementation" className="hover:text-blue-600">Implementation</Link></li>
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium  mb-6 text-2xl">Company</h3>
                          <ul className="space-y-4 text-base font-normal">
                            <li><Link to="/services/maintenance" className="hover:text-blue-600">AI Maintenance</Link></li>
                            <li><Link to="/services/training" className="hover:text-blue-600">Team Training</Link></li>
                            <li><Link to="/services/optimization" className="hover:text-blue-600">Optimization</Link></li>
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                            <li><Link to="/services/custom-ai" className="hover:text-blue-600">Custom AI Solutions</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-header-sub p-6 rounded-xl">
                        <h4 className="font-semibold mb-2 text-header-sub-color">Engagement Models we have</h4>
                        <p className="text-sm text-black font-poppins font-regular opacity-70">For tailored AI solutions specific <br /> to your needs.</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="border-1 border-header-box-border rounded-lg p-4 bg-header-box">
                            <h4 className="text-header-box-border font-medium">Project-based delivery</h4>
                          </div>
                          <div className="border-1 border-header-box-border rounded-lg p-4 bg-header-box">
                            <h4 className="text-header-box-border font-medium">Dedicated Team</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/6  p-8 rounded-lg bg-[url('/FooterAssests/Bg.png')] text-white bg-no-repeat bg-cover bg-scroll bg-right flex flex-col justify-between">
                      <div>
                        <h4 className="font-normal text-2xl mb-6">Should AI be the next step for your business?</h4>
                        <p className="text-base font-main font-normal">Book a free consultation call with us to explore whether AI is the right fit for your processes. Our AI experts will assess your workflows, uncover opportunities, and identify practical use cases where AI may add real value to your goals.</p>
                      </div>
                      <div>
                        <SecButton text='Contact Us' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        className="hidden lg:block z-50  h-[50px] md:h-[60px] w-[120px] md:w-[150px] text-[14px] md:text-[16px]"

      />

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-white text-[24px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bg-white w-full h-full z-50 overflow-y-auto font-main transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="relative w-full h-full">
          {/* Header with Menu title and close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 ">
            <h2 className="text-xl font-medium text-black">Menu</h2>
            <div
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa-solid fa-xmark text-black text-xl"></i>
            </div>
          </div>

          {/* Menu Content */}
          <div className="p-4 space-y-4">
            <ul>
              {/* Services Dropdown */}
              <li className="border-b border-gray-100 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown('services')}
                >
                  <span className="text-lg font-medium text-black">Services</span>
                  <i className={`fa-solid ${openDropdowns.services ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm text-gray-600 transition-transform`}></i>
                </div>

                {/* Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns.services ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="mt-3 pl-4 space-y-3">
                    <Link to="/services/ai-development" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Development Service
                    </Link>
                    <Link to="/services/ai-agent" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Agent Development
                    </Link>
                    <Link to="/services/ai-gen" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Gen Development
                    </Link>
                    <Link to="/services/ai-chatbot" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Chatbot Development
                    </Link>
                    <Link to="/services/ai-poc" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Proof of Concept
                    </Link>
                  </div>
                </div>
              </li>

              {/* Consulting Dropdown */}
              <li className="border-b border-gray-100 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown('consulting')}
                >
                  <span className="text-lg font-medium text-black">Consulting</span>
                  <i className={`fa-solid ${openDropdowns.consulting ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm text-gray-600 transition-transform`}></i>
                </div>

                {/* Consulting Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns.consulting ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="mt-3 pl-4 space-y-3">
                    <Link to="/consulting/strategy" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Strategy Consulting
                    </Link>
                    <Link to="/consulting/implementation" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Implementation
                    </Link>
                    <Link to="/consulting/assessment" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      AI Readiness Assessment
                    </Link>
                    <Link to="/consulting/transformation" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      Digital Transformation
                    </Link>
                  </div>
                </div>
              </li>

              {/* Company Dropdown */}
              <li className="border-b border-gray-100 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown('company')}
                >
                  <span className="text-lg font-medium text-black">Company</span>
                  <i className={`fa-solid ${openDropdowns.company ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm text-gray-600 transition-transform`}></i>
                </div>

                {/* Company Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns.company ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="mt-3 pl-4 space-y-3">
                    <Link to="/about" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      About Us
                    </Link>
                    <Link to="/team" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      Our Team
                    </Link>
                    <Link to="/careers" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      Careers
                    </Link>
                    <Link to="/contact" className="block text-gray-600 hover:text-black transition-colors py-1" onClick={() => setMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </li>

              {/* Engagement Models Dropdown */}
              <li className="border-b border-gray-100 py-4">
                <Link to='' className="flex justify-between">
                  <span className="text-lg font-medium text-black">Engagement Models</span>
                  <i className="fa-solid  fa-chevron-down text-sm text-gray-600 transition-transform"></i>
                </Link>

              </li>

            </ul>

            {/* Engagement Models - Expanded Content */}
            <div className="bg-header-sub rounded-lg p-4 mb-4">
              {/* Expanded content */}
              <h4 className="font-semibold text-black mb-2">Engagement Models we have</h4>
              <p className="text-sm text-gray-700 mb-4">For tailored AI solutions specific to your needs.</p>

              <div className="space-y-3">
                <div className="bg-header-box rounded-lg p-3">
                  <h5 className="font-medium text-header-sub-color">Project-based delivery</h5>
                </div>
                <div className="bg-header-box rounded-lg p-3">
                  <h5 className="font-medium text-header-sub-color">Dedicated Team</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section  */}
          <div className='p-4'>
            <div className="bg-[url('/FooterAssests/Bg.png')] text-white bg-no-repeat bg-cover bg-scroll bg-right rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Should AI be the next step for your business?</h3>
              <p className="text-sm mb-4 leading-relaxed">Book a free consultation call with us to explore whether AI is the right fit for your processes. Our AI experts will assess your workflows, uncover opportunities, and identify practical use cases where AI may add real value to your goals.</p>
              <button
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

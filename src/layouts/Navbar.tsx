import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Images/Logo.webp";
import GradientButton from "../ui/Button/Button";
import SecButton from "../components/common/secButton";

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
      {menuOpen && (
        <div className="z">
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

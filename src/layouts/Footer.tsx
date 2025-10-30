
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-footerBg text-black overflow-hidden shadow-[inset_0px_95px_123.6px_-32px_rgba(119,118,141,0.25)]">
      {/* ✅ TOP SHADOW IMAGE */}
      <div className="hidden lg:flex justify-center">
        <img
          src="/FooterAssests/TopLogo.png"
          alt="footer shadow"
          className="
      w-[90%] sm:w-[95%] md:w-[1100px] lg:w-[1200px]
      md:mt-12
      max-w-full
      h-[120px] sm:h-[160px] md:h-[200px]
    "
        />
      </div>


      {/* ✅ FOOTER MAIN CONTENT */}
      <div className="relative max-w-[1472px] mx-auto px-6 md:px-10 lg:px-28 pt-8 md:pt-12 pb-20">
        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden lg:grid grid-cols-3 gap-20">
          {/* LEFT SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-0">
              <img
                src="/FooterAssests/Logo.png"
                alt="logo"
                className="w-[42px] h-[38px]"
              />
              <h2 className="text-[32px] leading-[36px] font-light tracking-tight font-main">
                Omnisol AI
              </h2>
            </div>

            <p className="text-[20px] leading-[30px] max-w-[420px] font-medium tracking-tight font-main">
              Automate workflows in weeks, not quarters. Trusted by startups and
              Fortune 500s.
            </p>

            <div
              className="w-full sm:w-[530px] mt-10 rounded-[22px] border border-border p-8 
  bg-[url('/FooterAssests/Bg.png')] bg-cover bg-center relative overflow-hidden"
            >


              {/* Actual content */}
              <div className="relative z-10">
                <h3 className="text-[36px] font-main font-medium leading-[54px] text-white mb-2">
                  Subscribe our Newsletter
                </h3>
                <p className="text-[12.93px] font-main font-medium leading-[22.06px] text-white mb-4">
                  We never spam
                </p>

                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    className="w-full h-[49px] rounded-[6px] font-main font-light border border-border bg-white/20 text-white placeholder-white text-[12.93px] leading-[22.06px] pl-4 pr-[90px] outline-none"
                  />
                  <a
                    href="#"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-[13.93px] font-main font-bold leading-[22.06px]"
                  >
                    Subscribe
                  </a>
                </div>

                <div className="border-t border-black my-6 w-full md:mt-10"></div>

                <h4 className="text-[31px] leading-[50px] text-white mb-1 font-main font-normal">
                  Become Our Brand Ambassador
                </h4>
                <p className="text-[13.93px] leading-[22.06px] text-white mb-5 font-main font-normal">
                  Share Your Referral Code and Earn Rewards!
                </p>

                <button className="bg-white text-textColor text-[20px] py-[12px] px-[24px] rounded-[6px] font-normal font-poppins">
                  Get Your Referral Code Now
                </button>
              </div>
            </div>
          </div>

          {/* MIDDLE TEXT */}
          <div className="flex flex-col justify-start md:ml-60 pt-16 gap-6 text-[20px] leading-[30px] font-main font-medium tracking-tight">
            <span>Fintech</span>
            <span>Healthcare</span>
            <span>Retail</span>
            <span>GTM</span>
          </div>

          {/* RIGHT SECTION CONTACTS */}
          <div className="flex flex-col justify-start pt-16 gap-6 text-[20px] leading-[30px] font-main font-medium tracking-tight">
            <div className="flex items-center gap-4">
              <img src="/FooterAssests/Email.png" alt="mail" className="w-6 h-6" />
              <span>info@omnisol.com</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/FooterAssests/Phone.png" alt="phone" className="w-6 h-6" />
              <span>+1 314 970 2115</span>
            </div>
            <div className="flex items-start gap-4">
              <img src="/FooterAssests/Location.png" alt="address" className="w-6 h-6 mt-1" />
              <span>
                2055 Craigshire Rd, Suite 410,<br />St. Louis, MO 63146
              </span>
            </div>

            <div className="flex gap-5 md:mt-47">
              <img src="/FooterAssests/Facebook.png" alt="fb" className="w-10 h-10" />
              <img src="/FooterAssests/Twitter.png" alt="x" className="w-10 h-10" />
              <img src="/FooterAssests/Instagram.png" alt="in" className="w-10 h-10" />
              <img src="/FooterAssests/Linkedin.png" alt="ig" className="w-10 h-10" />
              <img src="/FooterAssests/Youtube.png" alt="yt" className="w-10 h-10" />
            </div>

            <div className="flex gap-6 mt-6 text-[15px] leading-[30px]  text-gray-500 font-main font-normal tracking-tight">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* ✅ RESPONSIVE VERSION (mobile & tablet) */}
     
<div className="lg:hidden flex flex-col items-start px-6">

  {/* 🔸 New Top Logo and Text */}
  <div className="flex flex-col items-start  mt-10">
    <img
      src="/FooterAssests/Footer2.png" 
      alt="Omnisol AI"
      className="object-contain h-auto  mb-3"
    />
    <p className="text-[16px] leading-[26px] text-left font-main font-medium mt-3 max-w-[320px]">
      Automate workflows in weeks, not quarters. Trusted by startups and
      Fortune 500s.
    </p>
  </div>

  {/* 🔸 Industries Section */}
  <div className="mt-10 flex flex-col  gap-2 text-[18px] font-main font-medium tracking-tight text-left">
    <span>Fintech</span>
    <span>Healthcare</span>
    <span>Retail</span>
    <span>GTM</span>
  </div>

  {/* 🔸 Contact Info */}
  <div className="mt-10 flex flex-col items-left gap-4 text-[18px] font-main font-medium ">
    <div className="flex items-center gap-3">
      <img src="/FooterAssests/Email.png" alt="mail" className="w-6 h-6" />
      <span>info@omnisol.com</span>
    </div>
    <div className="flex items-center gap-3">
      <img src="/FooterAssests/Phone.png" alt="phone" className="w-6 h-6" />
      <span>+1 314 970 2115</span>
    </div>
    <div className="flex items-start gap-3">
      <img src="/FooterAssests/Location.png" alt="address" className="w-6 h-6 mt-1" />
      <span>
        2055 Craigshire Rd, Suite 410,St. Louis, MO 63146 
      </span>
    </div>
  </div>

  {/* 🔸 Newsletter + Ambassador form (your existing one, unchanged) */}
  <div
    className="w-full sm:w-[530px] mt-10 rounded-[22px] border border-border p-6 sm:p-8 
    bg-[url('/FooterAssests/Bg.png')] bg-cover bg-center relative overflow-hidden"
  >
    <div className="relative z-10 text-center sm:text-left">
      <h3 className="text-[24px] sm:text-[32px] md:text-[36px] font-main font-medium leading-[36px] sm:leading-[48px] md:leading-[54px] text-white mb-2">
        Subscribe our Newsletter
      </h3>
      <p className="text-[11px] sm:text-[12.93px] text-left font-main font-medium leading-[18px] sm:leading-[22.06px] text-white mb-5">
        We never spam
      </p>
      <div className="relative w-full">
        <input
          type="email"
          placeholder="Enter your email here"
          className="w-full h-[50px] sm:h-[49px] rounded-[6px] font-main font-normal border border-border 
          bg-white/20 text-white placeholder-white text-[14px] sm:text-[12.93px] leading-[20px] 
          sm:leading-[22.06px] pl-3 sm:pl-4 pr-[80px] sm:pr-[90px] outline-none"
        />
        <a
          href="#"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white text-[12.5px] sm:text-[13.93px] font-main font-bold leading-[20px] sm:leading-[22.06px]"
        >
          Subscribe
        </a>
      </div>

      <div className="border-t border-black my-5 sm:my-6 w-full md:mt-10"></div>

      <h4 className="text-[18px] sm:text-[26px] md:text-[31px] leading-[34px] sm:leading-[42px] md:leading-[50px]  text-white mb-1 font-main font-normal">
        Become Our Brand Ambassador
      </h4>

      <p className="text-[12px] sm:text-[13.93px] leading-[20px] sm:leading-[22.06px] text-white  mb-5 font-main font-normal">
        Share Your Referral Code and Earn Rewards!
      </p>

      <button className="bg-white text-textColor text-[16px] sm:text-[18px] md:text-[20px] py-[10px] sm:py-[12px] px-[20px] sm:px-[24px] rounded-[6px] font-normal font-poppins">
        Get Your Referral Code Now
      </button>
    </div>
  </div>

  {/* 🔸 Social Icons */}
  <div className="flex justify-center gap-5 w-full  mt-10">
    <img src="/FooterAssests/Facebook.png" alt="fb" className="w-8 h-8" />
    <img src="/FooterAssests/Twitter.png" alt="x" className="w-8 h-8" />
    <img src="/FooterAssests/Instagram.png" alt="in" className="w-8 h-8" />
    <img src="/FooterAssests/Linkedin.png" alt="ig" className="w-8 h-8" />
    <img src="/FooterAssests/Youtube.png" alt="yt" className="w-8 h-8" />
  </div>

  {/* 🔸 Privacy / Terms */}
  <div className="flex justify-center w-full  gap-6 mt-6 text-[14px] text-gray-500 font-main font-normal text-center ">
    <a href="#" className="hover:underline">
      Privacy Policy
    </a>
    <a href="#" className="hover:underline">
      Terms & Conditions
    </a>
  </div>
</div>
       
      </div>
    </footer>
  );
};

export default Footer;






import React, { useState } from "react";
import HeadingSection from "../components/commons/headingSec";
import Form from "../components/commons/Form";
import BookingSection from "../components/commons/BookingSection";

const ContactPage: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);

  const handleFormSubmit = () => {
    setShowBooking(true);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 bg-white flex flex-col lg:flex-row items-start justify-between gap-18">
      {!showBooking && (
        <>
          {/* LEFT SIDE — Heading + Contact Info */}
          <div className="w-full lg:w-[45%] flex flex-col gap-25  text-left">
            <HeadingSection
              Heading="Contact us"
              Title="A project with OmnisolAI"
              Description="Dozens of US startups and SMEs are thriving on the sheer talent and dedication of our talented teams."
              align="left"
            />

            {/* CONTACT DETAILS (Visible only on desktop) */}
            <div className="hidden lg:flex flex-col gap-6 text-black opacity-60 text-[18px] font-medium font-main leading-[30px] tracking-[-0.018em]">
              <div className="flex items-center gap-3">
                <img
                  src="/public/FooterAssests/Email.png"
                  alt="mail"
                  className="w-5 h-5"
                />
                <p>info@omnisol.com</p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/public/FooterAssests/phone.png"
                  alt="phone"
                  className="w-5 h-5"
                />
                <p>+1 314 970 2115</p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/public/FooterAssests/Location.png"
                  alt="location"
                  className="w-5 h-5"
                />
                <p>2055 Craigshire Rd, Suite 410, St. Louis, MO 63146</p>
              </div>
            </div>

            {/* SOCIAL ICONS (Visible only on desktop) */}
            <div className="hidden lg:flex items-center gap-4 mt-2 opacity-60">
              <img
                src="/public/FooterAssests/Facebook.png"
                alt="Facebook"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src="/public/FooterAssests/Twitter.png"
                alt="Twitter"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src="/public/FooterAssests/Linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src="/public/FooterAssests/Instagram.png"
                alt="Instagram"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              />
              <img
                src="/public/FooterAssests/Youtube.png"
                alt="Instagram"
                className="w-7 h-7 cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>

          {/* RIGHT SIDE — Form + Mobile Contact Below */}
          <div className="w-full lg:w-[80%] -mt-35 sm:-mt-2 md:mt-0 ">
            <Form onSubmit={handleFormSubmit} />

            {/* MOBILE CONTACT DETAILS BELOW FORM */}
            <div className="flex flex-col lg:hidden  gap-4 text-black opacity-60 text-[18px] font-medium font-main -mt-4  ml-5 leading-[30px] tracking-[-0.018em]">
              <div className="flex items-center gap-3">
                <img
                  src="/public/FooterAssests/Email.png"
                  alt="mail"
                  className="w-5 h-5"
                />
                <p>info@omnisol.com</p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/public/FooterAssests/phone.png"
                  alt="phone"
                  className="w-5 h-5"
                />
                <p>+1 314 970 2115</p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/public/FooterAssests/Location.png"
                  alt="location"
                  className="w-5 h-5"
                />
                <p>2055 Craigshire Rd, Suite 410, St. Louis, MO 63146</p>
              </div>

              {/* MOBILE — SOCIAL ICONS */}
              <div className="flex items-center gap-4 mt-3   opacity-60">
                <img
                  src="/public/FooterAssests/Facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                <img
                  src="/public/FooterAssests/Twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                <img
                  src="/public/FooterAssests/Linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                <img
                  src="/public/FooterAssests/Instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
                 <img
                src="/public/FooterAssests/Youtube.png"
                alt="Instagram"
                className="w-7 h-7 cursor-pointer hover:opacity-80 transition"
              />
              </div>
            </div>
          </div>
        </>
      )}

      {/* BOOKING SECTION */}
      {showBooking && (
        <div className="w-full">
          <BookingSection />
        </div>
      )}
    </section>
  );
};

export default ContactPage;

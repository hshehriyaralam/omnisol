import React from "react";
import { useState } from "react";
import HeadingSection from "../components/common/headingSec";
import Form from "../components/common/Form";
import BookingSection  from "../components/common/BookingSection"

const ContactPage: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false);

  const handleFormSubmit = () => {
    setShowBooking(true);
  };
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-white flex flex-col lg:flex-row items-start justify-between gap-15">
      
     {!showBooking && (
        <>
      <div className="w-full lg:w-1/2 flex flex-col gap-15 text-left">
        <HeadingSection
          Heading="Contact us"
          Title="A project with OmnisolAI"
          Description="Dozens of US startups and SMEs are thriving on the sheer talent and dedication of our talented teams."
          align="left"
        />

        {/* CONTACT DETAILS */}
        <div className="flex flex-col gap-4 text-black opacity-60 text-[18px] font-medium font-main ml-4 sm:ml-6 md:ml-8 lg:ml-3  leading-[30px] tracking-[-0.018em] ">
          <div className="flex items-center gap-3">
            <img src="/public/FooterAssests/Email.png" alt="mail" className="w-5 h-5" />
            <p>info@omnisol.com</p>
          </div>                                    

          <div className="flex items-center gap-3">
            <img src="/public/FooterAssests/phone.png" alt="phone" className="w-5 h-5" />
            <p>+1 314 970 2115</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/public/FooterAssests/Location.png" alt="location" className="w-5 h-5" />
            <p>2055 Craigshire Rd, Suite 410, St. Louis, MO 63146</p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 mt-5 opacity-60 ml-4 sm:ml-6 md:ml-8 lg:ml-3">
          <img src="/public/FooterAssests/Facebook.png" alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <img src="/public/FooterAssests/Twitter.png" alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <img src="/public/FooterAssests/Linkedin.png" alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <img src="/public/FooterAssests/Instagram.png" alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
        </div>
      </div>

      {/* RIGHT SIDE — Form */}
      <div className="w-full lg:w-1/1">
        <Form onSubmit={handleFormSubmit}/>
      </div>
      </>
     )}

     {showBooking && (
        <div className="w-full">
          <BookingSection />
        </div>
      )}

    </section>
  );
};

export default ContactPage;
















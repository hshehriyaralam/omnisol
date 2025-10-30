import React from "react";
import GradientButton from "../../ui/Button/Button";
import { useState } from "react";

interface ContactFormProps {
  onSubmit: () => void;
}

const Form: React.FC<ContactFormProps> = ({onSubmit}) => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };




  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-formbg rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl  font-main font-medium text-black mb-8 text-[30.23px] leading-[86.89px] tracking-[-0.018em]">
          Get in touch
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">Full Name</label>
            <input
              name="name"
            value={formData.name}
            onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3"
            />
          </div>

          {/* Business Email */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">Business Email</label>
            <input
              name="email"
            value={formData.email}
            onChange={handleChange}
              type="email"
              placeholder="Business Email"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">Phone Number</label>
            <input
              name="phone"
            value={formData.phone}
            onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3"
            />
          </div>

          {/* Company Organization */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">
              Company Organization
            </label>
            <input
            name="company"
            value={formData.company}
            onChange={handleChange}
              type="text"
              placeholder="Company Organization"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3"
            />
          </div>

          {/* Website */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">Website</label>
            <input
              name="website"
            value={formData.website}
            onChange={handleChange}
              type="text"
              placeholder="Website"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3"
            />
          </div>

          {/* Company Organization (Duplicate) */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">
              Company Organization
            </label>
            <input
            name="company"
            value={formData.company}
            onChange={handleChange}   
              type="text"
              placeholder="Company Organization"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm text-formtext mb-2 font-Roboto  font-normal text-[16px] leading-[22px] tracking-[0em]">Message</label>
            <textarea
              name="message"
          value={formData.message}
          onChange={handleChange}
              rows={4}
              placeholder="Additional Notes"
              className="border border-foamborder font-Roboto  font-normal text-foamtext text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-4 py-3 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex ">
            <GradientButton
            type="submit"
              text="Book a meeting"
              fromColor="from-orange"
              toColor="to-orange-100"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;

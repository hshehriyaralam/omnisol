import React from "react";
import GradientButton from "../../../../ui/Button/Button"
import { Link } from "react-router-dom";

const JobDetails: React.FC = () => {
  return (
    <section className="w-full bg-lightbg  py-16 px-6 md:px-12 lg:px-40 mt-15 sm:mt-16 md:mt-24 lg:mt-30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-20">
        {/* ✅ LEFT COLUMN — JOB DETAILS */}
        <div className="flex-1 order-2 lg:order-1">
          <h1 className="font-main text-darktext font-bold text-[36px] leading-[100%] tracking-[0] mb-10 hidden md:block">
            PRODUCT DESIGNER
          </h1>

          {/* Who we’re looking for */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">
              Who Are We Looking For
            </h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Collaborate with product managers and engineers to define UX goals.</li>
              <li>Create wireframes, prototypes, and high-fidelity visuals.</li>
              <li>Design across desktop, web, and mobile platforms.</li>
              <li>Conduct user testing and implement feedback iteratively.</li>
              <li>Ensure brand consistency and maintain a design system.</li>
            </ul>
          </div>

          {/* What you'll be doing */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">
              What You Will Be Doing
            </h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Collaborate with product managers and engineers to define UX goals.</li>
              <li>Create wireframes, prototypes, and high-fidelity visuals.</li>
              <li>Design across desktop, web, and mobile platforms.</li>
              <li>Conduct user testing and implement feedback iteratively.</li>
              <li>Ensure brand consistency and maintain a design system.</li>
            </ul>
          </div>

          {/* Bonus points */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">
              Bonus Points for Familiarity with
            </h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Motion design and prototyping tools like After Effects or ProtoPie.</li>
              <li>Experience with usability testing and analytics tools.</li>
              <li>Experience with usability testing and analytics tools.</li>
              <li>Experience with usability testing and analytics tools.</li>
              <li>Understanding of front-end implementation (React, Tailwind).</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">
              Educational Requirement
            </h2>
            <p className="font-main font-normal text-darktext text-[16px] leading-[24px] tracking-[0]">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
            </p>
          </div>
          {/* Salary */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">Salary</h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Salary:  18,000 to 35,000 BDT (Depends on Skill and Experience)</li>
              <li>Salary Review: Yearly</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">Working Hours</h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>8 AM – 5 PM</li>
            </ul>
          </div>

          {/* Working hours */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">Working Days</h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Weekly: 5 days.</li>
              <li>Weekend: Friday.Saturday</li>
            </ul>
          </div>

          {/* Perks */}
          <div className="mb-8">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">
              Perks & Benefits You’ll Get
            </h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Annual team retreats and design conferences.</li>
              <li>Annual team retreats and design conferences.</li>
              <li>Annual team retreats and design conferences.</li>
              <li>Growth and training budget.</li>
            </ul>
          </div>

          <div className="w-full  sm:w-[90%] md:w-[95%] lg:w-[80%]  sm:ml-3 md:ml-4 lg:ml-6 xl:ml-8   max-w-[1100px] mx-auto absolute opacity-50 border border-black rotate-0 left-1/2 -translate-x-1/2"></div>


          {/* Application process */}
          <div className="mb-8 mt-18">
            <h2 className="font-main font-medium text-[22px] text-black leading-tight tracking-[-1.8%] sm:text-[30.23px] sm:leading-snug mb-4">
              The Application Process
            </h2>
            <ul className="list-disc ml-6 space-y-2 font-main font-normal text-darktext text-[16px] leading-[100%] tracking-[0]">
              <li>Submit your portfolio and resume.</li>
              <li>Initial interview with our design lead.</li>
              <li>Practical design challenge (optional).</li>
              <li>Final interview with leadership team.</li>
            </ul>
          </div>

          {/* Statement */}
          <div className="mb-10">
            <h2 className="font-main font-medium text-darktext text-[24px] leading-[100%] tracking-[0] mb-8">Our Statement</h2>
            <p className="font-main font-normal text-darktext text-[16px] leading-[24px] tracking-[0]">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
            </p>
          </div>
          <div className="hidden md:block">
          <Link to="/hiring/hiring1">
            {/* Apply button */}
            <GradientButton
              text="Apply Now"
              fromColor="from-orange"
              toColor="to-orange-100"
              width="200px"
              height="60px"
              textTranslate="85px"
              arrowTranslate="-115px"
              fontSize="15px"
              arrowSize="20px"
              arrowBgSize="47px"
            />
          </Link>
          </div>
          {/* responsive icon for mobile screen */}

          <div className="order-3 items-center lg:order-3 mt-8 w-full block lg:hidden">
            <p className="text-darktext text-[17px] font-main font-normal text-center leading-[24px] tracking-[0] mb-3">Share this:</p>
            <div className="flex items-center justify-center  gap-4 flex-wrap">
              <img src="/HiringPage/Facebook.png" alt="Facebook" className="w-10 h-10" />
              <img src="/HiringPage/Twiter.png" alt="Twitter" className="w-10 h-10" />
              <img src="/HiringPage/Linkedin.png" alt="LinkedIn" className="w-10 h-10" />
              <img src="/HiringPage/Instagram.png" alt="Instagram" className="w-10 h-10" />
            </div>
          </div>


        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <aside className="w-full lg:w-[360px]  shrink-0 order-1 lg:order-2">
          {/* Apply Button */}
          <div className="bg-bgmedium font-main">
            <div className="p-6 mb-8 text-center">
              <h1 className="font-main text-darktext font-bold text-left text-[17px] leading-[100%] tracking-[0] mb-10 block lg:hidden">
                PRODUCT DESIGNER
              </h1>
              <Link to="/hiring/hiring1">
              <GradientButton
                text="Apply Now"
                fromColor="from-orange"
                toColor="to-orange-100"
                width="200px"
                height="60px"
                textTranslate="85px"
                arrowTranslate="-115px"
                fontSize="15px"
                arrowSize="20px"
                arrowBgSize="47px"
              />
              </Link>
            </div>



            {/* Job Summary */}
            <div className="p-6  mb-8">
              <h3 className="text-[18px] leading-[24px] tracking-[0] font-main font-medium  mb-5 text-black">
                Job Summary
              </h3>

              <ul className="space-y-12 text-[15px] text-gray-700">
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Location.png" alt="location" className="w-6 h-8 mt-1 " />
                  <p className=" text-darktext text-[17px]  font-normal leading-[24px] tracking-[0] "><span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0] " >Location</span> <br /> Shouth Breeze Center, Banani 11</p>

                </li>
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Job.png" alt="job type" className="w-6 h-7 mt-1" />
                  <p className=" text-darktext text-[17px]  font-normal leading-[24px] tracking-[0] "> <span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0] ">Job Type</span> <br /> Full Time</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Date.png" alt="date posted" className="w-6 h-7 mt-1" />
                  <p className=" text-darktext text-[17px]  font-normal leading-[24px] tracking-[0]"> <span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0]">Date Posted</span> <br /> Posted 1 month ago</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Experience.png" alt="experience" className="w-6 h-7 mt-1" />
                  <p className=" text-darktext text-[17px]  font-normal leading-[24px] tracking-[0]"> <span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0]">Experience</span> <br />  Experience: 1–3 years</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Hours.png" alt="working hours" className="w-6 h-7 mt-1" />
                  <p className=" text-darktext text-[17px]  font-normal leading-[24px] tracking-[0]"> <span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0]">Working Hours</span> <br />  9 AM – 6 PM</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Working.png" alt="working days" className="w-6 h-7 mt-1" />
                  <p className="text-darktext text-[17px]  font-normal leading-[24px] tracking-[0]"> <span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0]">Working Days</span> <br />  Weekly: 5 days<br />Weekend: Saturday, Sunday</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/HiringPage/Vacancy.png" alt="vacancy" className="w-6 h-7 mt-1" />
                  <p className="text-darktext text-[17px]  font-normal leading-[24px] tracking-[0]"> <span className="text-bgborder text-[17px] font-main font-normal leading-[24px] tracking-[0]">Vacancy</span> <br />  No.of Vacancy:3</p>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-darktext fontdarktext font-medium text-[17px] leading-[24px] tracking-[0] underline decoration-solid decoration-[1px] decoration-offset-[0] text-inherit"
                >
                  View all jobs
                </a>
              </div>
            </div>
          </div>



          {/* Share section */}
          <div className="order-3 lg:order-3 mt-8 w-full hidden lg:block">
            <p className="text-darktext text-[17px] font-main font-normal leading-[24px] tracking-[0] mb-3">Share this:</p>
            <div className="flex items-center gap-4 flex-wrap">
              <img src="/HiringPage/Facebook.png" alt="Facebook" className="w-10 h-10" />
              <img src="/HiringPage/Twiter.png" alt="Twitter" className="w-10 h-10" />
              <img src="/HiringPage/Linkedin.png" alt="LinkedIn" className="w-10 h-10" />
              <img src="/HiringPage/Instagram.png" alt="Instagram" className="w-10 h-10" />
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default JobDetails;

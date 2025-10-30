import React from "react";
import Slider from "react-slick";
import AnimatedSection from "../../layouts/AnimatedSection";
import HeadingSection from "./headingSec";

const WhoWeAre: React.FC = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <section className="w-full px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row flex-wrap items-center">
            {/* Left Content Section */}
            <div className="w-full lg:w-3/5 mb-12 lg:mb-0">
              <AnimatedSection>
                <div className="mt-8 md:mt-20 w-full lg:w-[65%]">
                  <HeadingSection
                    Heading={"Who we are?"}
                    Title={"Forget the tech  Focus on the results we bring"}
                    Description={
                      "Since 2023, we've been helping businesses of all sizes design AI-powered software solutions tailored to their unique workflows."
                    }
                    align="left"
                  />
                </div>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 font-main mt-8">
                <div className="px-4 md:px-6 py-6 md:py-7 border-2 border-who-border rounded-2xl">
                  <h4 className="font-medium text-xl md:text-2xl mb-3">
                    Quick Prototyping & Deployment
                  </h4>
                  <p className="font-normal text-base md:text-lg opacity-70 text-black">
                    Average project turnaround: 4–6 weeks
                  </p>
                </div>
                <div className="px-4 md:px-6 py-6 md:py-7 border-2 border-who-border rounded-2xl">
                  <h4 className="font-medium text-xl md:text-2xl mb-3">
                    Leading AI Software Development Experts
                  </h4>
                  <p className="font-normal text-base md:text-lg opacity-70 text-black">
                    Delivered 200+ custom AI solutions, achieving an average ROI
                    of 300% within the first 3 months
                  </p>
                </div>
                <div className="px-4 md:px-6 py-6 md:py-7 shadow-[0_24px_184px_-10px_rgba(0,0,0,0.14)] rounded-2xl">
                  <h4 className="font-medium text-xl md:text-2xl mb-3">
                    AI-Powered Software Solutions
                  </h4>
                  <p className="font-normal text-base md:text-lg opacity-70 text-black">
                    Helping businesses streamline operations and enhance
                    decision-making with AI-driven applications
                  </p>
                </div>
                <div className="px-4 md:px-6 py-6 md:py-7 border-2 border-who-border rounded-2xl">
                  <h4 className="font-medium text-xl md:text-2xl mb-3">
                    Trusted by Industry Leaders
                  </h4>
                  <p className="font-normal text-base md:text-lg opacity-70 text-black">
                    Helping businesses streamline operations and enhance
                    decision-making with AI-driven applications
                  </p>
                </div>
              </div>
            </div>

            {/* Right Slider Section */}
            <div className="w-full lg:w-2/5 lg:pl-8">
              <div className="h-[400px] md:h-[500px] lg:h-[600px] relative">
                <Slider {...settings} className="vertical-slider h-full">
                  <div className="px-2 py-4">
                    <div className="flex justify-center">
                      <img
                        src="/tech_stats1.webp"
                        alt="Tech Stats 1"
                        className="w-full max-w-[300px] md:max-w-none h-auto"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <div className="flex justify-center">
                      <img
                        src="/tech_stats2.webp"
                        alt="Tech Stats 2"
                        className="w-full max-w-[300px] md:max-w-none h-auto"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <div className="flex justify-center">
                      <img
                        src="/tech_stats3.webp"
                        alt="Tech Stats 3"
                        className="w-full max-w-[300px] md:max-w-none h-auto"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <div className="flex justify-center">
                      <img
                        src="/tech_stats3.webp"
                        alt="Tech Stats 3"
                        className="w-full max-w-[300px] md:max-w-none h-auto"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-4">
                    <div className="flex justify-center">
                      <img
                        src="/tech_stats3.webp"
                        alt="Tech Stats 3"
                        className="w-full max-w-[300px] md:max-w-none h-auto"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;

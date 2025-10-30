import React from "react";
import { useNavigate } from "react-router-dom";
import GradientButton from "@/ui/Button/Button";


interface ErrorPage {
  GradientButton?: React.ReactNode;
}

const ErrorPage: React.FC<ErrorPage> = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      {/* Center Image */}
      <img
        src='/ErrorPageAssests/Error.webp'
        alt="404 Illustration"
        className="w-[320px] sm:w-[480px] md:w-[600px] lg:w-[500px] h-auto mb-6"
      />

      {/* Heading */}
      <h1
        className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[48.95px]
                   font-medium text-black leading-[42px] sm:leading-[50px] md:leading-[55px] lg:leading-[61.48px] tracking-[-0.018em] mb-4 font-main"
      >
        Error 404: Page not found!
      </h1>

      {/* Subtext */}
      <p
        className="text-[15px] sm:text-[18px] md:text-[17px] text-black leading-[27px]
                   tracking-[-0.018em] max-w-[90%] sm:max-w-[558px] mb-8 font-main font-normal"
      >
        Our lab experiment to find this page went a bit wrong. Nothing a little more caffeine can't fix.
      </p>


      <div onClick={() => navigate("/")} className="cursor-pointer">
        <GradientButton
          text="Back to Homepage"
          fromColor="from-orange"
          toColor="to-orange-100"
          width="263px"
          height="60px"
          textTranslate="70px"
          arrowTranslate="-180px"
          fontSize="16px"
          arrowSize="20px"
          arrowBgSize="48px"
        />
      </div>


    </section>
  );
};

export default ErrorPage;

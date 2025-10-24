import type ImageTextSectionProps from "../../types/Service";


export default function ImageTextSection({
  imageSrc,
  heading,
  description,
  reverse = false,
}: ImageTextSectionProps) {
  return (
    <section
      className={`w-[90%] mx-auto flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center md:gap-16  gap-6 `}
    >
      {/* 🖼️ Image Section */}
      <div className="w-[200px] sm:w-[300px] md:w-[380px] lg:w-[420px] h-[200px] sm:h-[300px] md:h-[380px] lg:h-[420px]">
        <img
          src={imageSrc}
          alt={heading}
          className="object-cover  w-full h-full "
        />
      </div>

      {/* 📝 Text Section */}
      <div className="max-w-[460px] text-center md:text-left flex flex-col gap-2 sm:gap-3">
        <h2 className="font-main font-medium text-[32px]  md:text-[42px] xl:text-[44px]  2xl:text-[48px]  leading-[32px]  md:leading-[50px] tracking-[-0.01em] text-black md:mt-20  mt-0  ">
          {heading}
        </h2>

        <p className="font-main font-medium   text-[14px] md:text-[20px]  xl:text-[22px]  2xl:text-[22px]  leading-[22px] md:leading-[30px]  tracking-[-0.015em] text-gray-500 max-w-[300px]  md:text-left  text-center   md:max-w-[450px] ">
          {description}
        </p>

        <button className="group mt-2 md:mt-3 w-fit self-center md:self-start cursor-pointer font-main font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] tracking-[-0.018em] text-ReadmoreText hover:text-[#EB8642] transition-all duration-300 flex items-center gap-2">
          Read More
          {/* <i className="fa-solid fa-paper-plane relative -top-2 right-2 text-[#CD6114] text-[12px] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125 group-hover:text-[#F07056] rotate-[10deg]"></i> */}
          <img
          className="relative -top-2 right-2 text-[#CD6114] text-[12px] transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125 group-hover:text-[#F07056] rotate-[0deg]"
          src="/Images/Services/AI-Development/arrow.png"
          width={25}
          alt="" />
        </button>
      </div>
    </section>
  );
}

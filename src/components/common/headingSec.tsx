import type HeadingsTypes from "../../types/Service"


export default function HeadingSection({
  Heading,
  Title,
  Description,
}: HeadingsTypes) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8  gap-2 ">
      {/* 🔹 Heading (Poppins Regular 20px) */}
      <div className="px-6 py-2 border border-badgeBorder rounded-full flex items-center justify-center">
        <h1 className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[100%] text-badgeText">
          {Heading}
        </h1>
      </div>

      {/* 🔸 Title (Gilroy-Medium 64px / 74px) */}
      <h2 className="font-main  font-medium text-[26px]  md:text-[48px]  leading-[110%] md:leading-[74px] tracking-[-0.01em] text-black  md:text-right text-center max-w-[900px]  ">
        {Title}
      </h2>

      {/* 🔸 Description (Gilroy-Medium 32px / 38px) */}
      <p className="font-main  font-normal  text-[16px] md:text-[22px]  tracking-[-0.018em] text-gray-700 text-center max-w-[750px]">
        {Description}
      </p>
    </div>
  );
}

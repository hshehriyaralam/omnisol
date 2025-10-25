import React from "react";
import type { GradientButtonProps } from "../../types/ButtonTypes";

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  fromColor = "from-[#FD741D]",
  toColor = "to-[#A72201]",
  className = "",
}) => {
  return (
    <button 
      className={`group relative flex items-center justify-between 
        bg-linear-to-b ${fromColor} ${toColor} 
        text-white px-6 py-4 md:px-3 md:py-5 rounded-full 
        w-[200px] md:w-[230px] h-[60px] md:h-[60px]
        overflow-hidden transition-all duration-500 ease-in-out
         hover:bg-black hover:from-black hover:to-black ${className}`}
    >
      {/* Text */}
      <span
        className="relative text-base md:text-lg md:px-5 font-poppins 
        transition-all duration-500 ease-in-out 
        group-hover:translate-x-[110px]"
      >
        {text}
      </span>

      {/* Icon */}
      <span
        className="relative w-10 h-10  md:w-[50px] md:h-[50px] 
        bg-white rounded-full flex items-center justify-center
        transition-all duration-500 ease-in-out 
        group-hover:-translate-x-40"
      >
       
        <img src="/Button/Icon.png" className="w-6 h-6" alt="" />
      </span>
    </button>
  );
};

export default GradientButton;

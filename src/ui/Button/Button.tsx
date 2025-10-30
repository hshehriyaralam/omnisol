import React from "react";
import type { GradientButtonProps } from "../../types/Button.types";
import { useRef, useEffect, useState } from "react";

const GradientButton: React.FC<GradientButtonProps> = ({
  type = "button",
  onClick,
  text,
  fromColor = "from-[#FD741D]",
  toColor = "to-[#A72201]",
  className = "",
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isLongText, setIsLongText] = useState(false);
  const [isShortText, setIsShortText] = useState(false);

  useEffect(() => {
    setIsShortText(text.length <= 5);
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth;
      setIsLongText(textWidth > 130);
    }
  }, [text]);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative flex items-center justify-center gap-4 md:gap-5
        bg-linear-to-b ${fromColor} ${toColor} 
        text-white px-6 py-4 md:px-3 md:py-5 rounded-full 
        min-w-[200px] md:min-w-[230px] h-[60px] md:h-[60px]
        whitespace-nowrap overflow-hidden 
        transition-all duration-500 ease-in-out
        hover:bg-black hover:from-black hover:to-black ${className}`}
      style={{
        width: isLongText ? "auto" : undefined,
        paddingRight: isLongText ? "24px" : undefined,
        paddingLeft: isLongText ? "24px" : undefined,
      }}
    >
      {/* Text */}
      <span
        ref={textRef}
        className={`relative text-base md:text-lg md:px-5 font-poppins 
        transition-all duration-500 ease-in-out
        ${!isLongText
            ? isShortText
              ? "group-hover:translate-x-[115px]"
              : "group-hover:translate-x-[105px]"
            : ""
          }`}
      >
        {text}
      </span>

      {/* Icon */}
      <span
        className={`relative w-10 h-10 md:w-[50px] md:h-[50px] 
        bg-white rounded-full flex items-center justify-center
        transition-all duration-500 ease-in-out
      ${!isLongText
            ? isShortText
              ? "group-hover:-translate-x-[140px]"
              : "group-hover:-translate-x-38"
            : ""
          }`}
      >
        <img src="/Button/Icon.png" className="w-6 h-6" alt="icon" />
      </span>
    </button>


  );
};

export default GradientButton;

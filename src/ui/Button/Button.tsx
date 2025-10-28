import React, { useRef, useEffect, useState } from "react";
import type { GradientButtonProps } from "../../types/Button.types";

const GradientButton: React.FC<GradientButtonProps> = ({
  type = "button",
  onClick,
  text,
  fromColor = "from-[#FD741D]",
  toColor = "to-[#A72201]",
  className = "",
  width = "200px",
  height = "60px",
  textMaxWidth = "130px",
  arrowSize = "40px",
  arrowBgSize = "50px",
  fontSize = "16px", 
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isLongText, setIsLongText] = useState(true);
  const [isShortText, setIsShortText] = useState(false);

  useEffect(() => {
    setIsShortText(text.length <= 5);
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth;
      setIsLongText(textWidth > parseInt(textMaxWidth));
    }
  }, [text, textMaxWidth]);

  const textHoverClass = isShortText
    ? "group-hover:translate-x-[80px]"
    : isLongText
    ? "group-hover:translate-x-[40px]" // smaller shift for long text
    : "group-hover:translate-x-[60px]";

  // const iconHoverClass = isShortText
  //   ? "group-hover:-translate-x-[90px]"
  //   : isLongText
  //   ? "group-hover:-translate-x-[50px]" // smaller opposite shift for long text
  //   : "group-hover:-translate-x-9";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative flex items-center justify-center gap-4
        bg-gradient-to-b ${fromColor} ${toColor}
        text-white rounded-full whitespace-nowrap overflow-hidden
        transition-all duration-500 ease-in-out
        hover:bg-black hover:from-black hover:to-black ${className}`}
      style={{
        width,
        height,
        minWidth: width,
        minHeight: height,
      }}
    >
      {/* Text */}
      <span
        ref={textRef}
        className={`relative font-poppins transition-all duration-500 ease-in-out ${textHoverClass}`}
        // ${isShortText
        //       ? "group-hover:translate-x-[80px]"
        //       : "group-hover:translate-x-[60px]"
        // }`}
        style={{
          maxWidth: textMaxWidth,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize, // 👈 font size handled dynamically
        }}
      >
        {text}
      </span>

      {/* Icon */}
      <span
        className={`relative flex items-center justify-center  bg-white rounded-full
          transition-all duration-500 ease-in-out
          ${isShortText
                ? "group-hover:-translate-x-[90px]"
                : "group-hover:-translate-x-26"
          }`}
        style={{
          width: arrowBgSize,
          height: arrowBgSize,
          minWidth: arrowBgSize,
          minHeight: arrowBgSize,
        }}
      >
        <img
          src="/Button/Icon.png"
          alt="icon"
          style={{
            width: arrowSize,
            height: arrowSize,
          }}
        />
      </span>
    </button>
  );
};

export default GradientButton;

import React, { useEffect, useState } from "react";
import type { GradientButtonProps } from "../../types/Button.types";
interface ExtendedGradientButtonProps extends GradientButtonProps {
  hideArrowOnMobile?: boolean;
  textTranslate?: string;
  arrowTranslate?: string;
}
const GradientButton: React.FC<ExtendedGradientButtonProps> = ({
  type = "button",
  onClick,
  text,
  fromColor = "from-[#FD741D]",
  toColor = "to-[#A72201]",
  className = "",
  width = "200px",
  height = "60px",
  fontSize = "16px",
  arrowSize = "40px",
  arrowBgSize = "50px",
  hideArrowOnMobile = false,
  textTranslate = "60px",
  arrowTranslate = "-90px",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const shouldAnimate = !(hideArrowOnMobile && isMobile);
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center gap-4
        bg-gradient-to-b ${fromColor} ${toColor}
        text-white rounded-full overflow-hidden
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
        className="relative font-poppins transition-transform duration-500 ease-in-out"
        style={{
          fontSize,
          whiteSpace: "nowrap",
          transform:
            hovered && shouldAnimate ? `translateX(${textTranslate})` : "translateX(0)",
        }}
      >
        {text}
      </span>
      {/* Arrow Circle + Icon */}
      {!hideArrowOnMobile || !isMobile ? (
        <span
          className="relative flex items-center justify-center bg-white rounded-full transition-transform duration-500 ease-in-out"
          style={{
            width: arrowBgSize,
            height: arrowBgSize,
            minWidth: arrowBgSize,
            minHeight: arrowBgSize,
            transform:
              hovered && shouldAnimate ? `translateX(${arrowTranslate})` : "translateX(0)",
          }}
        >
          <img
            src="/Button/Icon.png"
            alt="icon"
            style={{
              width: arrowSize,
              height: arrowSize,
              transition: "transform 0.5s ease-in-out",
              transform: hovered ? "translateX(-5px)" : "translateX(0)",
            }}
          />
        </span>
      ) : null}
    </button>
  );
};
export default GradientButton;






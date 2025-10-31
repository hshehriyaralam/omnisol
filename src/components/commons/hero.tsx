import { useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import type { HeroSectionProps } from "../../types/Service";
import GradientButton from "../../ui/Button/Button";
import bgImage from "/Images/heroBg.png";

const Hero = ({
  Heading,
  description,
  ButtonText,
  LeftHeading,
  LeftDesciption,
  cardDescOne,
  cardDescTwo,
  cardDescThree,
  ButtonWidth,
  ButtonHeight,
  arrowSize,
  arrowBgSize,
  ButtonTextSize,
  ButtonTextTransalate,
  ButtonarrowTranslate,
}: HeroSectionProps) => {
  const cardData = [cardDescOne, cardDescTwo, cardDescThree];

  const migrationCards = [
    {
      title: "Zero Downtime Migration",
      description: "Move without disrupting your operations.",
    },
    {
      title: "Data Cleansing & Transformation",
      description: "Eliminate duplicates, errors, and outdated records.",
    },
    {
      title: "Security & Compliance First",
      description:
        "End-to-end encryption and adherence to global data standards.",
    },
  ];

  const card = [
    { id: 1, image: "/Images/bottomline.webp" },
    { id: 2, image: "/Images/Cintas.webp" },
    { id: 3, image: "/Images/bottomline.webp" },
    { id: 4, image: "/Images/Cintas.webp" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
  console.log(ref);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const isAiPocRoute = location.pathname === "/services/aipoc";
  const isDataMigrationRoute =
    location.pathname === "/services/dataMigration" ||
    location.pathname === "/services/aiConsulting";

  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // 🟩 Ref for mouse-drag scroll container

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && inView) {
      controls.start("visible");
    }
  }, [inView, controls, isMobile]);

  // 🟩 Mouse Drag Scroll Logic (works on desktop + mobile dev view)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed multiplier
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const desktopLogos = ["Visa", "Spotify", "LinkedIn", "Zoom"];
  const mobileLogos = ["OpenAI", "Gemini", "Dialogflow", "botpress", "n8n"];

  return (
    <section
      className="relative md:-mt-52 -mt-38 w-full min-h-screen overflow-hidden bg-hero text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            window.innerWidth < 768
              ? `
          linear-gradient(
            to bottom,
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 10%, 
            rgba(0,0,0,0.5) 35%, 
            rgba(0,0,0,0.5) 65%, 
            rgba(0,0,0,0.9) 90%, 
            rgba(0,0,0,1) 100%
          ),
          linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.95) 100%)`
              : "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center gap-4 min-h-[70vh] md:mt-50 mt-40">
        <h1 className="font-main font-medium text-[26px] md:text-[42px] leading-[36px] md:leading-[52px] tracking-tight max-w-[300px] md:max-w-[800px]">
          {Heading}
        </h1>

        <p className="font-main font-medium text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] max-w-[300px] md:max-w-[600px]">
          {description}
        </p>

        <GradientButton
          text={ButtonText}
          width={ButtonWidth}
          height={ButtonHeight}
          arrowSize={arrowSize}
          arrowBgSize={arrowBgSize}
          fontSize={ButtonTextSize}
          textTranslate={ButtonTextTransalate}
          arrowTranslate={ButtonarrowTranslate}
          hideArrowOnMobile={false}
        />
      </div>

      {/* ---------- For /services/aiPoc Route ---------- */}
      {isAiPocRoute ? (
        <div className="relative z-20 container mx-auto pt-4 pb-8 md:pb-12">
          <p className="text-center font-poppins font-bold text-white mb-6 md:mb-8">
            Trusted By
          </p>
          <div className="w-[90%] flex items-center justify-center mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4">
              {card.map((card) => (
                <div
                  key={card.id}
                  className="w-[100%] sm:w-[200px] md:w-[230px] h-[80px] bg-[#D0D0D038] flex justify-center items-center rounded-xl transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className={`object-contain ${
                      card.image.includes("Cintas")
                        ? "w-[100px]"
                        : "w-[180px]"
                    } invert brightness-0`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // ---------- For All Other Routes ----------
        <div className="relative z-20 container mx-auto md:py-12 py-0 md:mt-0 -mt-10">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 px-4 sm:px-0">
            <div className="lg:w-1/2 text-left mx-2">
              <h2 className="font-poppins font-bold text-[18px] leading-[28px] mb-4">
                {LeftHeading}
              </h2>
              <p className="font-main font-medium text-[15px] md:text-[18px] leading-[26px] text-white md:max-w-[500px] 2xl:max-w-[540px] max-w-[300px]">
                {LeftDesciption}
              </p>
            </div>

            {/* 🟩 Added ref and cursor style for drag scroll */}
            <div
              ref={scrollContainerRef}
              className={`lg:w-1/2 flex ${
                isMobile
                  ? "flex-row overflow-x-auto space-x-4 scrollbar-hide cursor-grab"
                  : "flex-row gap-2"
              } justify-start items-center`}
            >
              {(isDataMigrationRoute ? migrationCards : cardData).map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-52 h-60 border border-white/40 bg-heroCardBg rounded-md backdrop-blur-md shadow-lg shadow-black/20 p-4 flex 
                    ${
                      isDataMigrationRoute
                        ? "flex-col justify-end items-start"
                        : index === 1
                        ? "items-end justify-end"
                        : "items-start justify-start"
                    }`}
                  >
                    {isDataMigrationRoute ? (
                      <div>
                        <h3 className="font-poppins font-semibold text-[16px] text-white mb-2 text-left">
                          {item.title}
                        </h3>
                        <p className="font-main text-[14px] leading-[22px] text-white text-left">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <p className="font-main font-medium text-[14px] leading-[22px] text-white text-center">
                        {item}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Black Strip Section */}
      <div className="relative z-30 w-full h-auto sm:h-20 bg-black flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-2 sm:py-0 gap-3 sm:gap-0">
        <div className="flex items-center my-8 md:mt-0 justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
          <img
            src="/Images/Hero/Avtars.webp"
            alt="Avatars"
            className="md:w-[80px] w-[120px] h-auto"
          />
          <p className="hidden md:flex text-white font-main text-[14px] sm:text-[16px] md:text-[18px] text-center sm:text-left">
            Getting benefits with AI
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap mb-10 md:mb-0 items-center justify-center md:gap-10 gap-6 w-full sm:w-auto">
          {isMobile ? (
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {mobileLogos.map((name, index) => (
                <div
                  key={name}
                  className={`${
                    index === mobileLogos.length - 1
                      ? "col-span-2 flex justify-center"
                      : ""
                  }`}
                >
                  <img
                    src={`/Images/Hero/${name}.webp`}
                    alt={name}
                    className={`w-[80px] sm:w-[100px] h-auto opacity-80 hover:opacity-100 transition-all ${
                      name !== "n8n" ? "sm:w-[80px] invert brightness-0" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          ) : (
            desktopLogos.map((name) => (
              <img
                key={name}
                src={`/Images/Hero/${name}.webp`}
                alt={name}
                className="w-[60px] sm:w-[100px] h-auto opacity-80 hover:opacity-100 transition-all"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

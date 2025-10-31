import { useEffect, useState } from "react";
import GradientButton from "../../ui/Button/Button"
import { motion, AnimatePresence, type Variants, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const mobileLogos = ["OpenAI", "Gemini", "Dialogflow", "botpress", "n8n"];
    const desktopLogos = ["Visa", "Spotify", "LinkedIn", "Zoom"];
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
    const [activeCard, setActiveCard] = useState(0);
    const controls = useAnimation();
    const cardData = ['AI-powered software development tailored to your business needs'
        , 'Prototype and deploy custom AI agents in weeks, not months',
        'Delivering intelligent, high-ROI solutions for scalable growth'];
    // :white_tick: Detect screen size dynamically
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // :white_tick: Framer motion animation variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: ["easeOut"] },
        },
        exit: {
            opacity: 0,
            x: -100,
            transition: { duration: 0.6, ease: ["easeIn"] },
        },
    };
    // :white_tick: Detect current route
    const location = useLocation();
    const isDataMigrationRoute = location.pathname === "/services/dataMigration" ||
        location.pathname === "/services/aiConsulting";
    // :white_tick: Data for /services/dataMigration route
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
    // :white_tick: Animate card switching
    useEffect(() => {
        if (isMobile && inView) {
            controls.start("visible");
            const interval = setInterval(() => {
                setActiveCard((prev) => (prev + 1) % cardData.length);
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [inView, controls, isMobile]);
    return (
        <section className="pt-10 relative z-10 overflow-hidden">
            <div className="w-[95%] mx-auto">
                <div className="font-main w-full md:w-[57%] mb-8 md:mb-12 text-center md:text-left">
                    <h1 className="font-medium text-[26px] leading-[34px] md:text-[42px] md:leading-[1.2] 2xl:text-[48px] tracking-[-0.01em] text-black mb-4">Experience Business Intelligence Like Never Before with Omnisol AI</h1>
                    <p className="text-[14px] md:text-base font-medium w-full md:w-[55%] mx-auto md:mx-0 mb-6 text-gray-700">Automate workflows in weeks, not quarters. Trusted by startups and Fortune 500s.</p>
                    {/* Primary CTA - visible on desktop, separate mobile button below */}
                    <div className="z-50 hidden md:inline-block">
                        <GradientButton
                            text="Let's Get Started "
                            width="250px"
                            height="50px"
                            arrowSize="20px"
                            arrowBgSize="35px"
                            fontSize="15px"
                            hideArrowOnMobile={true}
                            textTranslate="60px"
                            arrowTranslate="-160px"

                        />
                    </div>
                    {/* Mobile CTA */}
                    <div className="mt-4 md:hidden flex justify-center">
                        <GradientButton
                            text="Let's Get Started "
                            width="220px"
                            height="48px"
                            arrowSize="18px"
                            arrowBgSize="34px"
                            fontSize="14px"
                            hideArrowOnMobile={true}
                            textTranslate="40px"
                            arrowTranslate="-120px"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
                    {/* Stats */}
                    <div className="font-poppins w-full md:w-1/2 grid grid-cols-3 gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-2">25+</h3>
                            <p className="font-normal text-xs md:text-base text-gray-700">startups and Fortune 500</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-2">98%</h3>
                            <p className="font-normal text-xs md:text-base text-gray-700">startups and Fortune 500</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-2">32K</h3>
                            <p className="font-normal text-xs md:text-base text-gray-700">startups and Fortune 500</p>
                        </div>
                    </div>
                    <div
                        ref={ref}
                        className={`lg:w-1/2 flex ${isMobile ? "flex-col" : "flex-row"
                            } gap-4 justify-center lg:justify-start`}
                    >
                        {/* :white_tick: For Mobile with Animation */}
                        {isMobile ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={`w-60 h-50 border border-white/40 bg-[#9FE0FF]/20 rounded-md backdrop-blur-md shadow-lg shadow-black/20 p-4 flex flex-col justify-center mx-auto`}
                                >
                                    {isDataMigrationRoute ? (
                                        <div className="mt-auto text-left">
                                            <h3 className="font-poppins font-semibold text-[16px] text-white mb-2">
                                                {migrationCards[activeCard].title}
                                            </h3>
                                            <p className="font-main text-[14px] leading-[22px] text-white">
                                                {migrationCards[activeCard].description}
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="font-main font-medium text-[14px] leading-[22px] text-center text-black">
                                            {cardData[activeCard]}
                                        </p>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            (isDataMigrationRoute ? migrationCards : cardData).map(
                                (item: any, index: number) => (
                                    <div
                                        key={index}
                                        className={`w-60 h-50 bg-glass-bg/14 rounded-md backdrop-blur-md p-4 flex ${isDataMigrationRoute
                                            ? "flex-col justify-end items-start"
                                            : index === 1
                                                ? "items-end"
                                                : "items-start"
                                            } mx-auto`}
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
                                            <p className="font-main font-medium text-[14px] leading-[22px] text-black text-center">
                                                {item}
                                            </p>
                                        )}
                                    </div>
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
            {/* Bottom Black Strip Section */}
            <div className="relative z-30 w-full h-auto sm:h-20 bg-black flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-2 sm:py-0 gap-3 sm:gap-0">
                <div className="flex items-center mt-10 md:mt-0 justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
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
                        <div className="grid grid-cols-2 gap-4 justify-items-center">
                            {mobileLogos.map((name: string, index: number) => (
                                <div
                                    key={name}
                                    className={`${index === mobileLogos.length - 1
                                        ? "col-span-2 flex justify-center"
                                        : ""
                                        }`}
                                >
                                    <img
                                        src={`/Images/Hero/${name}.webp`}
                                        alt={name}
                                        className={`w-[80px] sm:w-[100px] h-auto opacity-80 hover:opacity-100 transition-all ${name !== "n8n" ? "sm:w-[80px]  invert brightness-0" : ""
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
            {/* Decorative blurs hidden on mobile to avoid overflow */}
            <div className="hidden md:block absolute top-[33%] right-28 z-[-1]">
                <img src="/blur_ball.png" alt="bg_bottom" className="w-40 h-40 rounded-full blur-sm" />
            </div>
            <div className="hidden md:block absolute -bottom-10 right-1/2 translate-x-1/2 z-[-1]">
                <img src="/blur_ball.png" alt="bg_bottom" className="w-40 h-40 rounded-full blur-sm" />
            </div>
            <div className="hidden md:block absolute bottom-0 right-8 z-[-1]">
                <img src="/blur_ball.png" alt="bg_bottom" className="w-40 h-40 rounded-full blur-sm" />
            </div>
        </section>
    )
}
export default HeroSection
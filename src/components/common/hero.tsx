import { Link } from "react-router-dom";
import type  {HeroSectionProps} from "../../types/Service";
import Avtars from "../../../public/Images/Hero/Avtars.webp"
import LinkedIn from "../../../public/Images/Hero/LinkedIn.webp"
import Visa from "../../../public/Images/Hero/Visa.webp"
import Zoom from "../../../public/Images/Hero/Zoom.webp"
import Spotify from "../../../public/Images/Hero/Spotify.webp"


const Hero = ({Heading,description,ButtonText,LeftHeading,LeftDesciption,cardDescOne,cardDescTwo,cardDescThree}:HeroSectionProps) => {
  const cardData = [
    cardDescOne,
    cardDescTwo,
    cardDescThree,
  ];

  return (
    <div className="relative w-full min-h-screen bg-hero text-white overflow-hidden">
      {/* Full-width black shadow (left & right side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 pointer-events-none z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 container   mx-auto px-4 py-16 flex flex-col items-center justify-center text-center gap-4 min-h-[70vh]">
        <h1 className="font-main font-medium text-[40px] md:text-[42px] leading-[52px] tracking-tight md:max-w-[900px]">
          {Heading}
        </h1>

        <p className="font-main font-medium text-[16px] leading-[24px] md:max-w-[600px]">
          {description}
        </p>

        <Link to="/contact" className="z-50">
          <button className="px-6 py-2 bg-gradient-to-r from-[#F07056] to-[#EB8642] rounded-full text-white font-[Poppins] text-[16px] hover:scale-105 transition-transform duration-300 shadow-md">
            {ButtonText}
          </button>
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="relative z-20 container mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Description */}
          <div className="lg:w-1/2">
            <h2 className="font-poppins font-bold text-2xl md:text-[18px] leading-[29px] mb-4">
              {LeftHeading}
            </h2>
            <p className="font-main font-medium text-[18px] leading-[30px] text-white md:max-w-[500px] 2xl:max-w-[540px] max-w-[400px]">
             {LeftDesciption}
            </p>
          </div>

          {/* Right Side - Cards */}
          <div className="lg:w-1/2 flex gap-4">
            {cardData.map((text, index) => (
              <div
                key={index}
                className={`w-68 h-60 border border-white/40 bg-heroCardBg rounded-md backdrop-blur-md shadow-lg shadow-black/20 p-4 flex ${
                  index === 1 ? "items-end" : "items-start"
                }`}
              >
                <p className="font-main font-medium text-[14px] leading-[22px] text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
   {/* Bottom Black Strip Section */}
<div className="relative z-30 w-full h-20 bg-black flex items-center justify-between px-8 md:px-16">
  {/* Left Section */}
  <div className="flex items-center gap-4">
    <img src={Avtars} alt="Avatars" className="w-[120px] h-auto" />
    <p className="text-white font-main text-[16px] md:text-[18px]">
      Getting benefits with AI
    </p>
  </div>

  {/* Right Section (Logos) */}
  <div className="flex items-center gap-6 md:gap-10  z-50">
    <img src={Visa} alt="Visa" className="w-[80px]   h-auto opacity-80 hover:opacity-100 transition-all" />
    <img src={Spotify} alt="Spotify" className="w-[100px] h-auto opacity-80 hover:opacity-100 transition-all" />
    <img src={LinkedIn} alt="LinkedIn" className="w-[100px] h-auto opacity-80 hover:opacity-100 transition-all" />
    <img src={Zoom} alt="Zoom" className="w-[100px] h-auto opacity-80 hover:opacity-100 transition-all" />
  </div>
</div>

    </div>
  );
};

export default Hero;

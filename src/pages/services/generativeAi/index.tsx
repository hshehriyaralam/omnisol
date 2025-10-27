import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import HeadingSection from "../../../components/commons/headingSec";
import ImageandTextSection from "../../../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/hero";
import AiServiceCards from "./_components/AiServiceCards";
import LackOfVisibility from "./_components/LackOfVisibility";

const GenerativeAi = () => {
  return (
    <>
      <Hero
        Heading={"Reimagine What Your Business Can Create with Generative AI"}
        description={"TFrom AI copilots to full-scale generative ecosystems, Omnisol helps you move from automation to true co-creation with AI."}
        ButtonText={"Build Your AI Agents"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDesciption={"Omnisol engineers AI agents that operate like digital teammates: fast, reliable, and fully aligned with your business goals."}
        cardDescOne={"Agents that make decisions, not just predictions"}
        cardDescTwo={"Plug-and-play integration with your systems"}
        cardDescThree={"Secure, monitored, and endlessly scalable"}
      />

     <div >
          <div className=" mt-8  md:mt-20   " >
            <HeadingSection
              Heading={"Powered by OmnisolAi"}
              Title={"Generative AI That Works Where It Matters"}
              Description={"Each solution is designed to deliver measurable business value — fast, scalable, and fully aligned with your operations."} />
          </div>
          <div className="w-[90%]   mx-auto  " >
          <AiServiceCards />
          </div>

          <LackOfVisibility/>
  
        {/* Images and text Sections */}
        <div className="flex flex-col gap-4  py-10 ">
          <ImageandTextSection
            imageSrc="/Images/Services/AI-Development/Fintech.webp"
            heading={"Fintech"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={false}
          />
          <ImageandTextSection
            imageSrc="/Images/Services/AI-Development/Healthcare.webp"
            heading={"Healthcare"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={true}
          />
          <ImageandTextSection
            imageSrc="/Images/Services/AI-Development/Retail.webp"
            heading={"Retail"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={false}
          />
          <ImageandTextSection
            imageSrc="/Images/Services/AI-Development/Manufacturing.webp"
            heading={"Manufacturing"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={true}
          />
        </div>

        {/*  Missing Your Industris*/}
        <MissingYourIndustry />
      </div>
            <LettingSection />
      <GradientSection />
    </>
  )
}

export default GenerativeAi;

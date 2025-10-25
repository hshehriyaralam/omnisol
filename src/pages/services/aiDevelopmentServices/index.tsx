import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import HeadingSection from "../../../components/common/headingSec";
import ImageandTextSection from "../../../components/common/ImageAndTextSection";
import finTechImage from "../../../../public/Images/Services/AI-Development/Fintech.webp"
import HealtCareImage from "../../../../public/Images/Services/AI-Development/Healthcare.webp"
import RetailImage from "../../../../public/Images/Services/AI-Development/Retail.webp"
import RetailManufacturing from "../../../../public/Images/Services/AI-Development/Manufacturing.webp"
import MissingYourIndustry from "../../../components/common/MissingYourIndustry";
import Hero from "../../../components/common/hero";
import AnimatedSection from "../../../layouts/AnimatedSection";

const AiDevelopmentServices = () => {
  return (
    <>
      <Hero
        Heading={"Build Intelligent, Automated Systems with Custom AI Development Services"}
        description={"Transform your business operations with AI that learns, adapts, and delivers measurable results — designed, developed, and deployed by Omnisol."}
        ButtonText={"Start Your AI Project"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDesciption={"Not the kind that just looks clever in a demo, but the kind that plugs into your business, understands your data, and scales with you. Whether it’s automating workflows, analyzing mountains of information, or powering decision systems — we turn complexity into clarity."}
        cardDescOne={"Custom AI Development aligned with your business goals"}
        cardDescTwo={"Integrates directly with your existing stack"}
        cardDescThree={"Learns and improves with every iteration"}
      />

      <div >
        <AnimatedSection>
          <div className=" mt-8  md:mt-20" >
            <HeadingSection
              Heading={"Industries"}
              Title={"Your industry, our intelligence."}
              Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} imageSrc={""} heading={""} description={""} />
          </div>
        </AnimatedSection>
        {/* Images and text Sections */}
        <div className="flex flex-col gap-4  py-10 ">
          <ImageandTextSection
            imageSrc={finTechImage}
            heading={"Fintech"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={false}
          />
          <ImageandTextSection
            imageSrc={HealtCareImage}
            heading={"Healthcare"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={true}
          />
          <ImageandTextSection
            imageSrc={RetailImage}
            heading={"Retail"}
            description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
            buttonText={"Read More"}
            reverse={false}
          />
          <ImageandTextSection
            imageSrc={RetailManufacturing}
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

export default AiDevelopmentServices;

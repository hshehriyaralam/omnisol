import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import HeadingSection from "../../../components/commons/headingSec";
import ImageandTextSection from "../../../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/hero";


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
          <div className=" mt-8  md:mt-20" >
            <HeadingSection
              Heading={"Industries"}
              Title={"Your industry, our intelligence."}
              Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} />
          </div>
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

export default AiDevelopmentServices;

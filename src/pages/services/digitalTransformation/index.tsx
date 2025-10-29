
import Hero from "../../../components/commons/hero";
import WhyAgentic from "../../../components/commons/WhyAgentic";
import HeadingSection from "../../../components/commons/headingSec";
import ImageandTextSection from "../../../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import AnimatedSection from "../../../layouts/AnimatedSection";
import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import GradientButton from "../../../ui/Button/Button";
// import StepsDecsriptions from "../../../components/commons/stepsDescriptions";
// import { motion } from "framer-motion";


const DigitalTransformation = () => {


  //  const stepsData = [
  //   { id: 1, step: "01", title: "Discovery & Planning", description:"We learn your business goals, define success metrics, and agree on what “good” looks like." },
  //   { id: 2, step: "02", title: "Use Case & Idea Validation", description: "Together, we pick the right AI use cases that offer the biggest impact and best chance of success." },
  //   { id: 3, step: "03", title: "Data Preparation", description: "We gather, clean, and prepare the data your AI needs to perform well." },
  //   { id: 4, step: "04", title: "Prototype Development (PoC)", description: "We create a small-scale version of your solution to test technical and business feasibility." },
  //    { id: 5, step: "05", title: "MVP Build-Out", description: "We expand the prototype into a functional product with a user interface and essential integrations." },
  //     { id: 6, step: "06", title: "Testing & Feedback", description: "Real users interact with the MVP, and we refine based on insights." },
  //      { id: 7, step: "07", title: "Scale & Launch", description: "Once proven, we scale your AI product for full deployment and long-term success." },
  // ];


  return (
    <>
      <Hero
        Heading={"Digital Transformation Consulting That Drives Real Change"}
        description={"Your business is ready to grow — we make technology work for it."}
        ButtonText={"Start Your Transformation"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDesciption={"Whether you’re shifting from spreadsheets, old CRMs, or outdated platforms, Omnisol ensures a seamless migration to your new AI-powered SaaS environment.We handle every step — from audit to migration to validation — so your data works smarter, not harder."}
        cardDescOne={"Assess your current digital maturity"}
        cardDescTwo={"Identify technology gaps and opportunities"}
        cardDescThree={"Design a roadmap to modernize workflows, data, and customer experiences."}
          ButtonWidth={"300px"}
        ButtonHeight={"60px"}
        arrowSize={"18px"}
        arrowBgSize={"38px"}
        ButtonTextSize={"15px"}
        ButtonTextTransalate={"60px"}
        ButtonarrowTranslate={"-210px"}
      />

    
    <WhyAgentic
        badgeText={"Yesss"}
        mainHeading={"Harness AI to Power Your Digital Evolution"}
        descriptionOne={"Move beyond upgrades — build intelligence into everything you do. Omnisol integrates AI into your core operations to automate, predict, and optimize performance at every level."}
        cards={[
          {
            title: "Adaption",
            description: "AI-driven process automation.",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
          {
            title: "Multi-Agent",
            description: "Predictive analytics for smarter decisions.",
            image: "/Images/Services/AIAgents/MultiAgent.webp",
          },
          {
            title: "Hybrid Teams",
            description: "Intelligent systems that scale with your business.",
            image: "/Images/Services/AIAgents/Adoption.webp",
          },
        ]}/>

         <GradientButton
            text="Start Your AI Prject"
            width="250px"
            height="60px"
            arrowSize="22px"
            arrowBgSize="42px"
            fontSize="16px"
              hideArrowOnMobile ={false}
            textTranslate = "60px"
            arrowTranslate = "-180px"
            className="mx-auto -mt-20"
          />

      {/* <div className="flex flex-col lg:flex-row justify-center mx-auto w-[90%] mt-20 p-4">
        <motion.div
  className="max-w-[450px] mx-auto lg:mx-0 mb-8 lg:mb-0"
  initial={{ opacity: 0, x: -100 }}    
  whileInView={{ opacity: 1, x: 0 }}   
  transition={{ duration: 0.4, ease: "easeOut" }}  
  viewport={{ once: false }}             
>
  <HeadingSection
    Heading="How We Work"
    Title="A Clear, Practical Approach to Building AI Solutions"
    Description="We move quickly — but thoughtfully. Our process is designed to reduce risk, align with your business goals, and deliver visible progress every step of the way."
    align="left"
  />
</motion.div>

  <StepsDecsriptions stepsData={stepsData} direction="right" />
</div> */}



 <div >
        <AnimatedSection>
          <div className=" mt-8  md:mt-20" >
            <HeadingSection
              Heading={"Industries"}
              Title={"Your industry, our intelligence."}
              Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} />
          </div>
        </AnimatedSection>
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

export default DigitalTransformation;

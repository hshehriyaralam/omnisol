import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import HeadingSection from "../../../components/commons/headingSec";
import ImageandTextSection from "../../../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/hero";
import LayoutCards from "../../../components/commons/layoutCards";
import Testimonials from "../../../components/Testimonials";
import Faqs from "../../../components/commons/Faqs";
import GradientButton from "../../../ui/Button/Button";


const DiscoveryWorkshop = () => {


const cardsData = [
  {
    id: 1,
    title: "Introductory Call",
    description: "We begin by understanding your goals, challenges, and team structure — setting clear expectations from day one."
  },
  {
    id: 2,
    title: "Stakeholder Interviews",
    description:
      "We speak with key decision-makers and end-users to refine requirements and uncover real needs.",
  customDiv: (
  <div className="w-full h-full flex  items-center  justify-end  relative  ">
   <img src="/Images/Services/workshop.webp"
   className="w-[350px]  h-[300px]   absolute  lg:-top-24  lg:left-15"
   alt="LogosSection" />
  </div>
),



  },
  {
    id: 3,
    title: "Event Storming",
    description:
      "Together, we map your business workflows, pinpoint opportunities, and outline how technology can simplify and scale them."
  },
  {
    id: 4,
    title: "Visual Prototype",
    description: "We create interactive design mockups so you can see your idea come to life before development begins."
  },
  {
    id: 5,
    title: "Final Presentation",
    description: "You get a complete package — the prototype, process insights, project plan, estimated costs, and timeline — ready for execution."
  },
];

  return (
     <>
          <Hero
            Heading={"Every Vision Needs a Roadmap"}
            description={"You bring the idea — we bring the technical clarity to make it real.Omnisol’s Discovery Workshop turns your concept into a structured, actionable plan for growth."}
            ButtonText={"Start Your Workshops"}
            LeftHeading={"Omnisol builds AI that actually works."}
            LeftDesciption={"Whether you’re shifting from spreadsheets, old CRMs, or outdated platforms, Omnisol ensures a seamless migration to your new AI-powered SaaS environment.We handle every step — from audit to migration to validation — so your data works smarter, not harder."}
            cardDescOne={"Assess your current digital maturity"}
            cardDescTwo={"Identify technology gaps and opportunities"}
            cardDescThree={"Design a roadmap to modernize workflows, data, and customer experiences."}
            ButtonWidth={"280px"}
            ButtonHeight={"60px"}
            arrowSize={"18px"}
            arrowBgSize={"38px"}
            ButtonTextSize={"15px"}
            ButtonTextTransalate={"60px"}
            ButtonarrowTranslate={"-180px"}
          />

          <div className="my-20" >
            <HeadingSection
                  Heading={"Yesss"}
                  Title={"How We Wrap It Up in 7 Business Days"}
                  Description={"Our Discovery Workshop is fast, focused, and designed to turn ideas into execution. Here’s how we take you from concept to clarity — all within a week."} 
                  
                  />
           <LayoutCards 
      cards={cardsData}
      shadowCards={[3]} 
      mobileHeading={"Every Vision Needs a Roadmap"}
    />

    <GradientButton
         text="Book Your Discovery Session"
            width="300px"
            height="55px"
            arrowSize="20px"
            arrowBgSize="38px"
            fontSize="14px"
            hideArrowOnMobile ={false}
            textTranslate = "60px"
            arrowTranslate = "-220px"
            className="mx-auto"
    />
    <Testimonials/>
       </div>
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
                 
                 <div className="w-[80%] mx-auto" >
                <Faqs />
                 </div>
          <GradientSection />
        </>
  )
}

export default DiscoveryWorkshop

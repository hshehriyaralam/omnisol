import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import HeadingSection from "../../../components/commons/headingSec";
import ImageandTextSection from "../../../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/hero";
import LayoutCards from "../../../components/commons/layoutCards";
import Testimonials from "../../../components/Testimonials";
import Faqs from "../../../components/commons/Faqs";


const AiConsulting = () => {


const cardsData = [
  {
    id: 1,
    title: "AI Readiness Assessment",
    description: "Understand where your business stands and what’s needed to adopt AI successfully."
  },
  {
    id: 2,
    title: "Opportunity Mapping",
    description:
      "Spot the AI use cases that deliver the biggest business impact.",
  customDiv: (
  <div className="w-full h-full flex justify-end  md:mt-14 2xl:mt-14   ">
   <img src="/Images/Services/LogosSection.webp"
   className="md:w-68  md:h-50 2xl:w-68  2xl:h-50  w-42  "
   alt="LogosSection" />
  </div>
),



  },
  {
    id: 3,
    title: "Strategy & Roadmap Design",
    description:
      "Create a clear, actionable path from idea to implementation."
  },
  {
    id: 4,
    title: "Risk & Compliance Guidance",
    description: "Ensure your AI initiatives are responsible, secure, and compliant."
  },
  {
    id: 5,
    title: "Executive Enablement",
    description: "Equip leaders with the insight to make confident AI decisions."
  },
];

  return (
     <>
          <Hero
            Heading={"Kickstart Your AI Journey with Expert Guidance"}
            description={"Before you invest, get clarity that saves time, money, and effort. Omnisol’s AI Advisory services help you evaluate readiness, uncover real opportunities, and create a roadmap that leads to results — not confusion."}
            ButtonText={"Migrate Smarter with Omnisol"}
            LeftHeading={"Omnisol builds AI that actually works."}
            LeftDesciption={"Whether you’re shifting from spreadsheets, old CRMs, or outdated platforms, Omnisol ensures a seamless migration to your new AI-powered SaaS environment.We handle every step — from audit to migration to validation — so your data works smarter, not harder."}
            cardDescOne={"Migration: Move without disrupting your operations."}
            cardDescTwo={"Eliminate duplicates, errors, and outdated records."}
            cardDescThree={"End-to-end encryption and adherence to global data standards."}
          />

          <div className="my-20" >
           <LayoutCards 
      cards={cardsData}
      shadowCards={[3]} 
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

export default AiConsulting

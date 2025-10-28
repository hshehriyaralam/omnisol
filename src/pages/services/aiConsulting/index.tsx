import LettingSection from "../../../components/commons/LettingSection"
import GradientSection from "../../../components/commons/GradientSection"
import HeadingSection from "../../../components/commons/headingSec";
import ImageandTextSection from "../../../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../../../components/commons/MissingYourIndustry";
import Hero from "../../../components/commons/hero";


const AiConsulting = () => {
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

export default AiConsulting

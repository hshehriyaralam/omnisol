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


const UserExperience = () => {


const cardsData = [
  {
    id: 1,
    title: "Experience Strategy & Research",
    description: "We dig into your users’ world — understanding behavior, intent, and goals to design with purpose."
  },
  {
    id: 2,
    title: "AI-Enhanced UI/UX Design",
    description:
      "From dashboards to mobile apps, we create adaptive, intelligent interfaces that stay ahead of your users’ needs.",
  customDiv: (
  <div className="">
   
  </div>
),



  },
  {
    id: 3,
    title: "Prototyping & Interaction Design",
    description:
      "Turn ideas into something you can see, touch, and test.We build interactive prototypes that bring your concept to life early."
  },
  {
    id: 4,
    title: "Design-to-Development Continuity",
    description: "We don’t hand off pixels — we ship polished, production-ready designs that translate seamlessly into code."
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
            Heading={"Design That Thinks, Learns, and Feels Human"}
            description={"We design interfaces that don’t just look good — they understand.Omnisol combines human intuition with AI precision to craft digital experiences that evolve with your users and deliver real impact."}
            ButtonText={"Book a Design Consultation"}
            LeftHeading={"Omnisol builds AI that actually works."}
            LeftDesciption={"We work as your technical arm — assessing infrastructure, scalability, and risk while defining the smartest path from concept to implementation.Our goal is simple: help you make informed, confident decisions that save time, reduce cost, and guarantee long-term success."}
            cardDescOne={"Assess your current digital maturity"}
            cardDescTwo={"Identify technology gaps and opportunities"}
            cardDescThree={"Design a roadmap to modernize workflows, data, and customer experiences."}
            ButtonWidth={"300px"}
            ButtonHeight={"60px"}
            arrowSize={"18px"}
            arrowBgSize={"38px"}
            ButtonTextSize={"15px"}
            ButtonTextTransalate={"60px"}
            ButtonarrowTranslate={"-220px"}
          />

          <div className="my-20" >
            <HeadingSection
                  Heading={"What You Gain"}
                  Title={"Design that Works Smarter, Not Harde"}
                  Description={"We believe great design is invisible — it works so naturally that users never have to think twice.With AI-driven insights, data-backed decision-making, and a touch of human empathy, we build products that connect logic with emotion."} 
                  
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

export default UserExperience

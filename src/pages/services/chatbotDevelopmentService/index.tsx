import Hero from "../../../components/common/hero";
import AnimatedSection from "../../../layouts/AnimatedSection";
import HeadingSection from "../../../components/common/headingSec";
import CardGroupSection from "../chatbotDevelopmentService/_components/CardGroupSection"
import GradientButton from "../../../ui/Button/Button";
import NumberSection from "./_components/NumberSection"

const ChatbotDevelopmentService = () => {
  return (
    <>
      <Hero
        Heading={"No Small Talk. Only Smart Talk."}
        description={" Our AI chatbots don’t just chat — they understand, act, and deliver. We design AI chatbots that go beyond scripted replies."}
        ButtonText={"Build Your AI Agents"}
        LeftHeading={"Omnisol builds AI that actually works."}
        LeftDesciption={"Omnisol engineers AI agents that operate like digital teammates: fast, reliable, and fully aligned with your business goals."}
        cardDescOne={"Agents that make decisions, not just predictions"}
        cardDescTwo={"Plug-and-play integration with your systems"}
        cardDescThree={"Secure, monitored, and endlessly scalable"}
      />

      <AnimatedSection>
        <div className=" mt-8  md:mt-20" >
          <HeadingSection
            Heading={"Solutions"}
            Title={"Chatbot Solutions"}
            Description={"Every chatbot we build is trained to think, learn, and solve — not just reply. Whether it’s serving customers or powering internal ops, these systems are engineered to make conversations productive and outcomes measurable."} />
        </div>
      </AnimatedSection>

      <CardGroupSection />
      {/* <GradientButton
        text="Contact"
        //  className= "w-[200px] h-[60px]"
        fromColor="from-orange"
        toColor="to-orange-100"
      /> */}



      <AnimatedSection>
        <div className=" mt-8  md:mt-20" >
          <HeadingSection
            Heading={"Powered by OmnisolAi"}
            Title={"At Omnisol, we believe conversations are data — and data is opportunity."}
            Description={"We fine-tune every model on your domain, brand tone, and workflows — so it doesn’t just talk like you, it thinks like your business."}  />
        </div>
      </AnimatedSection>


      <NumberSection />

      <AnimatedSection>
        <div className=" mt-8  md:mt-20 md:ml-15 "  >
          <HeadingSection
            Heading={"Tools"}
            Title={"Technologies & tools we use for AI chatbot development"}
            Description={"We use advanced tools and frameworks in our AI chatbot development services to build fast, intelligent, and scalable conversational experiences. Here are the tools we put to work:"}
            align="left"
            button={<GradientButton
              text="Contact"
              //  className= "w-[200px] h-[60px]"
              fromColor="from-orange"
              toColor="to-orange-100"
            />}
            imageSrc="/Images/Services/Chat-Development-Services/LogoGroup.png"
          />
        </div>
      </AnimatedSection>






    </>
  )
}

export default ChatbotDevelopmentService;
import Faqs from "@/components/commons/Faqs"
import GradientSection from "@/components/commons/GradientSection"
import MissingYourIndustry from "@/components/commons/MissingYourIndustry"
import WavesBgSection from "@/components/commons/WavesBgSection"
import Testimonials from "@/components/Testimonials"
import HeroSection from "./LandingComponents/herosection"
import SEO from "@/components/commons/SEO"
import HeadingSection from "@/components/commons/headingSec"





const Careers = () => {
  return (
   <>
<SEO
  title="Careers at Omnisol AI | Build the Future With Us"
  description="Explore careers at Omnisol AI and join a team building practical AI products, thoughtful user experiences, and software for modern businesses."
  canonical="https://omnisol-jet.vercel.app/careers"
/>
     <HeroSection />
      <HeadingSection
        Heading={"Careers"}
        Title={"Let’s build OmnisolAI more better, together"}
        Description={"Join us in helping people create richer and more productive relationships."}
    />
      <MissingYourIndustry />
      <WavesBgSection/>
      <Testimonials />
      <Faqs />
      <GradientSection />
   </>
  )
}

export default Careers

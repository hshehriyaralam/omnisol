import Faqs from "@/components/commons/Faqs"
import GradientSection from "@/components/commons/GradientSection"
import MissingYourIndustry from "@/components/commons/MissingYourIndustry"
import WavesBgSection from "@/components/commons/WavesBgSection"
import Testimonials from "@/components/Testimonials"
import HeroSection from "./LandingComponents/herosection"
import SEO from "@/components/commons/SEO"





const About = () => {
  return (
   <>
 <SEO
  title="About Omnisol AI - AI & Business Intelligence"
  description="Discover Omnisol AI's approach to building useful, responsible software that connects business goals with data, automation, and intelligent systems."
  canonical="https://omnisol-jet.vercel.app/about"
/>
    <HeroSection />
      <MissingYourIndustry />
      <WavesBgSection/>
      <Testimonials />
      <Faqs />
      <GradientSection />
   </>
  )
}

export default About

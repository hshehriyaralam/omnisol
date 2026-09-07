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
  description="Learn about Omnisol AI, a leading provider of AI and business intelligence solutions that empower businesses to make smarter, data-driven decisions."
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

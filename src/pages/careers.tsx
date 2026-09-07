import Faqs from "@/components/commons/Faqs"
import GradientSection from "@/components/commons/GradientSection"
import MissingYourIndustry from "@/components/commons/MissingYourIndustry"
import WavesBgSection from "@/components/commons/WavesBgSection"
import Testimonials from "@/components/Testimonials"
import HeroSection from "./LandingComponents/herosection"
import SEO from "@/components/commons/SEO"





const Careers = () => {
  return (
   <>
 <SEO
  title="Careers at Omnisol AI"
  description="Explore career opportunities at Omnisol AI and join our team building innovative AI and technology solutions."
  canonical="https://omnisol-jet.vercel.app/careers"
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

export default Careers

import Faqs from "@/components/commons/Faqs"
import GradientSection from "@/components/commons/GradientSection"
import MissingYourIndustry from "@/components/commons/MissingYourIndustry"
import WavesBgSection from "@/components/commons/WavesBgSection"
import Testimonials from "@/components/Testimonials"
import HeroSection from "./LandingComponents/herosection"
import SEO from "@/components/commons/SEO"





const Blog = () => {
  return (
   <>
   <SEO
  title="Omnisol AI Blog - AI & Business Intelligence Insights"
  description="Read Omnisol AI perspectives on artificial intelligence, business strategy, automation, and the technologies helping teams work smarter."
  canonical="https://omnisol-jet.vercel.app/blog"
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

export default Blog

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
  description="Explore AI, business intelligence, technology, and smarter business strategies through the latest insights from Omnisol AI."
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

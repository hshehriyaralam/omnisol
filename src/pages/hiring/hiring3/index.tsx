import HeadingSection from "@/components/commons/headingSec";
import OpenPositions from "./_components/OpenPositionSection"
import SEO from "@/components/commons/SEO";
import MissingYourIndustry from "@/components/commons/MissingYourIndustry";
import Testimonials from "@/components/Testimonials";
import WavesBgSection from "@/components/commons/WavesBgSection";
import Faqs from "@/components/commons/Faqs";
import GradientSection from "@/components/commons/GradientSection";

const Hiring3 = () => {
    return (
        <>
        <SEO
  title="Hiring at Omnisol AI"
  description="Explore career and hiring opportunities at Omnisol AI."
  canonical="https://omnisol-jet.vercel.app/hiring/hiring3"
/>
            <HeadingSection
                Heading={"Careers"}
                Title={"Let’s build OmnisolAI more better, together"}
                Description={"Join us in helping people create richer and more productive relationships."}
                h1={true}
            />
            <OpenPositions />
                  <MissingYourIndustry />
      <WavesBgSection/>
      <Testimonials />
      <Faqs />
      <GradientSection />
        </>
    )
}

export default Hiring3;
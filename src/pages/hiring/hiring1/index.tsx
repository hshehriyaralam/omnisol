import SEO from "@/components/commons/SEO";
import HeadingSection from "../../../components/commons/headingSec";
import LongForm from "./_components/LongForm";
import UploadResume from "./_components/UploadResumeSection"
import MissingYourIndustry from "@/components/commons/MissingYourIndustry";
import WavesBgSection from "@/components/commons/WavesBgSection";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/commons/Faqs";
import GradientSection from "@/components/commons/GradientSection";

const Hiring1 = () => {
    return (
        <>        
        <SEO
  title="Hiring at Omnisol AI"
  description="Explore career and hiring opportunities at Omnisol AI."
  canonical="https://omnisol-jet.vercel.app/hiring/hiring1"
/>
        <HeadingSection
            Heading={"Open Positions"}
            Title={"PRODUCT DESIGNER"}
            h1={true}
         />
        <div className="w-full h-auto object-cover">
            <img src="/public/HiringPage/MainPic.png" alt="MainPic" />
        </div>
        <UploadResume />
        <LongForm />


              <MissingYourIndustry />
      <WavesBgSection/>
      <Testimonials />
      <Faqs />
      <GradientSection />
        </>
    )
}

export default Hiring1;
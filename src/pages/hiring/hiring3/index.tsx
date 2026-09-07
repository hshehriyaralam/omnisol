import HeadingSection from "@/components/commons/headingSec";
import OpenPositions from "./_components/OpenPositionSection";
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
        title="Careers at Omnisol AI | Join Our Growing Team"
        description="Explore career opportunities at Omnisol AI and join our innovative team. We are looking for talented individuals passionate about AI and technology to help shape the future of AI-driven solutions. Apply now to be part of our dynamic work environment."
        canonical="https://omnisol-jet.vercel.app/hiring/hiring3"
      />
      <HeadingSection
        Heading={"Careers"}
        Title={"Let’s build OmnisolAI more better, together"}
        Description={
          "Join us in helping people create richer and more productive relationships."
        }
        h1={true}
      />
      <OpenPositions />
      <MissingYourIndustry />
      <WavesBgSection />
      <Testimonials />
      <Faqs />
      <GradientSection />
    </>
  );
};

export default Hiring3;

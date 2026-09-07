import SEO from "@/components/commons/SEO";
import HeadingSection from "../../../components/commons/headingSec";
import JobDetails from "./_components/JobDetails";

const Hiring2 = () => {
  return (
    <>
<SEO
  title="Product Designer Jobs | Omnisol AI Careers"
  description="Omnisol AI is hiring Product Designers to join our innovative team. We are looking for creative individuals passionate about designing user-centric AI solutions. Explore our career opportunities and be part of shaping the future of AI-driven products."
  canonical="https://omnisol-jet.vercel.app/hiring/hiring2"
/>
             <HeadingSection
                Heading={"Open Positions"}
                Title={"PRODUCT DESIGNER"}
             />
            <div className="w-full h-auto object-cover">
                <img src="/public/HiringPage/HeroPic.png" alt="HeroPic" />
            </div>

            <JobDetails />
    </>
  )
}

export default Hiring2;
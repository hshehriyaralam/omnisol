import SEO from "@/components/commons/SEO";
import HeadingSection from "../../../components/commons/headingSec";
import JobDetails from "./_components/JobDetails";

const Hiring2 = () => {
  return (
    <>
    <SEO
  title="Hiring at Omnisol AI"
  description="Explore career and hiring opportunities at Omnisol AI."
  canonical="https://omnisol-jet.vercel.app/hiring/hiring2"
/>
             <HeadingSection
                Heading={"Open Positions"}
                Title={"PRODUCT DESIGNER"}
                h1={false}
             />
            <div className="w-full h-auto object-cover">
                <img src="/public/HiringPage/HeroPic.png" alt="HeroPic" />
            </div>

            <JobDetails />
    </>
  )
}

export default Hiring2;
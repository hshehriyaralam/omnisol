import SEO from "@/components/commons/SEO";
import HeadingSection from "../../../components/commons/headingSec";
import JobDetails from "./_components/JobDetails";

const Hiring2 = () => {
  return (
    <>
<SEO
  title="Product Designer Jobs | Omnisol AI Careers"
  description="Review the Product Designer role at Omnisol AI, including the position details and opportunity to design user-centered AI solutions with our team."
  canonical="https://omnisol-jet.vercel.app/hiring/hiring2"
/>
             <HeadingSection
                Heading={"Open Positions"}
                Title={"PRODUCT DESIGNER"}
                h1={true}
             />
            <div className="w-full h-auto object-cover">
                <img src="/public/HiringPage/HeroPic.png" alt="HeroPic" />
            </div>

            <JobDetails />
    </>
  )
}

export default Hiring2;
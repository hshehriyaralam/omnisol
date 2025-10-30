import HeadingSection from "../../../components/commons/headingSec";
import JobDetails from "./_components/JobDetails";

const Hiring2 = () => {
  return (
    <>
             <HeadingSection
                Heading={"Open Positions"}
                Title={"PRODUCT DESIGNER"}
             />
            <div className="w-full h-auto object-cover">
                <img src="/public/HiringPage/HeroPic.png" alt="" />
            </div>

            <JobDetails />
    </>
  )
}

export default Hiring2;
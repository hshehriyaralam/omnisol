import HeadingSection from "../../../components/common/headingSec";
import LongForm from "./_components/LongForm";
import UploadResume from "./_components/UploadResumeSection"

const Hiring1 = () => {
    return (
        <>        
        <HeadingSection
            Heading={"Open Positions"}
            Title={"PRODUCT DESIGNER"}
         />
        <div className="w-full h-auto object-cover">
            <img src="/public/HiringPage/MainPic.png" alt="" />
        </div>
        <UploadResume />
        <LongForm />
        </>
    )
}

export default Hiring1;
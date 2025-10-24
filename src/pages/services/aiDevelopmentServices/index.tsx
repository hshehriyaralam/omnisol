import HeadingSection from "../../../components/common/headingSec";
import ImageandTextSection from "../../../components/common/ImageAndTextSection";
import finTechImage from "../../../../public/Images/Services/AI-Development/Fintech.webp"
import HealtCareImage from "../../../../public/Images/Services/AI-Development/Healthcare.webp"
import RetailImage from "../../../../public/Images/Services/AI-Development/Retail.webp"
import RetailManufacturing from "../../../../public/Images/Services/AI-Development/Manufacturing.webp"
import MissingYourIndustry from "../../../components/common/MissingYourIndustry";


const AiDevelopmentServices = () => {
  return (
    <div >
      <HeadingSection 
        Heading={"Industries"}
        Title={"Your industry, our intelligence."}
        Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} imageSrc={""} heading={""} description={""}      />


        {/* Images and text Sections */}
      <div className="flex flex-col gap-4  py-10 ">
      <ImageandTextSection
        imageSrc={finTechImage}
        heading={"Fintech"}
        description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
        buttonText={"Read More"}
        reverse={false} Heading={""} Title={""} Description={""}      
      />
       <ImageandTextSection
        imageSrc={HealtCareImage}
        heading={"Healthcare"}
        description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
        buttonText={"Read More"}
        reverse={true} Heading={""} Title={""} Description={""}      
      />
       <ImageandTextSection
        imageSrc={RetailImage}
        heading={"Retail"}
        description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
        buttonText={"Read More"}
        reverse={false} Heading={""} Title={""} Description={""}      
      />
       <ImageandTextSection
        imageSrc={RetailManufacturing}
        heading={"Manufacturing"}
        description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
        buttonText={"Read More"}
        reverse={true} Heading={""} Title={""} Description={""}      
      />
            </div>

            {/*  Missing Your Industris*/}
            <MissingYourIndustry />
    </div>
  )
}

export default AiDevelopmentServices;

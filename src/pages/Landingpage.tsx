import HeadingSection from "../components/common/headingSec"
import Hero from "../components/common/hero"
import AnimatedSection from "../layouts/AnimatedSection"
import ImageandTextSection from "../components/common/ImageAndTextSection";
import MissingYourIndustry from "../components/common/MissingYourIndustry";
import GradientSection from "../components/commons/GradientSection";
import Faqs from "../components/common/Faqs";
import Testimonials from "../components/Testimonials";
import LettingSection from "../components/commons/LettingSection";

const Landingpage = () => {
    return (
        <>
            <Hero
                Heading={"Build Intelligent, Automated Systems with Custom AI Development Services"}
                description={"Transform your business operations with AI that learns, adapts, and delivers measurable results — designed, developed, and deployed by Omnisol."}
                ButtonText={"Start Your AI Project"}
                LeftHeading={"Omnisol builds AI that actually works."}
                LeftDesciption={"Not the kind that just looks clever in a demo, but the kind that plugs into your business, understands your data, and scales with you. Whether it’s automating workflows, analyzing mountains of information, or powering decision systems — we turn complexity into clarity."}
                cardDescOne={"Custom AI Development aligned with your business goals"}
                cardDescTwo={"Integrates directly with your existing stack"}
                cardDescThree={"Learns and improves with every iteration"}

            />
            <section>
                <AnimatedSection>
                    <div className=" mt-8  md:mt-20" >
                        <HeadingSection
                            Heading={"Dedicated Development"}
                            Title={"Engagement Models That Fit Your Vision"}
                        />
                    </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-16 px-4 md:px-0">
                    <div>
                        <h3>Dedicated Development</h3>
                        <p>Tailored engagement models to suit your project needs.</p>
                    </div>
                    <div><h3>
                        Flexible Collaboration
                    </h3>
                    </div>
                    <div></div>
                </div>
            </section>


            <AnimatedSection>
                <div className=" mt-8  md:mt-20" >
                    <HeadingSection
                        Heading={"Industries"}
                        Title={"Your industry, our intelligence."}
                        Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} imageSrc={""} heading={""} description={""} />
                </div>
            </AnimatedSection>
            {/* Images and text Sections */}
            <div className="flex flex-col gap-4  py-10 ">
                <ImageandTextSection
                    imageSrc='Images/Services/AI-Development/Fintech.webp'
                    heading={"Fintech"}
                    description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
                    buttonText={"Read More"}
                    reverse={false}
                />
                <ImageandTextSection
                    imageSrc='Images/Services/AI-Development/Healthcare.webp'
                    heading={"Healthcare"}
                    description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
                    buttonText={"Read More"}
                    reverse={true}
                />
                <ImageandTextSection
                    imageSrc="Images/Services/AI-Development/Retail.webp"
                    heading={"Retail"}
                    description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
                    buttonText={"Read More"}
                    reverse={false}
                />
                <ImageandTextSection
                    imageSrc="Images/Services/AI-Development/Manufacturing.jpg"
                    heading={"Manufacturing"}
                    description={"Omnisol AI delivers cutting-edge AI agents for fintech, optimizing risk assessment, fraud detection, and algorithmic trading for superior financial outcomes."}
                    buttonText={"Read More"}
                    reverse={true}
                />
            </div>
            {/*  Missing Your Industris*/}
            <MissingYourIndustry />
            <LettingSection />
            <Testimonials />
            <Faqs />
            <GradientSection />
        </>
    )
}

export default Landingpage

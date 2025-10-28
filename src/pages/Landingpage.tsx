import HeadingSection from "../components/commons/headingSec"
import Hero from "../components/commons/hero"
import AnimatedSection from "../layouts/AnimatedSection"
import ImageandTextSection from "../components/commons/ImageAndTextSection";
import MissingYourIndustry from "../components/commons/MissingYourIndustry";
import GradientSection from "../components/commons/GradientSection";
import Faqs from "../components/commons/Faqs";
import Testimonials from "../components/Testimonials";
// import LettingSection from "../components/commons/LettingSection";
import GradientButton from "../ui/Button/Button";
import WhoWeAre from "../components/commons/WhoWeAre";
import DynamicBgSection from "../components/commons/DynamicBgSection";

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

            {/* Who We Are Section */}
            <WhoWeAre />

            <section className="w-[95%] mx-auto">
                <AnimatedSection>
                    <div className=" mt-8  md:mt-20" >
                        <HeadingSection
                            Heading={"Dedicated Development"}
                            Title={"Engagement Models That Fit Your Vision"}
                        />
                    </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-16 px-4 md:px-0 font-main">
                    <div className="bg-[url('/engage_1.png')] text-white bg-no-repeat bg-cover bg-scroll bg-top-right p-6 rounded-2xl rounded-tr-[110px]">
                        <h3 className="mb-3 text-2xl font-medium">Project-Based Delivery</h3>
                        <p className="mb-10">Best for defined goals and fixed timelines.</p>
                        <div className="flex flex-col gap-y-4 mb-10">
                            <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                                <p>Ideal when you have a clear scope and outcome in mind</p>
                            </div>
                            <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                                <p>We plan, build, and deliver end-to-end</p>
                            </div>
                            <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                                <p>Predictable costs, measurable results</p>
                            </div>
                        </div>
                        <GradientButton
                            text="Lets discuss your project"
                            // className="z-50  h-[50px] md:h-[60px] w-[120px] md:w-[150px] text-[14px] md:text-[16px]"
                            width="w-75"
                        />
                    </div>
                    <div className="bg-[url('/engage_2.png')] text-white bg-no-repeat bg-cover bg-scroll bg-top-right p-6 rounded-2xl rounded-tr-[110px]">
                        <h3 className="mb-3 text-2xl font-medium">Dedicated Team</h3>
                        <p className="mb-10">Perfect for long-term collaboration and flexibility.</p>
                        <div className="flex flex-col gap-y-4 mb-10">
                            <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                                <p>Ideal when you have a clear scope and outcome in mind</p>
                            </div>
                            <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                                <p>We plan, build, and deliver end-to-end</p>
                            </div>
                            <div className="p-3 rounded-xl backdrop-blur-sm bg-engage/15">
                                <p>Predictable costs, measurable results</p>
                            </div>
                        </div>
                        <GradientButton
                            text="Lets discuss your project"
                            width="w-75"
                        // className=" z-50  h-[50px] md:h-[60px] w-[120px] md:w-[150px] text-[14px] md:text-[16px]"

                        />
                        
                    </div>
                    <div>
                    </div>
                </div>
                <div className="font-main text-black w-[65%] mx-auto text-center mt-20">
                    <h4 className="font-semibold text-4xl leading-[1.7]">Our flexible team <span className=""><img className='inline h-10' src='/Images/Hero/Avtars.webp' alt="" /></span>             has a wide range of skills, which lets us look at projects from a complete point of view that combines creativity <span><img className='inline h-10' src="/sunset.png" alt="" /></span> and usefulness <span><img className='inline h-10' src="/ai.png" alt="" /></span>        .</h4>
                </div>
            </section>



            <AnimatedSection>
                <div className=" mt-8  md:mt-20" >
                    <HeadingSection
                        Heading={"Industries"}
                        Title={"Your industry, our intelligence."}
                        Description={" Omnisol AI development adapts to the rhythm of your business — whether that’s predicting demand, automating logistics, or personalizing customer experiences."} />
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
            {/* <LettingSection /> */}
            <DynamicBgSection />
            <Testimonials />
            <Faqs />
            <GradientSection />
        </>
    )
}

export default Landingpage

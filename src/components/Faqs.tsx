import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Faqs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <section className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-0">
            {/* <div className="grid grid-cols-4  gap-8 "> */}
            <Slider {...settings}>
                <div className="group h-80 sm:h-90 lg:h-100 bg-faq rounded-xl flex flex-col justify-end p-4 sm:p-5 lg:p-6 opacity-90 hover:opacity-100 transition-all duration-500 relative font-main overflow-hidden mx-2 sm:mx-3">
                    {/* Background image overlay with smooth transition */}
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-xl"
                        style={{ backgroundImage: "url('/Faqs_bg.png')" }}>
                    </div>
                    <div className="flex flex-col justify-end h-full group-hover:hidden relative z-10 transition-all duration-300">
                        <p className="font-medium text-base sm:text-lg">What industries can benefit from AI-powered solutions?</p>
                    </div>
                    <div className="absolute top-0 right-6 sm:right-8 lg:right-12 group-hover:opacity-0 transition-all duration-500 z-10">
                        <img src="/Omnisol_logo.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                    </div>
                    <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 opacity-0 group-hover:opacity-100 text-white z-10 transition-all duration-500 flex flex-col justify-between">
                        <h3 className="font-medium text-base sm:text-lg mb-2">What industries can benefit from AI-powered solutions?</h3>
                        <p className="text-xs sm:text-sm mb-3">AI solutions can be applied to various industries, including healthcare, manufacturing, retail, fintech, and more. AI can help optimize processes, enhance customer experience, and improve decision-making.</p>
                        <button className="text-white bg-black px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-200">Contact Us</button>
                    </div>
                </div>
                <div className="group h-80 sm:h-90 lg:h-100 bg-faq rounded-xl flex flex-col justify-end p-4 sm:p-5 lg:p-6 opacity-90 hover:opacity-100 transition-all duration-500 relative font-main overflow-hidden mx-2 sm:mx-3">
                    {/* Background image overlay with smooth transition */}
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-xl"
                        style={{ backgroundImage: "url('/Faqs_bg.png')" }}></div>

                    <div className="flex flex-col justify-end h-full group-hover:hidden relative z-10 transition-all duration-300">
                        <p className="font-medium text-base sm:text-lg">What is an AI Proof of Concept (PoC)?</p>
                    </div>
                    <div className="absolute top-0 right-6 sm:right-8 lg:right-12 group-hover:opacity-0 transition-all duration-500 z-10">
                        <img src="/Omnisol_logo.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                    </div>
                    <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 opacity-0 group-hover:opacity-100 text-white z-10 transition-all duration-500 flex flex-col justify-between">
                        <h3 className="font-medium text-base sm:text-lg mb-2">What is an AI Proof of Concept (PoC)?</h3>
                        <p className="text-xs sm:text-sm mb-3">An AI PoC is a small-scale demonstration of how AI can solve specific business challenges. It validates the feasibility and potential value before full implementation.</p>
                        <button className="text-white bg-black px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-200">Contact Us</button>
                    </div>
                </div>
                <div className="group h-80 sm:h-90 lg:h-100 bg-faq rounded-xl flex flex-col justify-end p-4 sm:p-5 lg:p-6 opacity-90 hover:opacity-100 transition-all duration-500 relative font-main overflow-hidden mx-2 sm:mx-3">
                    {/* Background image overlay with smooth transition */}
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-xl"
                        style={{ backgroundImage: "url('/Faqs_bg.png')" }}></div>

                    <div className="flex flex-col justify-end h-full group-hover:hidden relative z-10 transition-all duration-300">
                        <p className="font-medium text-base sm:text-lg">Can you integrate AI into existing software or systems?</p>
                    </div>
                    <div className="absolute top-0 right-6 sm:right-8 lg:right-12 group-hover:opacity-0 transition-all duration-500 z-10">
                        <img src="/Omnisol_logo.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                    </div>
                    <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 opacity-0 group-hover:opacity-100 text-white z-10 transition-all duration-500 flex flex-col justify-between">
                        <h3 className="font-medium text-base sm:text-lg mb-2">Can you integrate AI into existing systems?</h3>
                        <p className="text-xs sm:text-sm mb-3">Yes, we specialize in seamless AI integration with existing software and systems through APIs, ensuring minimal disruption to your current operations.</p>
                        <button className="text-white bg-black px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-200">Contact Us</button>
                    </div>
                </div>
                <div className="group h-80 sm:h-90 lg:h-100 bg-faq rounded-xl flex flex-col justify-end p-4 sm:p-5 lg:p-6 opacity-90 hover:opacity-100 transition-all duration-500 relative font-main overflow-hidden mx-2 sm:mx-3">
                    {/* Background image overlay with smooth transition */}
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-xl"
                        style={{ backgroundImage: "url('/Faqs_bg.png')" }}></div>

                    <div className="flex flex-col justify-end h-full group-hover:hidden relative z-10 transition-all duration-300">
                        <p className="font-medium text-base sm:text-lg">How can I get started with Omnisol's AI solutions?</p>
                    </div>
                    <div className="absolute top-0 right-6 sm:right-8 lg:right-12 group-hover:opacity-0 transition-all duration-500 z-10">
                        <img src="/Omnisol_logo.png" alt="" className="w-8 sm:w-10 lg:w-auto" />
                    </div>
                    <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 opacity-0 group-hover:opacity-100 text-white z-10 transition-all duration-500 flex flex-col justify-between">
                        <h3 className="font-medium text-base sm:text-lg mb-2">How can I get started with Omnisol?</h3>
                        <p className="text-xs sm:text-sm mb-3">Getting started is easy! Contact us for a consultation where we'll discuss your needs and create a customized AI strategy for your business.</p>
                        <button className="text-white bg-black px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-gray-800 transition-colors duration-200">Contact Us</button>
                    </div>
                </div>
                
                
               
            </Slider>
            {/* </div> */}
        </section>
    )
};

export default Faqs;
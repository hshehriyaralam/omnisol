import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Faqs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section>
            <div className="grid grid-cols-4  gap-8 w-[80%] mx-auto my-20">
                <div className="group h-100 bg-faq rounded-xl flex flex-col justify-end p-6 opacity-90 hover:opacity-100  transition-all duration-300 relative hover:">
                    <p className="font-main font-medium text-lg">What industries can benefit from AI-powered solutions?</p>
                    <div className="absolute top-0 right-10 group-hover:opacity-0 transition-all duration-300">
                        <img src="/Omnisol_logo.png" alt="" />
                    </div>
                </div>
                <div className="h-100 bg-faq rounded-xl flex flex-col justify-end p-6 opacity-90 hover:opacity-100  transition-all duration-300 relative">
                    <p className="font-main font-medium text-lg">What is an AI Proof of Concept (PoC)?<br/></p>
                    <div className="absolute top-0 right-10">
                        <img src="/Omnisol_logo.png" alt="" />
                    </div>
                </div>
                <div className="h-100 bg-faq rounded-xl flex flex-col justify-end p-6 opacity-90 hover:opacity-100  transition-all duration-300 relative">
                    <p className="font-main font-medium text-lg">Can you integrate AI into existing software or systems?</p>
                    <div className="absolute top-0 right-10">
                        <img src="/Omnisol_logo.png" alt="" />
                    </div>
                </div>
                <div className="h-100 bg-faq rounded-xl flex flex-col justify-end p-6 opacity-90 hover:opacity-100  transition-all duration-300 relative">
                    <p className="font-main font-medium text-lg">How can I get started with Omnisol’s AI solutions?</p>
                    <div className="absolute top-0 right-10">
                        <img src="/Omnisol_logo.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Faqs;
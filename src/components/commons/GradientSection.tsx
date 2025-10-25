const GradientSection = () => {
  return (
    <section className="relative w-full my-10 px-4 sm:px-6 lg:px-10">
      <div
        className="relative w-full max-w-[1200px] mx-auto rounded-[45px] flex flex-col justify-center items-center text-center 
        bg-[url('/GradientSectionBg/Bg.png')] bg-cover bg-center overflow-hidden py-16 sm:py-20 lg:py-24"
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 rounded-[45px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_80%)]" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col justify-center items-center">
          <h2
            className="text-3xl sm:text-5xl md:text-5xl lg:text-[64px] leading-tight sm:leading-snug lg:leading-[74px] tracking-[-1%] font-main font-medium text-iconColor max-w-[763px] mx-auto"
          >
            Ready to Revolutionize Your Business with AI?
          </h2>

          <button
            className="mt-10 sm:mt-12 bg-black text-white rounded-full px-8 sm:px-8 py-4 sm:py-5 flex items-center justify-center gap-3 sm:gap-4 
            hover:bg-gray-900 transition-all duration-300"
          >
            <span className="text-base sm:text-lg font-medium font-poppins">
              Let’s Get Started
            </span>
            <img
              src="/GradientSectionBg/Icon1.png"
              alt="Arrow Icon"
              className="w-6 sm:w-6 h-6 sm:h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;

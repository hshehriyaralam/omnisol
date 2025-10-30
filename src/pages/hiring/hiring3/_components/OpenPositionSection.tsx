import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Job {
  title: string;
  experience: string;
  deadline: string;
  path: string;
}

export default function OpenPositions() {
  const navigate = useNavigate();

  const categories = [
    "All", // 👈 Added this line
    "AI Engr",
    "Python expert",
    "Support",
    "Design",
    "Digital Marketing",
  ];

  const jobs: Record<string, Job[]> = {
    "AI Engr": [
      { title: "Wordpress Developer", experience: "2 Years", deadline: "2021-05-08", path: "/jobs/wordpress-developer" },
      { title: "Javascript", experience: "1 Year", deadline: "2021-05-08", path: "/jobs/javascript-developer" },
    ],
    "Python expert": [
      { title: "Apps Developer", experience: "3 Years", deadline: "2021-05-08", path: "/jobs/apps-developer" },
      { title: "IOS Developer", experience: "2 Years", deadline: "2021-05-08", path: "/jobs/ios-developer" },
      { title: "Node JS Developer", experience: "3 Years", deadline: "2021-05-08", path: "/jobs/node-js-developer" },
      { title: "React Native Developer", experience: "4 Years", deadline: "2021-05-08", path: "/jobs/react-native-developer" },
      { title: "Python Developer", experience: "5 Years", deadline: "2021-05-08", path: "/jobs/python-developer" },
      { title: "UI/UX Designer", experience: "3 Years", deadline: "2021-05-08", path: "/jobs/ui-ux-designer" },
    ],
    "Support": [
      { title: "Customer Support", experience: "1 Year", deadline: "2021-05-08", path: "/jobs/customer-support" },
    ],
    "Design": [
      { title: "Graphic Designer", experience: "2 Years", deadline: "2021-05-08", path: "/jobs/graphic-designer" },
    ],
    "Digital Marketing": [
      { title: "SEO Specialist", experience: "3 Years", deadline: "2021-05-08", path: "/jobs/seo-specialist" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("All"); 

  // ✅ Combine all jobs if "All" is active
  const allJobs = Object.values(jobs).flat();

  // ✅ Decide which jobs to show
  const displayedJobs =
    activeCategory === "All" ? allJobs : jobs[activeCategory] || [];

  return (
    <section className="w-full flex flex-col items-center bg-white py-10 px-4 md:px-8">
      {/* Main heading */}
      <div className="w-full max-w-5xl mb-10">
        <h2 className="font-main font-medium tracking-[-0.01em]
lg:text-[40px] lg:leading-[74px]
md:text-[48px] md:leading-[58px]
sm:text-[36px] sm:leading-[46px]
text-[28px] leading-[38px]">Open Positions</h2>
      </div>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
        {/* Left side categories */}
         <motion.div
  className="relative w-full lg:w-auto flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide cursor-grab"
  whileTap={{ cursor: "grabbing" }}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
>
  <div className="flex flex-nowrap lg:flex-col gap-4 px-2">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`whitespace-nowrap text-left font-medium font-main leading-10 text-[16px] sm:text-[24px] md:text-[27px] lg:text-[20.23px] tracking-[-0.018em] transition-colors duration-200 ${
          activeCategory === cat
            ? "text-orange-600"
            : "text-black hover:text-orange"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</motion.div>


        {/* Right side job cards */}
       <div className="flex-1 flex flex-col">
  {displayedJobs.map((job, i) => (
    <div
      key={i}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-7 border-b border-bodrerbottom shadow-[0px_80px_23.5px_0px_rgba(49,44,79,0.03)] p-3 bg-white hover:shadow-md transition duration-300 hover:border-orange-500 cursor-pointer relative"
    >
      {/* Left content (title + info) */}
      <div
        className="
          flex flex-col md:flex-row 
          md:items-center md:justify-between 
          bg-white rounded-[10px] p-2 
          w-full sm:w-auto
        "
      >
        {/* Title */}
        <div className="w-full md:w-[250px] text-left">
          <h3 className="font-main font-medium text-[20px] leading-[100%] truncate">
            {job.title}
          </h3>
        </div>

        {/* Experience */}
        <div className="w-full md:w-[180px] flex flex-col md:items-center text-left md:text-center mt-3 md:mt-0">
          <span className="text-[14px] text-bgborder font-main font-medium leading-[100%] mb-2">
            Experience
          </span>
          <span className="text-[20px] text-darktext font-main font-medium leading-[100%]">
            {job.experience}
          </span>
        </div>

        {/* Deadline */}
        <div className="w-full md:w-[180px] flex flex-col md:items-center text-left md:text-center mt-3 md:mt-0">
          <span className="text-[14px] text-bgborder font-main font-medium leading-[100%] mb-2">
            Deadline
          </span>
          <span className="text-[20px] text-darktext font-main font-medium leading-[100%]">
            {job.deadline}
          </span>
        </div>
      </div>

      {/* Arrow icon column — stays aligned on all cards */}
      <div
        className="
          'sm:flex' sm:items-center sm:justify-center 
          sm:w-[60px] sm:shrink-0 
          hidden sm:block
        "
      >
        <img
          src="/HiringPage/ArrowIcon.png"
          alt="arrow icon"
          onClick={() => navigate(job.path)}
          className="w-6 h-4 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        />
      </div>

      {/* Arrow for mobile (right center only visible on small screens) */}
      <div
        className="
          absolute right-3 top-1/2 -translate-y-1/2 
          sm:hidden
        "
      >
        <img
          src="/HiringPage/ArrowIcon.png"
          alt="arrow icon"
          onClick={() => navigate(job.path)}
          className="w-6 h-4 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        />
      </div>
    </div>
  ))}
</div>

              
          

      </div>
    </section>
  );
}

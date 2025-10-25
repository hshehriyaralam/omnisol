"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25, 
    rootMargin: "0px 0px -10% 0px", 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
      }}
      style={{
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
        marginBottom: 0,
        paddingBottom: 0, 
        overflow: "hidden",
      }}
    >
      {children}
    </motion.section>
  );
}

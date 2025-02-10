"use client";

import AboutContent from "./AboutContent";
import { motion } from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const About = () => {
  const image: React.CSSProperties = {
    maxWidth: "90vw",
  };

  const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
  };

  return (
    <div className="h-screen grayBackground flex flex-col items-center justify-center sm:pt-20">
      <h2 className="pageTitle sm:mt-0 mb-12">About</h2>
      <div className="min-h-0 w-full flex flex-col items-center justify-center p-5">
        <div className="max-w-6xl flex flex-col items-center text-center">
          <motion.svg
            width="900"
            height="900"
            viewBox="0 0 900 900"
            initial="hidden"
            whileInView="visible"
            style={image}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden sm:block" // Hide animation on mobile
          >
            {/* Big screen */}
            <motion.rect
              width="700"
              height="350"
              x="100"
              y="100"
              rx="20"
              stroke="#808080"
              variants={draw}
              custom={5}
              style={shape}
            />
            {/* Keyboard */}
            <motion.rect
              width="700"
              height="80"
              x="100"
              y="470"
              rx="20"
              stroke="#808080"
              variants={draw}
              custom={6}
              style={shape}
            />
            <foreignObject x="110" y="110" width="680" height="400">
              <div className="text-gray-300 text-lg md:text-xl leading-relaxed p-4 overflow-y-auto">
                <AboutContent />
              </div>
            </foreignObject>
          </motion.svg>

          {/* On mobile, only display text without the animation */}
          <div className="sm:hidden text-gray-300 text-lg md:text-xl leading-relaxed p-4">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

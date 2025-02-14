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
    <div className="min-h-screen grayBackground flex flex-col items-center justify-center sm:pt-20">
      <h2 className="pageTitle sm:mt-0 sm:mb-0 mb-12">About</h2>
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
            <motion.g>
              {/* Screen support */}
              <motion.rect
                width="250"
                height="30"
                x="325"
                y="500"
                rx="15"
                stroke="#808080"
                fill="#808080"
                variants={draw}
                custom={6}
                style={shape}
              />

              {/* Square */}
              <motion.rect
                width="100"
                height="50"
                x="400"
                y="450"
                stroke="#808080"
                fill="#808080"
                variants={draw}
                custom={6}
                style={shape}
              />
            </motion.g>
            <foreignObject x="110" y="110" width="680" height="400">
              <div className="textColor text-lg md:text-xl leading-relaxed p-4 overflow-y-auto">
                <AboutContent />
              </div>
            </foreignObject>
          </motion.svg>

          {/* On mobile, only display text without the animation */}
          <div className="sm:hidden textColor text-lg md:text-xl leading-relaxed p-4">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

"use client";

import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="h-screen grayBackground flex flex-col items-center">
      <h2 className="pageTitle mt-12">About</h2>
      <div className="h-full w-full flex flex-col items-center justify-center p-5 -mt-12">
        <div className="max-w-4xl flex flex-col md:flex-row items-center text-center md:text-left">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            variants={{
              offscreen: {
                x: -50,
              },
              onscreen: {
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
            className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 flex items-center"
          >
            <Image
              src="/avatar_Alban2.webp"
              alt="Alban"
              width={192}
              height={192}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            variants={{
              offscreen: {
                y: -50,
              },
              onscreen: {
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
            className="md:ml-8 mt-6 md:mt-0 text-center md:text-left px-6"
          >
            <h3 className="text-xl font-bold">Here is a little background</h3>
            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              I&apos;m Alban. I&apos;ve been coding for over 2 years now. As a
              Full Stack developer, I&apos;ve worked with a real-estate and
              event management companies.
              <br />
              <br />
              I&apos;m a passionate developer specializing in ReactJS and
              TypeScript, I am just beginning to explore the world of Next.js
              with great enthusiasm. I have completed several projects involving
              data management operations.
              <br />
              <br />
              With a degree in energy engineering, I pay particular attention to
              the impact of technology on the environment. Although I am still
              expanding my knowledge in this area, I am determined to contribute
              to more sustainable technological solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

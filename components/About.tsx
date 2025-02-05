"use client";

import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen grayBackground flex flex-col items-center">
      <h2 className="pageTitle mt-12 mb-12">About</h2>
      <div className="h-full w-full flex flex-col items-center justify-center p-5 sm:mt-24">
        <div className="max-w-6xl flex flex-col md:flex-row items-center text-center md:text-left">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="md:ml-8 mt-6 md:mt-0 text-center md:text-left px-6"
          >
            <h3 className="text-xl font-bold">Here is a little background</h3>
            <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              I&apos;m Alban. I&apos;ve been coding for over 2 years now. As a
              Full Stack developer, I&apos;ve worked with a real-estate and
              event management companies.
              <br />
              <br />
              I&apos;m a passionate developer specializing in{" "}
              <strong>ReactJS</strong> and
              <strong> TypeScript</strong>, I am just beginning to explore the
              world of <strong> Next.js</strong> with great enthusiasm. I have
              completed several projects involving data management operations.
              <br />
              <br />I am sensitive to the impact of technology on the
              <strong> environment</strong>. Although I am still expanding my
              knowledge in this field, I am determined to contribute to more
              sustainable technological solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

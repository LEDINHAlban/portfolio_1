// components/About.tsx

import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-lg uppercase tracking-widest text-gray-400 mb-8">
        About
      </h2>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/avatar_Alban2.webp"
            alt="Alban"
            width={192}
            height={192}
            className="rounded-lg"
          />
        </div>

        <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
          <h3 className="text-xl font-bold">Here is a little background</h3>
          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
            I&apos;m Alban. I&apos;ve been coding for over 2 years now. As a
            Full Stack developer, I&apos;ve worked with a real-estate and event
            management companies.
            <br />
            <br />
            I&apos;m a passionate developer specializing in ReactJS and
            TypeScript, I am just beginning to explore the world of Next.js with
            great enthusiasm. I have completed several projects involving data
            management operations.
            <br />
            <br />
            With a degree in energy engineering, I pay particular attention to
            the impact of technology on the environment. Although I am still
            expanding my knowledge in this area, I am determined to contribute
            to more sustainable technological solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

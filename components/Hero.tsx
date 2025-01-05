"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import React from "react";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Guy-who-loves-Guitar",
      "ButLovestoCodeToo",
      "Hi, my name is Alban",
    ],
    loop: 1,
    delaySpeed: 2000,
  });

  return (
    <div className="relative bg-[rgb(36,36,36)] text-white h-screen flex items-center justify-center">
      <BackgroundCircles />
      <div className="absolute flex flex-col items-center justify-center space-y-4">
        <Image
          src="/avatar_Alban2.webp"
          width={100}
          height={100}
          alt="portrait"
          className="rounded-full aspect-square object-cover"
        />
        <p className="uppercase tracking-widest text-sm">Software Engineer</p>
        <h1 className="text-4xl font-bold">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <nav className="flex space-x-4 text-xs uppercase">
          <span>About</span>
          <span>Experience</span>
          <span>Skills</span>
          <span>Projects</span>
        </nav>
      </div>
    </div>
  );
}

export default Hero;

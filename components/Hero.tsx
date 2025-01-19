"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
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
    <div className="relative grayBackground text-white h-screen flex items-center justify-center">
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
          <Link href={"#about"} className="heroButton">
            About
          </Link>
          <Link href={"#experience"} className="heroButton">
            Experience
          </Link>
          <Link href={"#skills"} className="heroButton">
            Skills
          </Link>
          <Link href={"#projects"} className="heroButton">
            Projects
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Hero;

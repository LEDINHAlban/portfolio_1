"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Skills() {
  enum Direction {
    Left,
    Right,
  }
  const skills = [
    {
      title: "Figma",
      name: "figma.svg",
      direction: Direction.Left,
      mastering: 40,
    },
    {
      title: "Jira",
      name: "jira.svg",
      direction: Direction.Left,
      mastering: 40,
    },
    { title: "JS", name: "js.svg", direction: Direction.Left, mastering: 80 },
    {
      title: "Nestjs",
      name: "nestjs.svg",
      direction: Direction.Left,
      mastering: 30,
    },
    {
      title: "React",
      name: "react.svg",
      direction: Direction.Right,
      mastering: 80,
    },
    {
      title: "VSC",
      name: "vsc.svg",
      direction: Direction.Right,
      mastering: 80,
    },
    {
      title: "Vuejs",
      name: "vuejs.svg",
      direction: Direction.Right,
      mastering: 20,
    },
    {
      title: "Nodejs",
      name: "nodejs.svg",
      direction: Direction.Right,
      mastering: 40,
    },
  ];
  return (
    <div className="h-screen grayBackground flex flex-col items-center">
      <h2 className="pageTitle mt-12">Skills</h2>
      <div className="grid grid-cols-4 gap-4 mt-20">
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.name}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
              variants={{
                offscreen: {
                  x: skill.direction === Direction.Left ? -50 : 50,
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
              className="relative group"
            >
              <Image
                src={`/stack_logo/${skill.name}`}
                alt={skill.title}
                height={80}
                width={80}
                className="rounded-full border-solid border-2"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 flex items-center justify-center rounded-full transition-opacity duration-300">
                <span className="text-black text-xl font-bold">
                  {skill.mastering}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

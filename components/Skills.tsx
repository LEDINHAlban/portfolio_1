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
      title: "Jira",
      name: "jira.svg",
      direction: Direction.Left,
    },
    {
      title: "Docker",
      name: "docker.svg",
      direction: Direction.Left,
    },
    { title: "Javascript", name: "js.svg", direction: Direction.Left },
    {
      title: "TypeScript",
      name: "typescript.svg",
      direction: Direction.Left,
      mastering: 80,
    },
    {
      title: "Figma",
      name: "figma.svg",
      direction: Direction.Left,
    },
    {
      title: "Nextjs",
      name: "nextjs.svg",
      direction: Direction.Left,
    },
    {
      title: "React",
      name: "react.svg",
      direction: Direction.Left,
    },
    {
      title: "Vuejs",
      name: "vuejs.svg",
      direction: Direction.Left,
    },
    {
      title: "CSS3",
      name: "css3.svg",
      direction: Direction.Left,
    },
    {
      title: "Tailwind",
      name: "tailwind.svg",
      direction: Direction.Left,
    },
    {
      title: "VSC",
      name: "vsc.svg",
      direction: Direction.Left,
    },
    {
      title: "GraphQL",
      name: "graphql.svg",
      direction: Direction.Left,
    },
    {
      title: "Nodejs",
      name: "nodejs.svg",
      direction: Direction.Right,
    },
    {
      title: "Nestjs",
      name: "nestjs.svg",
      direction: Direction.Right,
    },
    {
      title: "FeathersJS",
      name: "feathers.svg",
      direction: Direction.Right,
    },
    {
      title: "MongoDB",
      name: "mongodb.svg",
      direction: Direction.Right,
    },
    {
      title: "MySQL",
      name: "mysql.svg",
      direction: Direction.Right,
    },
    {
      title: "Postgres",
      name: "postgressql.svg",
      direction: Direction.Right,
    },
  ];
  return (
    <div className="min-h-screen grayBackground flex flex-col items-center">
      <h2 className="pageTitle mt-12">Skills</h2>
      <h3 className="flex justify-center items-center mt-4 text-center textColor text-sm md:text-base leading-relaxed p-4">
        Full-stack developer with expertise in front-end and proficiency in
        back-end.
      </h3>
      <div className="grid grid-cols-4 gap-4 sm:mt-18 p-[50px]">
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
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center rounded-full transition-opacity duration-300">
                <span className="text-black text-sm font-bold text-center">
                  {`${skill.title}`}
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

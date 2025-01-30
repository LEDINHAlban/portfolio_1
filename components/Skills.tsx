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
      mastering: 50,
    },
    {
      title: "Jira",
      name: "jira.svg",
      direction: Direction.Left,
      mastering: 70,
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
      direction: Direction.Left,
      mastering: 80,
    },
    {
      title: "VSC",
      name: "vsc.svg",
      direction: Direction.Left,
      mastering: 80,
    },
    {
      title: "Vuejs",
      name: "vuejs.svg",
      direction: Direction.Left,
      mastering: 40,
    },
    {
      title: "Nodejs",
      name: "nodejs.svg",
      direction: Direction.Left,
      mastering: 40,
    },
    {
      title: "CSS3",
      name: "css3.svg",
      direction: Direction.Right,
      mastering: 80,
    },
    {
      title: "Docker",
      name: "docker.svg",
      direction: Direction.Right,
      mastering: 40,
    },
    {
      title: "FeathersJS",
      name: "feathers.svg",
      direction: Direction.Right,
      mastering: 40,
    },
    {
      title: "GraphQL",
      name: "graphql.svg",
      direction: Direction.Right,
      mastering: 40,
    },
    {
      title: "MongoDB",
      name: "mongodb.svg",
      direction: Direction.Right,
      mastering: 40,
    },
    {
      title: "MySQL",
      name: "mysql.svg",
      direction: Direction.Right,
      mastering: 40,
    },
    {
      title: "Nextjs",
      name: "nextjs.svg",
      direction: Direction.Right,
      mastering: 80,
    },
    {
      title: "Postgres",
      name: "postgressql.svg",
      direction: Direction.Right,
      mastering: 50,
    },
    {
      title: "Tailwind",
      name: "tailwind.svg",
      direction: Direction.Right,
      mastering: 70,
    },
    {
      title: "TypeScript",
      name: "typescript.svg",
      direction: Direction.Right,
      mastering: 80,
    },
  ];
  return (
    <div className="min-h-screen grayBackground flex flex-col items-center">
      <h2 className="pageTitle mt-12">Skills</h2>
      <div className="grid grid-cols-4 gap-4 mt-20 md:mt-0 p-[50px]">
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
                <span className="text-black text-xl font-bold text-center">
                  {`${skill.mastering}%`}
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

"use client";

import CardExperience from "./CardExperience";
import React from "react";
import { motion } from "motion/react";

function WorkExperience() {
  const experience = [
    {
      company: "Capgemini Engineering",
      role: "Software Engineer",
      date: "2022 - 2023",
      description: [
        "Participation in SCRUM projects, managing tasks through JIRA for sprint tracking and deliverables.",
        "Ensuring adherence to UI/UX mockups to maintain consistency.",
        "Proposing patterns for data management and component hydration.",
        "Creating reusable components for multiple projects.",
        "Writing unit tests and integration tests using React Testing Library, as well as snapshots.",
        "Developing a two-way matrix with customizable cells to display participant privileges.",
        "Designing and integrating forms using React Hook Form.",
        "Creating charts with ChartJS for event data visualization.",
        "Conducting code reviews to ensure quality and adherence to best practices.",
      ],
      logo: {
        path: "/capgemini_Engineering_logo.webp",
        height: 400,
        width: 400,
      },
      stacks: [
        "/stack_logo/react.svg",
        "/stack_logo/jira.svg",
        "/stack_logo/vsc.svg",
      ],
    },
    {
      company: "Acheter Louer",
      role: "Web developper",
      date: "2021 - 2022",
      description: [
        "Website update for acheter-louer.fr",
        "VueJS interface: End-to-end development with a NestJS and TypeORM backend, data management, and automation of press release publication. Implemented JWT authentication to secure access.",
        "ReactJS interface: Created a CMS for article writing and user management, with a FeathersJS backend. Designed interfaces using Figma, from mockup to implementation.",
      ],
      logo: { path: "/acheterlouer_logo.png", height: 150, width: 150 },
      stacks: [
        "/stack_logo/react.svg",
        "/stack_logo/vuejs.svg",
        "/stack_logo/nestjs.svg",
        "/stack_logo/figma.svg",
        "/stack_logo/vsc.svg",
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen grayBackground pb-12"
    >
      <div className="flex justify-center items-center">
        <h2 className="pageTitle mt-12">Experience</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-8 mt-8 max-w-7xl mx-auto p-8">
        {experience.map((experience, index) => (
          <CardExperience key={index} data={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

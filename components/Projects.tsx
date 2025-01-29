import Image from "next/image";
import React from "react";

function Projects() {
  const projects = [
    {
      image: "/avatar_Alban2.webp",
      title: "Booking Clone",
      description:
        "A clone  of a hotel booking platform, allowing users to search and explore real hotels using dynamically scraped data.",
    },
    {
      image: "/avatar_Alban2.webp",
      title: "This website",
      description:
        "A sleek and interactive personal website built with Next.js, Tailwind CSS, and Framer Motion, showcasing projects, skills, and more.",
    },
    {
      image: "/avatar_Alban2.webp",
      title: "Todo App",
      description:
        "A modern and efficient task management app developed with Next.js, PostgreSQL, and Prisma, offering a seamless experience for organizing daily tasks.",
    },
  ];
  return (
    <div className="min-h-screen grayBackground flex flex-col items-center px-5 pb-12">
      <h2 className="pageTitle mt-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-8 mt-8 max-w-7xl mx-auto p-8">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col items-center bg-[#2c2b2b]  rounded-lg shadow-md p-4"
            >
              <Image
                src={project.image}
                alt="Projects"
                className="rounded-t-lg"
                width={400}
                height={400}
              />
              <h4 className="text-3xl font-bold mt-4">{project.title}</h4>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  const projects = [
    {
      image: "/projects/booking_clone_screenshot.png",
      title: "Booking Clone",
      description:
        "A clone  of a hotel booking platform, allowing users to search and explore real hotels using dynamically scraped data.",
      repository: "https://github.com/LEDINHAlban/booking_clone",
      demo_url: "https://booking-clone-pearl.vercel.app/",
    },
    {
      image: "/projects/portfolio_screenshot.png",
      title: "This Website",
      description:
        "A sleek and interactive personal website built with Next.js, Tailwind CSS, and Framer Motion, showcasing projects, skills, and more.",
      repository: "https://github.com/LEDINHAlban/portfolio_1",
    },
    {
      image: "/projects/todo_list_screenshot.png",
      title: "Todo App",
      description:
        "A modern and efficient task management app developed with Next.js, PostgreSQL, and Prisma, offering a seamless experience for organizing daily tasks.",
      repository: "https://github.com/LEDINHAlban/todo_list_1st",
    },
    {
      image: "/projects/dropshipping_screenshot.png",

      title: "Dropshipping Store",
      description:
        "A website (not accessible anymore) built with Shopify, offering a wide range of products for animals",
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
              className="flex flex-col items-center bg-[#2c2b2b] rounded-lg shadow-md p-4 space-y-4"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt="Projects"
                  className="rounded-t-lg"
                  width={400}
                  height={400}
                />
              )}
              <h4 className="text-2xl font-bold mt-4">{project.title}</h4>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex space-x-8">
                {project.demo_url && (
                  <Link
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 hover:underline"
                  >
                    View demo
                  </Link>
                )}
                {project.repository && (
                  <Link
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 hover:underline"
                  >
                    View repository
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

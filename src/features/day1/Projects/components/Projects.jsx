import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "Reservio Web Application",
      description:
        "A comprehensive appointment booking system with user-friendly interface, real-time notifications, and admin dashboard for managing bookings and users.",
      imageSource:
        "https://res.cloudinary.com/dbymxe1wb/image/upload/v1748527664/reservio_pejhbq.png",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
      demoLink: "https://reservio-two.vercel.app/",
      githubLink: "https://github.com/HazemPhoenix/Reservio",
    },
    {
      title: "VaniFit E-commerce Website",
      description:
        "An online clothing store with a modern design, featuring product listings, shopping cart functionality, and secure payment integration.",
      imageSource:
        "https://res.cloudinary.com/dbymxe1wb/image/upload/v1748529929/Screenshot_from_2025-05-29_17-45-12_naresc.png",
      technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
      demoLink: "https://prototype-9fedd.web.app/",
      githubLink: "https://github.com/e-commerce-itians/VaniFit",
    },
    {
      title: "Reservio Web Application",
      description:
        "A comprehensive appointment booking system with user-friendly interface, real-time notifications, and admin dashboard for managing bookings and users.",
      imageSource:
        "https://res.cloudinary.com/dbymxe1wb/image/upload/v1748527664/reservio_pejhbq.png",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
      demoLink: "https://reservio-two.vercel.app/",
      githubLink: "https://github.com/HazemPhoenix/Reservio",
    },
    {
      title: "VaniFit E-commerce Website",
      description:
        "An online clothing store with a modern design, featuring product listings, shopping cart functionality, and secure payment integration.",
      imageSource:
        "https://res.cloudinary.com/dbymxe1wb/image/upload/v1748529929/Screenshot_from_2025-05-29_17-45-12_naresc.png",
      technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
      demoLink: "https://prototype-9fedd.web.app/",
      githubLink: "https://github.com/e-commerce-itians/VaniFit",
    },
    {
      title: "Reservio Web Application",
      description:
        "A comprehensive appointment booking system with user-friendly interface, real-time notifications, and admin dashboard for managing bookings and users.",
      imageSource:
        "https://res.cloudinary.com/dbymxe1wb/image/upload/v1748527664/reservio_pejhbq.png",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
      demoLink: "https://reservio-two.vercel.app/",
      githubLink: "https://github.com/HazemPhoenix/Reservio",
    },
    {
      title: "VaniFit E-commerce Website",
      description:
        "An online clothing store with a modern design, featuring product listings, shopping cart functionality, and secure payment integration.",
      imageSource:
        "https://res.cloudinary.com/dbymxe1wb/image/upload/v1748529929/Screenshot_from_2025-05-29_17-45-12_naresc.png",
      technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
      demoLink: "https://prototype-9fedd.web.app/",
      githubLink: "https://github.com/e-commerce-itians/VaniFit",
    },
  ];

  return (
    <div
      id="portfolio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="px-5 py-4 bg-linear-to-r from-pink-500/20 to-purple-500/20 text-pink-200 rounded-full border border-pink-500/30 font-medium">
              My Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating nice-looking, functional web applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return <Project project={project} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;

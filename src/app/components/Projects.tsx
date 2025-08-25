"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import SectionDivider from "./SectionDivider";

const projects = [
  {
    title: "shou shou ren blog",
    description:
      "A blog built with hexo and deployed on vercel with Google Analytics, Google Search Console and Google Domains you can search the name called '瘦瘦仁' to find the blog",
    technologies: [
      "Hexo",
      "Vercel",
      "Google Analytics",
      "Google Search Console",
      "Google Domains",
    ],
    image: "/images/project1.jpg",
    link: "https://shouren-blog.lanya.dev/",
    github: "https://github.com/ShouShouRen/shoublog",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/images/project2.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/images/project3.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: "/images/project4.jpg",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <>
      <SectionDivider variant="geometric" />
      <SectionContainer
        id="projects"
        variant="gradient"
        className="geometric-section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Projects</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium">
            Here are some of my recent projects that demonstrate my skills in
            modern web development and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white border-4 border-black overflow-hidden transition-all duration-200 hover:scale-105 neubrutalism-shadow neubrutalism-shadow-hover">
                <div className="h-48 bg-gradient-to-br from-[#4ecdc4]/20 to-[#ffe66d]/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/10 via-transparent to-[#ff6b6b]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-black flex items-center justify-center neubrutalism-shadow">
                      <div className="w-8 h-8 bg-[#4ecdc4] rounded" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#ff6b6b] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-base mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white border-2 border-black text-sm font-bold text-black neubrutalism-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="flex-1 bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-4 py-3 text-base font-black transition-all duration-200 hover:scale-105 text-center cursor-pointer neubrutalism-border neubrutalism-shadow neubrutalism-shadow-hover"
                    >
                      LIVE DEMO
                    </button>
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="px-6 py-3 border-4 border-black text-black hover:bg-black hover:text-white text-base font-black transition-all duration-200 hover:scale-105 cursor-pointer neubrutalism-shadow neubrutalism-shadow-hover"
                    >
                      GITHUB
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 dark:from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/40 dark:bg-cyan-600/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400/40 dark:bg-cyan-600/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-3 bg-white border-4 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-black transition-all duration-200 hover:scale-105 cursor-pointer neubrutalism-shadow neubrutalism-shadow-hover"
          >
            <span>View More Projects</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </SectionContainer>
    </>
  );
}

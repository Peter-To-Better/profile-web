"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

const DESCRIPTION_LIMIT = 120;

function ProjectDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > DESCRIPTION_LIMIT;

  return (
    <p className="text-gray-600 text-base mb-6 leading-relaxed font-medium">
      {isLong && !expanded ? (
        <>
          {text.slice(0, DESCRIPTION_LIMIT).trimEnd()}...{" "}
          <button
            onClick={() => setExpanded(true)}
            className="text-[#ff6b6b] font-bold hover:underline cursor-pointer"
          >
            Read more
          </button>
        </>
      ) : (
        <>
          {text}{" "}
          {isLong && (
            <button
              onClick={() => setExpanded(false)}
              className="text-[#ff6b6b] font-bold hover:underline cursor-pointer"
            >
              Read less
            </button>
          )}
        </>
      )}
    </p>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-800">
      <ScrollProgress />
      <Navbar />

      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black font-bold hover:text-[#ff6b6b] transition-colors"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            All Projects
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium">
            A complete collection of my work — from web apps to AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white border-4 border-black overflow-hidden transition-all duration-200 hover:scale-105 neubrutalism-shadow neubrutalism-shadow-hover">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-[#ffe66d] border-2 border-black px-3 py-1 text-xs font-black neubrutalism-shadow">
                    FEATURED
                  </div>
                )}

                <div className="h-48 bg-gradient-to-br from-[#4ecdc4]/20 to-[#ffe66d]/20 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-black flex items-center justify-center neubrutalism-shadow">
                        <div className="w-8 h-8 bg-[#4ecdc4] rounded" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#ff6b6b] transition-colors">
                    {project.title}
                  </h3>

                  <ProjectDescription text={project.description} />

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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

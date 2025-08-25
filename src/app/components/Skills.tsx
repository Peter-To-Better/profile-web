"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import SectionDivider from "./SectionDivider";

const skills = [
  { name: "HTML & CSS", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "React", level: 88, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", level: 82, color: "from-gray-500 to-gray-700" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-blue-500" },
  {
    name: "GraphQL / RESTful",
    level: 80,
    color: "from-purple-500 to-pink-500",
  },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
  { name: "Git", level: 88, color: "from-orange-500 to-red-500" },
];

export default function Skills() {
  return (
    <>
      <SectionDivider variant="geometric" />
      <SectionContainer
        id="skills"
        variant="elevated"
        className="geometric-section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Skills</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium">
            I focus on frontend application development and have experience
            working with both GraphQL and RESTful APIs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-white border-4 border-black p-6 transition-all duration-200 hover:scale-105 neubrutalism-shadow neubrutalism-shadow-hover">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#ff6b6b] transition-colors">
                    {skill.name}
                  </h3>

                  <div className="w-full bg-gray-800 dark:bg-gray-200 rounded-full h-2 mb-3">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>

                  <span className="text-lg text-[#ff6b6b] font-bold">
                    {skill.level}%
                  </span>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 dark:from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/40 dark:bg-cyan-600/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400/40 dark:bg-cyan-600/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white border-4 border-black p-8 max-w-4xl mx-auto neubrutalism-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 text-lg font-medium">
              I&apos;m continuing to learn and actively expanding my knowledge
              of AI.
            </p>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  );
}

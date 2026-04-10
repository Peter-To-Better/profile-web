"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import SectionDivider from "./SectionDivider";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "NestJS", "GraphQL", "RESTful"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker"],
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-4 border-black p-6 neubrutalism-shadow"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-[#ff6b6b] mb-4 border-b-2 border-black pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 border-2 border-black text-sm font-bold text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
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
              There's always more to learn in tech, and I'm willing to keep
              improving.
            </p>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

export default function Footer() {
  return (
    <>
      <SectionDivider variant="minimal" />
      <footer className="relative py-12 px-4 max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 dark:from-gray-100/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Peter Chen
            </h3>
            <p className="text-gray-600 text-xl mb-8 max-w-3xl mx-auto font-medium">
              Passionate about creating exceptional digital experiences through
              innovative web development and modern technologies.
            </p>

            {/* 社交媒體連結 */}
            <div className="flex justify-center gap-6 mb-8">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/ShouShouRen",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/wei-ren-chen-47320235a/",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  name: "Email",
                  href: "mailto:peterchen2017125@gmail.com",
                  icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-gray-600 hover:bg-[#ff6b6b] hover:text-white transition-all duration-200 hover:scale-110 neubrutalism-shadow neubrutalism-shadow-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

          <div className="text-gray-500 text-base font-medium">
            <p>
              &copy; {new Date().getFullYear()} Peter Chen. All rights reserved.
            </p>
            <p className="mt-3">
              Built with{" "}
              <span className="text-[#ff6b6b] font-semibold">Next.js</span>,{" "}
              <span className="text-[#4ecdc4] font-semibold">TypeScript</span>,
              and{" "}
              <span className="text-[#ffe66d] font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

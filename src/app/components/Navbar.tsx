"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black neubrutalism-shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-black text-xl md:text-3xl font-black hover:text-[#ff6b6b] transition-colors cursor-pointer"
        >
          PETER CHEN
        </a>

        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <a
            href="#projects"
            className="text-black hover:text-[#ff6b6b] transition-colors cursor-pointer font-bold px-4 py-2 border-2 border-black hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b]"
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            className="text-black hover:text-[#ff6b6b] transition-colors cursor-pointer font-bold px-4 py-2 border-2 border-black hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b]"
          >
            SKILLS
          </a>
          <a
            href="#contact"
            className="text-black hover:text-[#ff6b6b] transition-colors cursor-pointer font-bold px-4 py-2 border-2 border-black hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b]"
          >
            CONTACT
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden w-12 h-12 bg-white border-4 border-black flex flex-col justify-center items-center cursor-pointer neubrutalism-shadow hover:scale-105 transition-transform"
        >
          <motion.div
            className="w-6 h-0.5 bg-black mb-1"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-black mb-1"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-black"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t-4 border-black neubrutalism-shadow"
          >
            <div className="px-4 py-6 space-y-4">
              <motion.a
                href="#projects"
                className="w-full text-left text-black hover:text-[#ff6b6b] transition-colors cursor-pointer font-bold px-6 py-4 border-4 border-black hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b] neubrutalism-shadow hover:scale-105 transition-transform block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                PROJECTS
              </motion.a>

              <motion.a
                href="#skills"
                className="w-full text-left text-black hover:text-[#ff6b6b] transition-colors cursor-pointer font-bold px-6 py-4 border-4 border-black hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b] neubrutalism-shadow hover:scale-105 transition-transform block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                SKILLS
              </motion.a>

              <motion.a
                href="#contact"
                className="w-full text-left text-black hover:text-[#ff6b6b] transition-colors cursor-pointer font-bold px-6 py-4 border-4 border-black hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b] neubrutalism-shadow hover:scale-105 transition-transform block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                CONTACT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import NeubrutalismBackground from "./NeubrutalismBackground";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "HELLO, I'M PETER CHEN";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-4 max-w-6xl mx-auto text-center md:text-left h-screen relative overflow-hidden bg-white"
    >
      <NeubrutalismBackground />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg z-10 relative pointer-events-auto"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-6 text-black relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {displayedText}
          <motion.span
            className="inline-block w-3 h-12 bg-[#ff6b6b] ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <div className="absolute inset-0 text-5xl md:text-7xl font-black text-[#ff6b6b] opacity-30 blur-sm -z-10">
            {displayedText}
          </div>
        </motion.h1>

        <motion.p
          className="text-gray-700 text-xl mb-8 relative font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          A passionate Frontend Developer crafting modern, interactive, and
          accessible web experiences using React, Next.js, and TailwindCSS.
        </motion.p>

        <motion.button
          onClick={() => {
            const element = document.getElementById("projects");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="inline-block bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-12 py-5 text-xl font-black transition-all duration-200 hover:scale-105 relative overflow-hidden cursor-pointer neubrutalism-border neubrutalism-shadow neubrutalism-shadow-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">VIEW MY WORK</span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-80 h-80 relative z-20 pointer-events-auto"
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute -inset-8 bg-[#4ecdc4] border-4 border-black"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -inset-4 bg-[#ffe66d] border-4 border-black"
            animate={{
              rotate: [0, -3, 0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Image
            src="/images/profile.jpeg"
            alt="Peter Chen portrait"
            fill
            className="border-4 border-black object-cover relative z-10"
          />

          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-[#ff6b6b] border-2 border-black"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-[#4ecdc4] border-2 border-black"
            animate={{
              rotate: [0, -90, -180, -270, -360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#ffe66d] border-2 border-black"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#ff6b6b] border-2 border-black"
            animate={{
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>

      {[
        {
          text: "REACT",
          position: { top: "15%", left: "10%" },
          color: "#ff6b6b",
        },
        {
          text: "NEXT.JS",
          position: { top: "25%", right: "15%" },
          color: "#4ecdc4",
        },
        {
          text: "TYPESCRIPT",
          position: { bottom: "30%", left: "8%" },
          color: "#ffe66d",
        },
        {
          text: "TAILWIND",
          position: { bottom: "20%", right: "12%" },
          color: "#ff6b6b",
        },
      ].map((skill, i) => (
        <motion.div
          key={skill.text}
          className="absolute bg-white border-2 border-black px-4 py-2 text-black text-sm font-black pointer-events-none neubrutalism-shadow"
          style={skill.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [0.9, 1.1, 0.9],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {skill.text}
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent" />
    </section>
  );
}

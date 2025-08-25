"use client";

import { motion } from "framer-motion";

export default function NeubrutalismBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff6b6b] transform rotate-45 opacity-20" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#4ecdc4] transform -rotate-12 opacity-20" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#ffe66d] transform rotate-30 opacity-15" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-[#ff6b6b] transform -rotate-45 opacity-20" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#4ecdc4] border-4 border-black"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-20 h-20 bg-[#ff6b6b] border-4 border-black transform rotate-45"
        animate={{
          rotate: [45, 135, 225, 315, 405],
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-[#ffe66d] border-4 border-black"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-0 w-32 h-2 bg-black"
        animate={{
          x: [0, 100, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-0 w-24 h-3 bg-black"
        animate={{
          x: [0, -80, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-black"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-black"
        animate={{
          scale: [1, 0.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

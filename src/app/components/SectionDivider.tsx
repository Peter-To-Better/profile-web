"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "geometric" | "minimal";
  className?: string;
}

export default function SectionDivider({
  variant = "default",
  className = "",
}: SectionDividerProps) {
  const variants = {
    default: (
      <div
        className={`w-full h-4 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent ${className}`}
      />
    ),

    geometric: (
      <div className={`relative w-full h-24 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-2 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent" />
          <div className="mx-6 w-6 h-6 border-4 border-black bg-[#4ecdc4]" />
          <div className="w-32 h-2 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent" />
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ffe66d] border-2 border-black"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#ff6b6b] border-2 border-black" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#4ecdc4] border-2 border-black" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#ffe66d] border-2 border-black" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#ff6b6b] border-2 border-black" />
      </div>
    ),

    minimal: (
      <div
        className={`w-full flex items-center justify-center py-8 ${className}`}
      >
        <div className="w-16 h-px bg-[#ff6b6b]/40" />
        <div className="mx-4 w-2 h-2 bg-[#ff6b6b] rounded-full" />
        <div className="w-16 h-px bg-[#ff6b6b]/40" />
      </div>
    ),
  };

  return variants[variant] ?? variants["default"];
}

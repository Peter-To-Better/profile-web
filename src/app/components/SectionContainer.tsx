"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "gradient";
  animate?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className = "",
  variant = "default",
  animate = true,
}: SectionContainerProps) {
  const baseClasses = "relative py-24 px-4 max-w-6xl mx-auto";

  const variants = {
    default: "bg-transparent",
    elevated: "bg-white border-4 border-black neubrutalism-shadow",
    bordered: "bg-white border-4 border-black",
    gradient:
      "bg-gradient-to-br from-[#ff6b6b]/10 via-[#4ecdc4]/10 to-[#ffe66d]/10 border-4 border-black neubrutalism-shadow",
  };

  const containerClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const Container = animate ? motion.section : "section";

  return (
    <Container
      id={id}
      className={containerClasses}
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* 背景裝飾 */}
      {variant === "elevated" && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5 dark:from-cyan-600/5 dark:to-cyan-600/5" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-600/5 rounded-full blur-3xl" />
        </div>
      )}

      {variant === "gradient" && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-500/10 dark:from-cyan-600/10 dark:to-cyan-600/10"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-600/60 rounded-full" />
          <div className="absolute top-1/4 right-0 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-600/60 rounded-full" />
          <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-600/60 rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-600/60 rounded-full" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </Container>
  );
}

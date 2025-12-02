"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none h-full w-full">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#00000015_1px,transparent_1px)] 
        dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)] 
        bg-[size:20px_20px]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Decorative Circles/Nodes */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-accent/20 opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-accent/10 opacity-20 animation-delay-2000 animate-pulse" />

      {/* Floating Tech Terms */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTag x="5%" y="15%" delay={0}>
          &lt;Component /&gt;
        </FloatingTag>
        <FloatingTag x="85%" y="25%" delay={2}>
          npm install
        </FloatingTag>
        <FloatingTag x="10%" y="70%" delay={4}>
          git commit
        </FloatingTag>
        <FloatingTag x="80%" y="80%" delay={6}>
          async/await
        </FloatingTag>
      </div>
    </div>
  );
};

const FloatingTag = ({
  x,
  y,
  delay,
  children,
}: {
  x: string;
  y: string;
  delay: number;
  children: React.ReactNode;
}) => (
  <motion.div
    className="absolute font-mono text-xs font-medium text-muted-foreground/40 bg-muted/30 px-2 py-1 rounded-md border border-border/20 backdrop-blur-[1px]"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
      y: [0, -20],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
      repeatDelay: 3,
    }}
  >
    {children}
  </motion.div>
);

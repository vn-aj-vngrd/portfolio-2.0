"use client";

import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none h-full w-full">
      {/* Grid Pattern - Adaptive Colors */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      {/* Crosshairs / Technical Markers */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-l border-t border-foreground/50" />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 border-r border-t border-foreground/50" />
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border-l border-b border-foreground/50" />
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 border-r border-b border-foreground/50" />
      </div>

      {/* Subtle Floating Elements (Binary/Code) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <FloatingElement x="10%" y="20%" delay={0}>
          01
        </FloatingElement>
        <FloatingElement x="85%" y="15%" delay={2}>
          &lt;/&gt;
        </FloatingElement>
        <FloatingElement x="15%" y="60%" delay={4}>
          {"{ }"}
        </FloatingElement>
        <FloatingElement x="80%" y="70%" delay={6}>
          00
        </FloatingElement>
        <FloatingElement x="50%" y="40%" delay={8}>
          _
        </FloatingElement>
        <FloatingElement x="5%" y="80%" delay={10}>
          if
        </FloatingElement>
        <FloatingElement x="90%" y="40%" delay={12}>
          return
        </FloatingElement>
      </div>
    </div>
  );
};

const FloatingElement = ({
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
    className="absolute font-mono text-sm font-bold text-accent/40 dark:text-accent/60"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0, 1, 0],
      y: [0, -60],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
      repeatDelay: 1,
    }}
  >
    {children}
  </motion.div>
);

"use client";

import { motion } from "framer-motion";
import { AtSign, Mail, MessageSquare, Send } from "lucide-react";

export const ContactBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none h-full w-full">
      {/* Base Grid - Subtle */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Pulsing Signal Rings - Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center opacity-30">
        <PulseRing delay={0} />
        <PulseRing delay={2} />
        <PulseRing delay={4} />
      </div>

      {/* Floating Connection Icons */}
      <div className="absolute inset-0">
        <FloatingIcon
          x="15%"
          y="25%"
          delay={0}
          icon={<Mail className="w-6 h-6 text-accent/40" />}
        />
        <FloatingIcon
          x="85%"
          y="15%"
          delay={1}
          icon={<Send className="w-6 h-6 text-accent/40" />}
        />
        <FloatingIcon
          x="10%"
          y="80%"
          delay={2}
          icon={<MessageSquare className="w-6 h-6 text-accent/40" />}
        />
        <FloatingIcon
          x="80%"
          y="75%"
          delay={3}
          icon={<AtSign className="w-6 h-6 text-accent/40" />}
        />
        <FloatingIcon
          x="50%"
          y="10%"
          delay={4}
          icon={<Mail className="w-5 h-5 text-accent/30" />}
        />
      </div>
    </div>
  );
};

const PulseRing = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute border border-accent/30 rounded-full"
    initial={{ width: "100px", height: "100px", opacity: 0 }}
    animate={{
      width: ["100px", "600px"],
      height: ["100px", "600px"],
      opacity: [0.8, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut",
    }}
  />
);

const FloatingIcon = ({
  x,
  y,
  delay,
  icon,
}: {
  x: string;
  y: string;
  delay: number;
  icon: React.ReactNode;
}) => (
  <motion.div
    className="absolute flex items-center justify-center p-3 bg-background/50 backdrop-blur-sm rounded-2xl border border-accent/10 shadow-lg"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    {icon}
    <div className="absolute inset-0 bg-accent/5 rounded-2xl animate-pulse" />
  </motion.div>
);

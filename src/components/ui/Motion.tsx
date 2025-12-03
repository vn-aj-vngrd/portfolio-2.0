"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  viewport?: any;
  as?: any;
  [key: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 20,
  viewport = { once: true },
  as: Component = motion.div,
  ...props
}: FadeInProps) => {
  const MotionComponent = Component;
  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";

import portfolioData from "@/data/portfolio-data.json";

import { Section } from "../ui/Section";

const experience = portfolioData.experience.map((job) => ({
  role: job.role,
  company: job.company,
  period: job.dates,
  description: job.description,
}));

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold mb-16 tracking-tight"
      >
        Experience
      </motion.h2>
      <div ref={containerRef} className="relative ml-4 md:ml-8 space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-0 top-[46px] bottom-0 w-px bg-border/30" />
        <motion.div
          className="absolute left-0 top-[46px] bottom-0 w-px bg-accent origin-top"
          style={{ scaleY }}
        />

        {experience.map((job, index) => {
          const isLast = index === experience.length - 1;

          return (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-10 z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  className="relative flex items-center justify-center w-3 h-3 bg-background border-2 border-muted-foreground rounded-full"
                >
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="absolute -inset-2 bg-accent/40 dark:bg-accent/60 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              {/* Mask for last item to hide line tail */}
              {isLast && (
                <div className="absolute left-[-2px] top-[47px] bottom-0 w-2 bg-background" />
              )}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 md:p-10 transition-all hover:shadow-lg hover:border-accent/20 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <div className="text-lg text-accent font-medium">
                      {job.company}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full self-start md:self-auto">
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-base text-muted-foreground leading-relaxed flex items-start"
                    >
                      <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GraphQL",
    "Redux/Zustand",
  ],
  Backend: [
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Serverless Functions",
    "REST APIs",
  ],
  Tooling: [
    "Git",
    "Docker",
    "AWS",
    "CI/CD (GitHub Actions)",
    "Jest/Vitest",
    "Cypress",
  ],
  Design: [
    "Figma",
    "UI/UX Principles",
    "Accessibility (WCAG)",
    "Design Systems",
  ],
};

export const Skills = () => {
  return (
    <Section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold mb-16 tracking-tight"
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background/50 border border-black/5 rounded-full text-sm font-medium text-foreground hover:bg-background transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";

import portfolioData from "@/data/portfolio-data.json";

const categorizeSkills = (skills: string[]) => {
  const categories: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    Database: [],
    Tools: [],
    Other: [],
  };

  const frontendSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Figma",
    "Redux",
    "Zustand",
    "GraphQL",
  ];
  const backendSkills = [
    "PHP",
    "Python",
    "Node.js",
    "Express",
    "ASP.NET Core",
    "REST APIs",
    "Prisma ORM",
  ];
  const databaseSkills = ["MySQL", "MongoDB", "PostgreSQL", "MSSQL", "Redis"];
  const toolSkills = [
    "Docker",
    "Git & GitHub",
    "Git",
    "GitHub",
    "Slack",
    "Trello",
    "AWS",
    "CI/CD",
    "Jest",
    "Cypress",
    "Agile/Scrum",
  ];

  skills.forEach((skill) => {
    if (frontendSkills.includes(skill)) {
      categories.Frontend.push(skill);
    } else if (backendSkills.includes(skill)) {
      categories.Backend.push(skill);
    } else if (databaseSkills.includes(skill)) {
      categories.Database.push(skill);
    } else if (toolSkills.includes(skill)) {
      categories.Tools.push(skill);
    } else {
      categories.Other.push(skill);
    }
  });

  // Remove empty categories
  return Object.fromEntries(
    Object.entries(categories).filter(([_, v]) => v.length > 0)
  );
};

const skills = categorizeSkills(portfolioData.skills);

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

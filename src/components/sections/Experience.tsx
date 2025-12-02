"use client";

import React from "react";
import { Section } from "../ui/Section";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp",
    period: "2022 - Present",
    description: [
      "Led the migration of the main marketing site to Next.js App Router, improving SEO and reducing build times by 60%.",
      "Architected a shared component library used across 5 different product lines, ensuring UI consistency.",
      "Mentored 3 junior developers and conducted weekly code review sessions.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "StartupX",
    period: "2020 - 2022",
    description: [
      "Developed key features for the flagship SaaS product using React and Redux.",
      "Implemented a comprehensive end-to-end testing suite with Cypress, reducing regression bugs by 30%.",
      "Collaborated closely with product designers to implement complex data visualizations.",
    ],
  },
  {
    role: "Web Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: [
      "Built responsive websites for diverse clients using modern HTML, CSS, and JavaScript.",
      "Optimized site performance, achieving 90+ Lighthouse scores for all client projects.",
      "Managed deployment pipelines and server configurations.",
    ],
  },
];

import { motion } from "framer-motion";

export const Experience = () => {
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
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-8 md:p-10 transition-all hover:shadow-lg"
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
        ))}
      </div>
    </Section>
  );
};

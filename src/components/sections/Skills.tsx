"use client";

import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Server,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Section } from "../ui/Section";

const skills = portfolioData.skills;

const iconMap: Record<string, React.ReactNode> = {
  Frontend: <Layout className="w-6 h-6" />,
  Backend: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  "Tools & DevOps": <Terminal className="w-6 h-6" />,
  "AI Tools": <Sparkles className="w-6 h-6" />,
  "Soft Skills": <Users className="w-6 h-6" />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
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
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(
          ([category, items]: [string, string[]], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-accent/5 transition-shadow duration-500 border border-border/50"
            >
              {/* Gradient Header / Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4 mb-8">
                <div className="p-2.5 rounded-xl bg-accent/5 text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-300">
                  {iconMap[category] || <Terminal className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {category}
                </h3>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3.5 py-1.5 bg-background/40 border border-border/40 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-colors duration-300 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )
        )}
      </div>
    </Section>
  );
};

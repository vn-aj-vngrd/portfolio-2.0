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

const colorMap: Record<string, string> = {
  Frontend:
    "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
  Backend:
    "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
  Database:
    "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
  "Tools & DevOps":
    "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
  "AI Tools": "from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20",
  "Soft Skills":
    "from-gray-50 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20",
};

const accentColorMap: Record<string, string> = {
  Frontend:
    "text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/20 border-blue-200/50 dark:border-blue-800/30",
  Backend:
    "text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/20 border-emerald-200/50 dark:border-emerald-800/30",
  Database:
    "text-orange-600 dark:text-orange-400 bg-orange-100/50 dark:bg-orange-900/20 border-orange-200/50 dark:border-orange-800/30",
  "Tools & DevOps":
    "text-purple-600 dark:text-purple-400 bg-purple-100/50 dark:bg-purple-900/20 border-purple-200/50 dark:border-purple-800/30",
  "AI Tools":
    "text-rose-600 dark:text-rose-400 bg-rose-100/50 dark:bg-rose-900/20 border-rose-200/50 dark:border-rose-800/30",
  "Soft Skills":
    "text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-900/20 border-gray-200/50 dark:border-gray-800/30",
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
          ([category, items]: [string, string[]], index) => {
            const gradientClass =
              colorMap[category] || "from-gray-50 to-slate-50";
            const accentClass = accentColorMap[category] || "text-gray-600";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative glass-card rounded-3xl p-8 overflow-hidden hover:shadow-2xl transition-shadow duration-500 border border-border/50 bg-linear-to-br ${gradientClass}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-2.5 rounded-xl ${accentClass
                      .split(" ")
                      .filter((c) => c.includes("bg-") || c.includes("text-"))
                      .join(" ")}`}
                  >
                    {iconMap[category] || <Terminal className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">
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
                      className={`px-3.5 py-1.5 bg-white/60 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default backdrop-blur-sm`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          }
        )}
      </div>
    </Section>
  );
};

"use client";

import { motion } from "framer-motion";
import { Code2, GitCommit, Heart, Linkedin, Users, Zap } from "lucide-react";
import Image from "next/image";

import data from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";

import { Counter } from "../ui/Counter";
import { Section } from "../ui/Section";

const portfolioData = data as PortfolioData;

const BentoCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.02 }}
    className={`glass-card rounded-3xl p-6 flex flex-col justify-between transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export const Highlights = () => {
  const { about, projects, skills, education } = portfolioData;

  // Calculate years of experience (approximate from first job)
  const startYear = 2022; // Based on "September 2022" in data
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <Section id="highlights" className="relative overflow-hidden">
      <h2 className="text-4xl font-semibold mb-16 tracking-tight">
        At a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Large Card: Tech Focus & Profile */}
        <BentoCard className="md:col-span-2 md:row-span-2 !p-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-8 md:p-10 flex flex-col justify-between md:w-3/5 order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold">Full Stack Developer</h3>
                <div className="space-y-4 max-w-md">
                  {about.description.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-0 md:h-full md:w-2/5 order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/20 via-transparent to-transparent z-10" />
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </BentoCard>
        {/* Stats Card */}
        <BentoCard
          delay={0.1}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"
        >
          <div className="flex flex-col justify-between h-full gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="font-semibold text-lg">Impact</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Counter value={yearsOfExperience} />+
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Years of Experience
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Counter value={projects.length} />
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Featured Projects
                </p>
              </div>
              <div className="space-y-1 pt-2 border-t border-emerald-100 dark:border-emerald-900/50">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Counter value={Object.values(skills).flat().length} />+
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Skills & Tools
                </p>
              </div>
              <div className="space-y-1 pt-2 border-t border-emerald-100 dark:border-emerald-900/50">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Counter value={about.details.publicRepositories} />+
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Public Repositories
                </p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Skills Summary Card */}
        <BentoCard
          delay={0.2}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20"
        >
          <div className="flex flex-col h-full gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <h4 className="font-semibold text-lg">Top Stack</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {portfolioData.topStack.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1.5 bg-orange-100/50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium border border-orange-200/50 dark:border-orange-800/30"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>
        {/* Medium Card: Education */}
        <BentoCard
          delay={0.3}
          className="md:col-span-1 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
        >
          <div className="flex flex-col h-full gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="font-semibold text-lg">Education</h4>
            </div>
            <div className="space-y-1 mt-auto">
              <p className="text-sm font-medium text-foreground">
                {education[0].school}
              </p>
              <p className="text-sm text-muted-foreground">
                {about.details.degree}
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Hobbies Card */}
        <BentoCard
          delay={0.35}
          className="md:col-span-1 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20"
        >
          <div className="flex flex-col h-full gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <h4 className="font-semibold text-lg">Interests</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {about.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="px-2 py-1 bg-white/50 dark:bg-black/20 rounded-md text-xs font-medium text-muted-foreground border border-black/5 dark:border-white/5"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Medium Card: Location & Contact */}
        <BentoCard
          delay={0.4}
          className="md:col-span-1 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20"
        >
          <div className="flex flex-col h-full gap-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h4 className="font-semibold text-lg">Location</h4>
              </div>
              <div className="flex gap-2">
                <a
                  href={about.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-white/5 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:scale-110 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <GitCommit className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <a
                  href={about.details.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-white/5 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:scale-110 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
            <div className="mt-auto">
              <h4 className="font-semibold text-lg">
                Based in {about.details.address}
              </h4>
              <p className="text-sm text-muted-foreground">
                Open to opportunities.
              </p>
            </div>
          </div>
        </BentoCard>
      </div>
    </Section>
  );
};

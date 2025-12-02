"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Code2, Globe, Zap, Layout, Users, GitCommit } from "lucide-react";
import { Counter } from "../ui/Counter";
import Image from "next/image";
import portfolioData from "@/data/portfolio-data.json";

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
    className={`glass-card rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export const Highlights = () => {
  const { about, projects, skills, experience } = portfolioData;

  // Calculate years of experience (approximate from first job)
  const startYear = 2022; // Based on "September 2022" in data
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  // Get top skills for the main card (flatten the object and take first 4)
  const allSkills = Object.values(skills).flat();
  const topSkills = allSkills.slice(0, 4);

  return (
    <Section id="highlights">
      <h2 className="text-4xl font-semibold mb-16 tracking-tight">
        At a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Large Card: Tech Focus & Profile */}
        <BentoCard className="md:col-span-2 md:row-span-2 !p-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            <div className="p-8 md:p-10 flex flex-col justify-between md:w-3/5 order-2 md:order-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Layout size={24} />
                </div>
                <h3 className="text-3xl font-semibold">Full Stack Developer</h3>
                <p className="text-lg text-muted-foreground max-w-md">
                  {about.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {topSkills.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/50 dark:bg-black/20 rounded-full text-sm font-medium border border-black/5 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
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
                  Years Exp
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Counter value={projects.length} />
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Projects
                </p>
              </div>
              <div className="col-span-2 space-y-1 pt-2 border-t border-emerald-100 dark:border-emerald-900/50">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                  <Counter value={Object.values(skills).flat().length} />+
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  Technologies Mastered
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
              <h4 className="font-semibold text-lg">Stack Overview</h4>
            </div>
            <div className="space-y-3 mt-auto">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="flex justify-between items-center text-sm group"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {category}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 bg-orange-100 dark:bg-orange-900/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 dark:bg-orange-400 rounded-full"
                        style={{ width: `${(items.length / 10) * 100}%` }} // Approximate scale
                      />
                    </div>
                    <span className="font-bold text-orange-700 dark:text-orange-400 w-4 text-right">
                      {items.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>
        {/* Medium Card: Education */}
        <BentoCard
          delay={0.3}
          className="md:col-span-1 bg-gradient-to-br from-purple-50 to-pink-50"
        >
          <div className="flex flex-col h-full justify-between">
            <Code2 className="text-purple-500" size={28} />
            <div>
              <h4 className="font-semibold text-lg">Education</h4>
              <p className="text-sm text-muted-foreground">
                {about.details.degree}
              </p>
            </div>
          </div>
        </BentoCard>
        {/* Medium Card: Location & Contact */}
        <BentoCard
          delay={0.4}
          className="md:col-span-2 bg-gradient-to-br from-gray-50 to-slate-100"
        >
          <div className="flex flex-row items-center justify-between h-full gap-8">
            <div className="flex flex-col justify-between h-full">
              <Users className="text-gray-700" size={28} />
              <div>
                <h4 className="font-semibold text-lg">
                  Based in {about.details.address}
                </h4>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Open to opportunities. Contact me at {about.details.email}.
                </p>
              </div>
            </div>
            <div className="hidden md:flex gap-2 items-center">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-black/5">
                <GitCommit className="text-muted-foreground" />
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-black/5">
                <Users className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </Section>
  );
};

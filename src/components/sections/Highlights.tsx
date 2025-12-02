"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Code2, Globe, Zap, Layout, Users, GitCommit } from "lucide-react";
import { Counter } from "../ui/Counter";
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

  // Get top skills for the main card
  const topSkills = skills.slice(0, 4);

  return (
    <Section id="highlights">
      <h2 className="text-4xl font-semibold mb-16 tracking-tight">
        At a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Large Card: Tech Focus */}
        <BentoCard className="md:col-span-2 md:row-span-2 !p-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Layout size={24} />
              </div>
              <h3 className="text-3xl font-semibold">Full Stack Developer</h3>
              <p className="text-lg text-muted-foreground max-w-md">
                {about.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {topSkills.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>
        {/* Small Card: Experience */}
        <BentoCard
          delay={0.1}
          className="bg-gradient-to-br from-green-50 to-emerald-50"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <Zap className="text-green-600" size={28} />
              <span className="text-4xl font-bold text-green-600 flex items-center">
                <Counter value={yearsOfExperience} />+
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Years Experience</h4>
              <p className="text-sm text-muted-foreground">
                Building software solutions since {startYear}.
              </p>
            </div>
          </div>
        </BentoCard>
        {/* Small Card: Projects */}
        <BentoCard
          delay={0.2}
          className="bg-gradient-to-br from-orange-50 to-amber-50"
        >
          <div className="flex flex-col h-full justify-between">
            <Globe className="text-orange-500" size={28} />
            <div className="flex justify-between items-start">
              <span className="text-4xl font-bold text-orange-600">
                <Counter value={projects.length} />
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Projects</h4>
              <p className="text-sm text-muted-foreground">
                Deployed web applications.
              </p>
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

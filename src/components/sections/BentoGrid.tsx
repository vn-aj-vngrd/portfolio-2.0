"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Code2, Globe, Zap, Layout, Users, GitCommit } from "lucide-react";

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

export const BentoGrid = () => {
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
              <h3 className="text-3xl font-semibold">
                Design Systems Architect
              </h3>
              <p className="text-lg text-muted-foreground max-w-md">
                I build scalable UI libraries that bridge the gap between Figma
                and code, ensuring consistency across large engineering teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {["Storybook", "Tokens", "A11y", "React"].map((tag) => (
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

        {/* Small Card: Performance */}
        <BentoCard
          delay={0.1}
          className="bg-gradient-to-br from-green-50 to-emerald-50"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <Zap className="text-green-600" size={28} />
              <span className="text-4xl font-bold text-green-600">98</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Performance First</h4>
              <p className="text-sm text-muted-foreground">
                Average Lighthouse score across all projects.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Small Card: Global Reach */}
        <BentoCard
          delay={0.2}
          className="bg-gradient-to-br from-orange-50 to-amber-50"
        >
          <div className="flex flex-col h-full justify-between">
            <Globe className="text-orange-500" size={28} />
            <div>
              <h4 className="font-semibold text-lg">Global Impact</h4>
              <p className="text-sm text-muted-foreground">
                Deployed apps used in 50+ countries.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Medium Card: Code Quality */}
        <BentoCard
          delay={0.3}
          className="md:col-span-1 bg-gradient-to-br from-purple-50 to-pink-50"
        >
          <div className="flex flex-col h-full justify-between">
            <Code2 className="text-purple-500" size={28} />
            <div>
              <h4 className="font-semibold text-lg">Clean Code</h4>
              <p className="text-sm text-muted-foreground">
                Advocate for TypeScript strict mode and 100% test coverage.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Medium Card: Mentorship/Community */}
        <BentoCard
          delay={0.4}
          className="md:col-span-2 bg-gradient-to-br from-gray-50 to-slate-100"
        >
          <div className="flex flex-row items-center justify-between h-full gap-8">
            <div className="flex flex-col justify-between h-full">
              <Users className="text-gray-700" size={28} />
              <div>
                <h4 className="font-semibold text-lg">
                  Community & Mentorship
                </h4>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Active contributor to open source and mentor to junior
                  developers.
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

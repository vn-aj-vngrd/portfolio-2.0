"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import portfolioData from "@/data/portfolio-data.json";

export const Hero = () => {
  const { about, hero } = portfolioData;

  return (
    <Section className="min-h-screen flex items-center pt-32 pb-16 justify-center text-center">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Building digital products with{" "}
            <span className="text-accent">precision</span> and{" "}
            <span className="text-accent">purpose</span>.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I'm {about.details.name}, a {about.role} based in{" "}
          {about.details.address}. {hero.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="h-14 px-8 text-lg" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm"
            asChild
          >
            <a href="/resume.pdf" target="_blank">
              Download Resume <Download className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

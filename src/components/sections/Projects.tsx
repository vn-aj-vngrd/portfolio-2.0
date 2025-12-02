"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

import portfolioData from "@/data/portfolio-data.json";

const projects = portfolioData.projects.map((project) => ({
  title: project.title,
  description: project.description,
  metrics: "View Project Details", // Placeholder as metrics are not in JSON
  tags: project.tech,
  links: {
    demo: project.link,
    repo: project.link, // Assuming repo link is same or not available separately
  },
}));

import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <Section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold mb-16 tracking-tight"
      >
        Featured Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-auto">
              <p className="text-sm font-medium text-foreground mb-6 bg-muted/50 inline-block px-3 py-1 rounded-lg">
                {project.metrics}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-xs font-medium rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="flex-1">
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

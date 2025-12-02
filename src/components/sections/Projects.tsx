"use client";

import { ArrowUpRight, Github } from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

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
            className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 border border-border/50"
          >
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

            <div className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/5 rounded-full text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hover:bg-accent/10 cursor-pointer"
                    aria-label="View Project"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-background/40 border border-border/40 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-6 border-t border-border/40">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 group/btn hover:border-accent/30 hover:bg-accent/5"
                  >
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="flex-1 hover:text-accent"
                  >
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

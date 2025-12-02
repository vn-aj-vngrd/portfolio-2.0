"use client";

import React from "react";
import { Section } from "../ui/Section";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";
import portfolioData from "@/data/portfolio-data.json";
import { motion } from "framer-motion";

const certifications = portfolioData.certifications;

export const Certifications = () => {
  return (
    <Section id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold mb-16 tracking-tight"
      >
        Certifications
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="mb-6 flex-grow">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <p className="text-base text-muted-foreground font-medium">
                {cert.issuer}
              </p>
            </div>

            <div className="mt-auto">
              <Button variant="outline" size="sm" asChild className="w-full">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  See Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

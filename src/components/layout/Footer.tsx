"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Box, Container, Flex } from "../ui/Layout";
import { FadeIn } from "../ui/Motion";
import { Text } from "../ui/Typography";

export const Footer = () => {
  const { about } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md">
      <Container>
        <FadeIn>
          <Flex
            direction="col"
            className="md:flex-row items-center justify-between gap-6 py-12"
          >
            <Box className="text-center md:text-left space-y-2">
              <Text className="text-lg font-bold tracking-tight">
                {about.details.name}
              </Text>
              <Text className="text-sm text-muted-foreground">
                &copy; {currentYear}. Crafted with precision using Next.js &
                Tailwind CSS.
              </Text>
            </Box>

            <Flex align="center" gap="gap-4">
              <a
                href={about.details.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-white/5 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
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
              <a
                href={`mailto:${about.details.email}`}
                className="p-2 bg-white dark:bg-white/5 rounded-xl shadow-sm border border-black/5 dark:border-white/5 hover:scale-110 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </Flex>
          </Flex>
        </FadeIn>
      </Container>
    </footer>
  );
};

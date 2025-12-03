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

            <Flex align="center" gap="gap-6">
              <a
                href={about.details.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-accent/10 rounded-full"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={about.details.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-accent/10 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${about.details.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-accent/10 rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </Flex>
          </Flex>
        </FadeIn>
      </Container>
    </footer>
  );
};

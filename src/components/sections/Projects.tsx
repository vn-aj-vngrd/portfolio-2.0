"use client";

import { ArrowUpRight, Github } from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Box, Flex, Grid } from "../ui/Layout";
import { FadeIn } from "../ui/Motion";
import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";

const projects = portfolioData.projects.map((project) => ({
  title: project.title,
  description: project.description,
  features: project.features,
  tags: project.tech,
  links: {
    demo: project.link,
    repo: project.code,
  },
}));

export const Projects = () => {
  return (
    <Section id="projects">
      <FadeIn>
        <Heading
          variant="h2"
          className="text-4xl font-semibold mb-16 tracking-tight"
        >
          Featured Projects
        </Heading>
      </FadeIn>

      <Grid className="gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn
            key={index}
            delay={index * 0.1}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "opacity, transform" }}
            className="h-full"
          >
            <Card className="group relative overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-accent/5 transition-shadow duration-500 border border-border/50">
              {/* Subtle Glow Effect */}
              <Box className="absolute -inset-1 bg-linear-to-r from-accent/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

              <CardHeader className="p-8 pb-0">
                <Flex justify="between" align="start" className="mb-4">
                  <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/5 rounded-full text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hover:bg-accent/10 cursor-pointer"
                    aria-label="View Project"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </Flex>

                <Text className="text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </Text>

                {/* Features List */}
                <Box className="mb-6">
                  <Text className="text-sm font-semibold text-foreground mb-2">
                    Key Features:
                  </Text>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.features?.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </Box>
              </CardHeader>

              <CardContent className="p-8 pt-0 mt-auto space-y-6">
                <Flex wrap="wrap" gap="gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="glass"
                      className="cursor-default hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </CardContent>

              <div className="h-px bg-border/40 mx-8" />
              <CardFooter className="p-8 gap-3">
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
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </Grid>

      <FadeIn
        delay={0.4}
        className="mt-16 relative overflow-hidden rounded-3xl bg-linear-to-br from-accent/5 via-background to-accent/5 dark:from-accent/10 dark:via-background/50 dark:to-accent/10 border border-accent/10 p-8 md:p-12 text-center"
      >
        {/* Loading Border Effect */}
        <Box
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(white, white), linear-gradient(white, white)",
            maskClip: "content-box, border-box",
            maskComposite: "exclude",
            WebkitMaskImage:
              "linear-gradient(white, white), linear-gradient(white, white)",
            WebkitMaskClip: "content-box, border-box",
            WebkitMaskComposite: "xor",
            padding: "2px",
          }}
        >
          <Box className="absolute -inset-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_70%,var(--accent)_100%)]" />
        </Box>

        <Box className="absolute inset-0 bg-grid-white/10 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <Flex
          direction="col"
          align="center"
          gap="gap-4"
          className="relative z-10"
        >
          <Box className="p-3 rounded-full bg-accent/10 text-accent mb-2">
            <ArrowUpRight className="w-6 h-6" />
          </Box>
          <Heading
            variant="h3"
            className="text-2xl font-semibold tracking-tight"
          >
            More Projects in the Works
          </Heading>
          <Text className="text-muted-foreground max-w-md mx-auto text-lg">
            I&apos;m constantly building and experimenting. Stay tuned for more
            cool projects coming soon! 🚀
          </Text>
        </Flex>
      </FadeIn>
    </Section>
  );
};

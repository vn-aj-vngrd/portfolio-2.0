"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "../ui/Button";
import { HeroBackground } from "../ui/HeroBackground";
import { Box } from "../ui/Layout";
import { FadeIn } from "../ui/Motion";
import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";

export const Hero = () => {
  const { about, hero } = portfolioData;

  return (
    <Section
      id="hero"
      className="min-h-screen flex items-start md:items-center pt-48! md:pt-32 pb-16 justify-center text-center relative overflow-hidden"
    >
      <HeroBackground />
      <Box className="max-w-4xl mx-auto">
        <FadeIn>
          <Heading
            variant="h1"
            className="text-5xl md:text-8xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[1.05] bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70"
          >
            Building digital products with{" "}
            <span className="text-accent">precision</span> and{" "}
            <span className="text-accent">purpose</span>.
          </Heading>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Text
            variant="lead"
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m {about.details.name}, a {about.role} based in{" "}
            {about.details.address}. {hero.summary}
          </Text>
        </FadeIn>

        <FadeIn
          delay={0.4}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="h-14 px-8 text-lg" asChild>
            <a href="/resume" target="_blank">
              View Resume <ArrowUpRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm"
            asChild
          >
            <a href="#highlights">
              Explore Portfolio <ArrowDown className="h-5 w-5" />
            </a>
          </Button>
        </FadeIn>
      </Box>
    </Section>
  );
};

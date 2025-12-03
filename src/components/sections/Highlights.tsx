"use client";

import {
  Code2,
  Footprints,
  Gamepad2,
  Github,
  Heart,
  Linkedin,
  Music,
  Plane,
  Trees,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

import data from "@/data/portfolio-data.json";
import { PortfolioData } from "@/types/portfolio";

import { Card, CardContent } from "../ui/Card";
import { Counter } from "../ui/Counter";
import { Box, Flex, Grid, Stack } from "../ui/Layout";
import { FadeIn } from "../ui/Motion";
import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";

const portfolioData = data as PortfolioData;

const hobbyIcons: Record<string, React.ReactNode> = {
  Music: <Music className="w-3 h-3" />,
  Basketball: <Trophy className="w-3 h-3" />,
  "Mobile Legends": <Gamepad2 className="w-3 h-3" />,
  Travelling: <Plane className="w-3 h-3" />,
  Jogging: <Footprints className="w-3 h-3" />,
  Nature: <Trees className="w-3 h-3" />,
};

export const Highlights = () => {
  const { about, projects, skills, education } = portfolioData;

  // Calculate years of experience (approximate from first job)
  const startYear = 2022; // Based on "September 2022" in data
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <Section id="highlights" className="relative overflow-hidden">
      <Heading
        variant="h2"
        className="text-4xl font-semibold mb-16 tracking-tight"
      >
        At a Glance
      </Heading>
      <Grid className="grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Large Card: Tech Focus & Profile */}
        <FadeIn className="md:col-span-2 md:row-span-2 h-full">
          <Card className="p-0! bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 overflow-hidden h-full">
            <Flex direction="col" className="md:flex-row h-full">
              <Stack
                justify="between"
                className="p-8 md:p-10 md:w-3/5 order-2 md:order-1"
              >
                <Stack gap="gap-4">
                  <Heading variant="h3" className="text-3xl font-semibold">
                    Full Stack Developer
                  </Heading>
                  <Stack gap="gap-4" className="max-w-md">
                    {about.description.map((paragraph, index) => (
                      <Text
                        key={index}
                        className="text-lg text-muted-foreground"
                      >
                        {paragraph}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
              <Box className="relative min-h-[300px] md:min-h-0 md:h-full md:w-2/5 order-1 md:order-2">
                <Box className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-black/20 via-transparent to-transparent z-10" />
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
              </Box>
            </Flex>
          </Card>
        </FadeIn>

        {/* Stats Card */}
        <FadeIn delay={0.1} className="h-full">
          <Card className="bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 h-full">
            <CardContent className="flex flex-col justify-between h-full gap-6 p-6">
              <Flex align="center" gap="gap-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <Heading variant="h4" className="font-semibold text-lg">
                  Impact
                </Heading>
              </Flex>
              <Grid cols={2} gap="gap-4">
                <Stack gap="gap-1">
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                    <Counter value={yearsOfExperience} />+
                  </span>
                  <Text className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Years of Experience
                  </Text>
                </Stack>
                <Stack gap="gap-1">
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                    <Counter value={projects.length} />
                  </span>
                  <Text className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Featured Projects
                  </Text>
                </Stack>
                <Stack
                  gap="gap-1"
                  className="pt-2 border-t border-emerald-100 dark:border-emerald-900/50"
                >
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                    <Counter value={Object.values(skills).flat().length} />+
                  </span>
                  <Text className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Skills & Tools
                  </Text>
                </Stack>
                <Stack
                  gap="gap-1"
                  className="pt-2 border-t border-emerald-100 dark:border-emerald-900/50"
                >
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                    <Counter value={about.details.publicRepositories} />+
                  </span>
                  <Text className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Public Repositories
                  </Text>
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Skills Summary Card */}
        <FadeIn delay={0.2} className="h-full">
          <Card className="bg-linear-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 h-full">
            <CardContent className="flex flex-col h-full gap-4 p-6">
              <Flex align="center" gap="gap-2">
                <Code2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <Heading variant="h4" className="font-semibold text-lg">
                  Top Stack
                </Heading>
              </Flex>
              <Flex wrap="wrap" gap="gap-2" className="mt-auto">
                {portfolioData.topStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 bg-orange-100/50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium border border-orange-200/50 dark:border-orange-800/30"
                  >
                    {tech.name}
                  </span>
                ))}
              </Flex>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Medium Card: Education */}
        <FadeIn delay={0.3} className="md:col-span-1 h-full">
          <Card className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 h-full">
            <CardContent className="flex flex-col h-full gap-4 p-6">
              <Flex align="center" gap="gap-2">
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <Heading variant="h4" className="font-semibold text-lg">
                  Education
                </Heading>
              </Flex>
              <Stack gap="gap-1" className="mt-auto">
                <Text className="text-sm font-medium text-foreground">
                  {education[0].school}
                </Text>
                <Text className="text-sm text-muted-foreground">
                  {about.details.degree}
                </Text>
              </Stack>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Hobbies Card */}
        <FadeIn delay={0.35} className="md:col-span-1 h-full">
          <Card className="bg-linear-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 h-full">
            <CardContent className="flex flex-col h-full gap-4 p-6">
              <Flex align="center" gap="gap-2">
                <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <Heading variant="h4" className="font-semibold text-lg">
                  Interests
                </Heading>
              </Flex>
              <Flex wrap="wrap" gap="gap-2" className="mt-auto">
                {about.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/50 dark:bg-black/20 rounded-full text-xs font-medium text-muted-foreground border border-black/5 dark:border-white/5 hover:bg-rose-100/50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300 cursor-default"
                  >
                    {hobbyIcons[hobby] || <Heart className="w-3 h-3" />}
                    {hobby}
                  </span>
                ))}
              </Flex>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Medium Card: Location & Contact */}
        <FadeIn delay={0.4} className="md:col-span-1 h-full">
          <Card className="bg-linear-to-br from-gray-50 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20 h-full">
            <CardContent className="flex flex-col h-full gap-4 p-6">
              <Flex justify="between" align="start">
                <Flex align="center" gap="gap-2">
                  <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <Heading variant="h4" className="font-semibold text-lg">
                    Location
                  </Heading>
                </Flex>
                <Flex gap="gap-2">
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
                </Flex>
              </Flex>
              <Box className="mt-auto">
                <Heading variant="h4" className="font-semibold text-lg">
                  Based in {about.details.address}
                </Heading>
                <Text className="text-sm text-muted-foreground">
                  Open to opportunities.
                </Text>
              </Box>
            </CardContent>
          </Card>
        </FadeIn>
      </Grid>
    </Section>
  );
};

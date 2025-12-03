"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "../ui/Button";
import { ContactBackground } from "../ui/ContactBackground";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Box, Flex, Grid, Stack } from "../ui/Layout";
import { FadeIn } from "../ui/Motion";
import { Section } from "../ui/Section";
import { Textarea } from "../ui/Textarea";
import { Heading, Text } from "../ui/Typography";

export const Contact = () => {
  const { email } = portfolioData.about.details;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      <ContactBackground />
      <FadeIn
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto text-center"
      >
        <Heading
          variant="h2"
          className="text-4xl font-semibold mb-6 tracking-tight"
        >
          Get In Touch
        </Heading>
        <Text
          variant="lead"
          className="text-lg text-muted-foreground mb-12 leading-relaxed"
        >
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </Text>

        <FadeIn
          delay={0.2}
          as={motion.form}
          className="space-y-6 text-left glass-card p-8 md:p-10 rounded-3xl"
          onSubmit={(e: React.FormEvent) => e.preventDefault()}
        >
          <Grid className="md:grid-cols-2 gap-6">
            <Stack gap="gap-2">
              <Label htmlFor="name" className="ml-1">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border-0 bg-muted/50 focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all outline-none h-auto"
                placeholder="Van AJ Vanguardia"
              />
            </Stack>
            <Stack gap="gap-2">
              <Label htmlFor="email" className="ml-1">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border-0 bg-muted/50 focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all outline-none h-auto"
                placeholder={email}
              />
            </Stack>
          </Grid>

          <Stack gap="gap-2">
            <Label htmlFor="message" className="ml-1">
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-0 bg-muted/50 focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all outline-none resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </Stack>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </FadeIn>

        <Flex justify="center" className="mt-12 w-full">
          <FadeIn
            delay={0.4}
            className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-5 sm:px-8 sm:py-4 rounded-4xl glass-card border border-border/50 hover:border-accent/20 transition-colors duration-300 max-w-full"
          >
            <Box className="p-3 rounded-full bg-accent/10 text-accent shrink-0">
              <Mail size={20} />
            </Box>

            <Flex
              direction="col"
              align="center"
              className="sm:items-start gap-0.5 text-center sm:text-left"
            >
              <Text className="text-sm text-muted-foreground font-medium">
                Email me directly
              </Text>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-semibold text-foreground hover:text-accent transition-colors break-all sm:break-normal"
              >
                {email}
              </a>
            </Flex>

            <Box className="hidden sm:block w-px h-8 bg-border/50" />

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-accent hover:text-white transition-all duration-300 group/copy cursor-pointer"
              aria-label="Copy email address"
            >
              <Text as="span" className="text-sm font-medium sm:hidden">
                Copy
              </Text>
              <Box className="relative w-4 h-4">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Check size={16} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Copy size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </button>
          </FadeIn>
        </Flex>
      </FadeIn>
    </Section>
  );
};

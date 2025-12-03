"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "../ui/Button";
import { ContactBackground } from "../ui/ContactBackground";
import { Section } from "../ui/Section";

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
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>

        <form
          className="space-y-6 text-left glass-card p-8 md:p-10 rounded-3xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium ml-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border-0 bg-muted/50 focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                placeholder="Van AJ Vanguardia"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium ml-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border-0 bg-muted/50 focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                placeholder={email}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium ml-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-0 bg-muted/50 focus:bg-background focus:ring-2 focus:ring-accent/20 transition-all outline-none resize-none"
              placeholder="Hello, I'd like to talk about..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-12 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-5 sm:px-8 sm:py-4 rounded-[2rem] glass-card border border-border/50 hover:border-accent/20 transition-colors duration-300 max-w-full"
          >
            <div className="p-3 rounded-full bg-accent/10 text-accent shrink-0">
              <Mail size={20} />
            </div>

            <div className="flex flex-col items-center sm:items-start gap-0.5 text-center sm:text-left">
              <span className="text-sm text-muted-foreground font-medium">
                Email me directly
              </span>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-semibold text-foreground hover:text-accent transition-colors break-all sm:break-normal"
              >
                {email}
              </a>
            </div>

            <div className="hidden sm:block w-px h-8 bg-border/50" />

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-accent hover:text-white transition-all duration-300 group/copy"
              aria-label="Copy email address"
            >
              <span className="text-sm font-medium sm:hidden">Copy</span>
              <div className="relative w-4 h-4">
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
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

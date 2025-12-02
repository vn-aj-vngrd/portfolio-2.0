"use client";

import React from "react";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "../ui/Button";
import { ContactBackground } from "../ui/ContactBackground";
import { Section } from "../ui/Section";

export const Contact = () => {
  const { email } = portfolioData.about.details;

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

        <div className="mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="text-muted-foreground font-medium">
              Or email me directly at
            </span>
            <a
              href={`mailto:${email}`}
              className="text-accent font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

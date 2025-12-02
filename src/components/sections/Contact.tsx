"use client";

import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <Section id="contact">
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
                placeholder="vanajvanguardia@gmail.com"
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

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            Or email me directly at{" "}
            <a
              href="mailto:vanajvanguardia@gmail.com"
              className="text-accent hover:underline font-medium"
            >
              vanajvanguardia@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

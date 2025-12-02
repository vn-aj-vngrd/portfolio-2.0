import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-lg font-bold">Van AJ Vanguardia</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. Crafted with precision using Next.js &
            Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

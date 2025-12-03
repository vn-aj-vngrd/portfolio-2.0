"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 text-center md:text-left"
        >
          <span className="text-lg font-bold">Van AJ Vanguardia</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. Crafted with precision using Next.js &
            Tailwind CSS.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
};

"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import{ useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = [
  "hero",
  "highlights",
  "projects",
  "experience",
  "skills",
  "certifications",
  "contact",
];

export const Header = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = 100;
    const newIsCompact = latest > threshold;
    setIsCompact(newIsCompact);
    if (newIsCompact) {
      setIsMobileMenuOpen(false);
    }
  });

  if (pathname === "/resume") return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSectionTitle = (id: string) => {
    switch (id) {
      case "hero":
        return "Overview";
      case "about":
        return "About Me";
      case "highlights":
        return "Highlights";
      case "projects":
        return "Projects";
      case "experience":
        return "Experience";
      case "skills":
        return "Skills";
      case "certifications":
        return "Certifications";
      case "contact":
        return "Contact";
      default:
        return "Portfolio";
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {!isCompact ? (
            <motion.header
              key="full-header"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full pt-6 pointer-events-auto bg-transparent flex justify-center"
            >
              <motion.div
                animate={{
                  height: "auto",
                  transition: {
                    duration: isMobileMenuOpen ? 0.5 : 0.2,
                    ease: isMobileMenuOpen ? [0.16, 1, 0.3, 1] : "easeInOut",
                  },
                }}
                className="bg-background/60 backdrop-blur-md border border-white/10 shadow-sm w-[90%] max-w-5xl mx-4 overflow-hidden rounded-3xl"
              >
                <div className="px-6 py-3 flex items-center justify-between">
                  <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity pl-2"
                  >
                    Van AJ Vanguardia
                  </Link>

                  {/* Desktop Nav */}
                  <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="relative px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        {item.label}
                        <span className="absolute inset-x-0 -bottom-1 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                      </Link>
                    ))}
                    <div className="h-4 w-px bg-border/50" />
                    <ThemeToggle />
                    <Button variant="primary" size="sm" asChild>
                      <Link href="/resume" target="_blank">
                        Resume
                      </Link>
                    </Button>
                  </nav>

                  {/* Mobile Menu Toggle */}
                  <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                      className="p-2 text-foreground cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      aria-label="Toggle menu"
                    >
                      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                  </div>
                </div>

                {/* Mobile Nav Content */}
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut",
                        },
                      }}
                      className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 overflow-hidden"
                    >
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Button variant="primary" className="w-full mt-2" asChild>
                        <Link href="/resume" target="_blank">
                          Resume
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.header>
          ) : (
            <motion.div
              key="compact-dock"
              initial={{ y: -50, scale: 0.9, opacity: 0 }}
              animate={{ y: 20, scale: 1, opacity: 1 }}
              exit={{ y: -50, scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="pointer-events-auto bg-background/80 backdrop-blur-xl border border-border/40 shadow-lg rounded-full px-4 py-2 flex items-center gap-4 md:gap-6 mt-2"
            >
              <span className="text-sm font-medium hidden md:block min-w-[80px] text-center">
                {getSectionTitle(activeSection)}
              </span>

              {/* Progress Indicator */}
              <div className="flex gap-1.5 items-center">
                {sectionIds.map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="p-1 cursor-pointer group"
                    aria-label={`Scroll to ${getSectionTitle(id)}`}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -top-10 opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                        <div className="bg-foreground text-background text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap relative flex items-center justify-center">
                          {getSectionTitle(id)}
                          <div className="absolute -bottom-1 w-2 h-2 bg-foreground rotate-45" />
                        </div>
                      </div>
                      <motion.div
                        layout
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeSection === id
                            ? "w-4 bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.4)]"
                            : "w-1.5 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="h-4 w-px bg-border" />

              <div className="flex items-center gap-1">
                <button
                  onClick={scrollToTop}
                  className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Back to top"
                >
                  <ArrowUp size={16} />
                </button>

                <Link
                  href="#contact"
                  className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Contact"
                >
                  <Mail size={16} />
                </Link>
                <ThemeToggle compact />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

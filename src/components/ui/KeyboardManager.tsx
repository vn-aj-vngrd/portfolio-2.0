"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Command, Keyboard, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Badge } from "./Badge";
import { Button } from "./Button";
import { Box, Flex } from "./Layout";
import { Heading, Text } from "./Typography";

const sections = [
  "hero",
  "highlights",
  "projects",
  "experience",
  "skills",
  "certifications",
  "contact",
];

export const KeyboardManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Help Modal
      if (e.key === "?" && !e.metaKey && !e.ctrlKey) {
        setIsOpen((prev) => !prev);
      }

      // Close Modal on Escape
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      // Toggle Theme (Shift + T)
      if (e.shiftKey && (e.key === "T" || e.key === "t")) {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }

      // Section Navigation (Shift + ArrowUp/ArrowDown)
      if (e.shiftKey) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const currentScroll = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Find current section index
          let currentIndex = -1;
          let minDistance = Infinity;

          sections.forEach((id, index) => {
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const distance = Math.abs(rect.top);
              if (distance < minDistance) {
                minDistance = distance;
                currentIndex = index;
              }
            }
          });

          let targetIndex = currentIndex;

          if (e.key === "ArrowDown") {
            targetIndex = Math.min(currentIndex + 1, sections.length - 1);
          } else if (e.key === "ArrowUp") {
            targetIndex = Math.max(currentIndex - 1, 0);
          }

          const targetId = sections[targetIndex];
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [theme, setTheme]);

  return (
    <>
      {/* Floating Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex"
      >
        <Button
          variant="outline"
          size="sm"
          className="h-10 px-4 gap-2 bg-background/80 backdrop-blur-md shadow-lg border-border/50 hover:bg-background/90"
          onClick={() => setIsOpen(true)}
        >
          <Keyboard className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">
            Press <span className="text-foreground font-bold">?</span> for help
          </span>
        </Button>
      </motion.div>

      {/* Help Modal */}
      <AnimatePresence>
        {isOpen && (
          <Box className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-border/50 flex items-center justify-between bg-muted/30">
                <Flex align="center" gap="gap-3">
                  <Box className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Command className="w-5 h-5" />
                  </Box>
                  <div>
                    <Heading variant="h4" className="text-lg font-semibold">
                      Keyboard Shortcuts
                    </Heading>
                    <Text className="text-sm text-muted-foreground">
                      Navigate the portfolio with ease
                    </Text>
                  </div>
                </Flex>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <ShortcutRow
                  keys={["Shift", "↓"]}
                  description="Go to next section"
                />
                <ShortcutRow
                  keys={["Shift", "↑"]}
                  description="Go to previous section"
                />
                <ShortcutRow keys={["Shift", "T"]} description="Toggle theme" />
                <ShortcutRow keys={["?"]} description="Toggle this help menu" />
                <ShortcutRow keys={["Esc"]} description="Close this menu" />
              </div>

              <div className="p-4 bg-muted/30 border-t border-border/50 text-center">
                <Text className="text-xs text-muted-foreground">
                  Pro tip: You can also use standard scrolling keys like
                  PageUp/Down
                </Text>
              </div>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

const ShortcutRow = ({
  keys,
  description,
}: {
  keys: string[];
  description: string;
}) => (
  <Flex justify="between" align="center" className="group">
    <Text className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
      {description}
    </Text>
    <Flex gap="gap-2">
      {keys.map((k) => (
        <Badge
          key={k}
          variant="outline"
          className="font-mono text-xs min-w-6 justify-center bg-background border-border/50 shadow-sm"
        >
          {k}
        </Badge>
      ))}
    </Flex>
  </Flex>
);

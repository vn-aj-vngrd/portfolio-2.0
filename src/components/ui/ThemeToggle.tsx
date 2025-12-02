"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/Button";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full ${compact ? "w-8 h-8" : "w-9 h-9"} opacity-0`}
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const iconSize = compact ? "w-4 h-4" : "w-[1.2rem] h-[1.2rem]";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`rounded-full ${
        compact
          ? "w-8 h-8 hover:bg-muted text-muted-foreground hover:text-foreground"
          : "w-9 h-9"
      }`}
    >
      <div className={`relative ${iconSize}`}>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute inset-0"
        >
          <Sun className="w-full h-full" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute inset-0"
        >
          <Moon className="w-full h-full" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

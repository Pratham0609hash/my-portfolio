"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Determine current theme
    const isLightNode = document.documentElement.classList.contains("light");
    setTheme(isLightNode ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2.5 rounded-full border border-slate-200/10 dark:border-slate-800/10 glass-panel bg-white/10 dark:bg-slate-900/10 text-slate-600 dark:text-white hover:bg-white/20 dark:hover:bg-slate-900/20 active:scale-95 transition-colors cursor-pointer relative"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 m-auto flex items-center justify-center h-5 w-5"
      >
        <Moon className="h-5 w-5 text-indigo-400" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : -180, scale: theme === "light" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center h-5 w-5"
      >
        <Sun className="h-5 w-5 text-amber-500" />
      </motion.div>
    </motion.button>
  );
}

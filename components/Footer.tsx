"use client";

import { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom LinkedIn SVG Icon
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2050/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom GitHub SVG Icon
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.2 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full py-12 px-6 border-t border-slate-350/50 dark:border-slate-800/80 bg-slate-950/20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 font-bold text-white text-sm shadow-[0_0_10px_rgba(99,102,241,0.2)]">
              PR
            </div>
            <span className="font-extrabold text-sm tracking-tight text-slate-600 dark:text-white">
              Pratham Rathod
            </span>
          </div>
          <span className="text-[10px] text-slate-600 font-medium mt-1">
            Information Technology Student & Aspiring Data / Software Engineer
          </span>
        </div>

        {/* Quick Links Map */}
        <div className="flex items-center gap-6 text-xs font-semibold text-slate-650 dark:text-slate-350">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </a>
          <button onClick={() => handleScrollTo("about")} className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0">
            About
          </button>
          <button onClick={() => handleScrollTo("projects")} className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0">
            Projects
          </button>
          <button onClick={() => handleScrollTo("contact")} className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-0">
            Contact
          </button>
        </div>

        {/* Outer Social handles & Copyrights */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/pratham-rathod-19b631341?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-350 dark:border-slate-800 hover:border-indigo-400 text-slate-600 dark:text-white hover:text-indigo-400 transition-all hover:scale-105 cursor-pointer bg-white/5 dark:bg-slate-900/10"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Pratham0609hash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-350 dark:border-slate-800 hover:border-cyan-400 text-slate-600 dark:text-white hover:text-cyan-400 transition-all hover:scale-105 cursor-pointer bg-white/5 dark:bg-slate-900/10"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:rathod.pratham12345@gmail.com"
              className="p-2 rounded-lg border border-slate-350 dark:border-slate-800 hover:border-violet-400 text-slate-600 dark:text-white hover:text-violet-400 transition-all hover:scale-105 cursor-pointer bg-white/5 dark:bg-slate-900/10"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          
          <div className="text-[10px] text-slate-506 dark:text-white font-medium">
            &copy; {new Date().getFullYear()} — Made with ❤️ by Pratham Rathod. All rights reserved.
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 p-3 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all shadow-lg hover:shadow-indigo-500/20 z-40 cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";

// Custom LinkedIn SVG Icon
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
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

const subTitles = [
  "Information Technology Student",
  "Full Stack Developer",
  "Aspiring Data Engineer",
  "AI & Analytics Enthusiast",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % subTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

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
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Local Spotlight Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-violet-600/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-indigo-400/20 dark:border-indigo-400/20 bg-indigo-500/5 backdrop-blur-md text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Welcome to my Workspace
        </motion.div>

        {/* Large Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-4 select-none"
        >
          <span className="text-slate-600 dark:text-white">Hi, I'm</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(99,102,241,0.15)]">
            Pratham Rathod
          </span>
        </motion.h1>

        {/* Animated Subtitle Rotation Carousel */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-350 dark:to-slate-205 bg-clip-text text-transparent flex items-center gap-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 inline-block animate-ping mr-1" />
              {subTitles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Introduction Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-white leading-relaxed mb-10 text-center font-normal"
        >
          Information Technology undergraduate with experience in developing full-stack
          applications, AI-driven systems, analytics dashboards, and scalable software solutions using
          <span className="font-semibold text-slate-600 dark:text-white"> Python, SQL, React, Flask, FastAPI, Kubernetes, Machine Learning,</span> and Data Visualization technologies.
        </motion.p>

        {/* Action Buttons Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 items-center"
        >
          {/* Primary View Projects */}
          <button
            onClick={() => handleScrollTo("projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            View Projects
            <ArrowRight className="h-4.5 w-4.5" />
          </button>

          {/* Secondary Download Resume */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download triggered (Mockup). All resume values are present on this site!");
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel dark:hover:bg-slate-900 border border-slate-350 dark:border-slate-800 text-slate-600 dark:text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-100 hover:border-slate-400 cursor-pointer active:scale-[0.98]"
          >
            Download Resume
            <Download className="h-4 w-4 text-violet-400" />
          </a>

          {/* Tertiary Contact Link */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="py-2.5 text-sm font-semibold text-slate-650 hover:text-cyan-400 dark:text-slate-350 dark:hover:text-cyan-400 border-b border-transparent hover:border-cyan-455 transition-all cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons Column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/pratham-rathod-19b631341?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel border border-slate-350 dark:border-slate-800 hover:border-indigo-400 text-slate-600 dark:text-white hover:text-indigo-400 transition-all hover:scale-110 cursor-pointer hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            title="LinkedIn - Pratham Rathod"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Pratham0609hash"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel border border-slate-350 dark:border-slate-800 hover:border-cyan-400 text-slate-600 dark:text-white hover:text-cyan-400 transition-all hover:scale-110 cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            title="GitHub - rathodpratham12345"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:rathod.pratham12345@gmail.com"
            className="p-3 rounded-full glass-panel border border-slate-350 dark:border-slate-800 hover:border-violet-400 text-slate-600 dark:text-white hover:text-violet-400 transition-all hover:scale-110 cursor-pointer hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            title="Email - rathod.pratham12345@gmail.com"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

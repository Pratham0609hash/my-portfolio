"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Monitor screen scrolling for glass activation and active section observer
  useEffect(() => {
    const handleScroll = () => {
      // Background dark/scrolled opacity change
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
      
      // Fallback for top of page
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(href.substring(1));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "glass-navbar py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo text: PR */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 font-bold text-white text-lg tracking-wider shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300">
            PR
            <div className="absolute inset-[1px] rounded-[11px] bg-slate-950 dark:bg-slate-950 light:bg-white flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 via-violet-400 to-cyan-400 text-lg transition-colors group-hover:text-white">
              PR
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Pratham Rathod
          </span>
        </a>

        {/* Desktop Menu Link Options */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`relative py-1 text-sm font-medium transition-colors hover:text-cyan-400 cursor-pointer ${
                    activeSection === item.href
                      ? "text-cyan-400 dark:text-cyan-400"
                      : "text-slate-600 dark:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions panel (Social profiles, Theme toggle, Hamburger menu trigger) */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 border-r border-slate-250 dark:border-slate-800 pr-4 mr-1">
            <a
              href="https://www.linkedin.com/in/pratham-rathod-19b631341?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-white hover:text-indigo-400 dark:hover:text-indigo-400 cursor-pointer transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Pratham0609hash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 cursor-pointer transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:rathod.pratham12345@gmail.com"
              className="p-2 text-slate-600 dark:text-white hover:text-violet-400 dark:hover:text-violet-400 cursor-pointer transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <ThemeToggle />

          {/* Hamburger Trigger for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full glass-panel text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full glass-navbar overflow-hidden border-t border-slate-800/10 dark:border-slate-800/50"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className={`block py-2 text-base font-semibold hover:text-cyan-400 transition-colors ${
                      activeSection === item.href
                        ? "text-cyan-400"
                        : "text-slate-600 dark:text-slate-350"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-200/10 dark:border-slate-800/50 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/pratham-rathod-19b631341?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-white hover:text-indigo-400 cursor-pointer"
                >
                  <Linkedin className="h-5.5 w-5.5" />
                </a>
                <a
                  href="https://github.com/Pratham0609hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-white hover:text-cyan-400 cursor-pointer"
                >
                  <Github className="h-5.5 w-5.5" />
                </a>
                <a
                  href="mailto:rathod.pratham12345@gmail.com"
                  className="p-2 text-slate-600 dark:text-white hover:text-violet-400 cursor-pointer"
                >
                  <Mail className="h-5.5 w-5.5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

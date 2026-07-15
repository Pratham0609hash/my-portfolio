"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Globe, Brain, BarChart3, Settings2 } from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "aiml" | "analytics" | "tools" | "concepts";
  level: number;
}

const skillsData: SkillItem[] = [
  // Programming
  { name: "Python", category: "languages", level: 65 },
  { name: "SQL", category: "languages", level: 60 },
  { name: "JavaScript", category: "languages", level: 58 },
  { name: "C++", category: "languages", level: 55 },
  { name: "C", category: "languages", level: 52 },
  // Frontend
  { name: "React.js", category: "frontend", level: 62 },
  { name: "HTML5", category: "frontend", level: 65 },
  { name: "CSS3", category: "frontend", level: 60 },
  { name: "Tailwind CSS", category: "frontend", level: 65 },
  { name: "Bootstrap", category: "frontend", level: 58 },
  // Backend
  { name: "FastAPI", category: "backend", level: 58 },
  { name: "Flask", category: "backend", level: 60 },
  { name: "Node.js", category: "backend", level: 55 },
  { name: "REST API Integration", category: "backend", level: 62 },
  { name: "MySQL", category: "backend", level: 60 },
  // AI & ML
  { name: "Scikit-learn", category: "aiml", level: 58 },
  { name: "Natural Language Processing (NLP)", category: "aiml", level: 55 },
  // Data Analytics
  { name: "Power BI", category: "analytics", level: 60 },
  { name: "Tableau", category: "analytics", level: 55 },
  { name: "Microsoft Excel", category: "analytics", level: 62 },
  { name: "Matplotlib", category: "analytics", level: 58 },
  // Dev Tools & Concepts
  { name: "Git", category: "tools", level: 60 },
  { name: "GitHub", category: "tools", level: 65 },
  { name: "GitHub Actions", category: "tools", level: 52 },
  { name: "Linux", category: "tools", level: 58 },
  { name: "Cursor", category: "tools", level: 65 },
  { name: "GitHub Copilot", category: "tools", level: 65 },
  { name: "Vercel", category: "tools", level: 60 },
  { name: "Data Mining", category: "concepts", level: 58 },
  { name: "Business Analysis", category: "concepts", level: 52 },
];

const categoryTabs = [
  { id: "all", label: "All Skills", icon: <Settings2 className="h-4 w-4" /> },
  { id: "languages", label: "Languages & DB", icon: <Code className="h-4 w-4" /> },
  { id: "web", label: "Web (UI & API)", icon: <Globe className="h-4 w-4" /> },
  { id: "data", label: "AI & Analytics", icon: <Brain className="h-4 w-4" /> },
  { id: "tools", label: "Tools & Concepts", icon: <BarChart3 className="h-4 w-4" /> },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredSkills = () => {
    switch (activeTab) {
      case "languages":
        return skillsData.filter((s) => s.category === "languages");
      case "web":
        return skillsData.filter((s) => s.category === "frontend" || s.category === "backend");
      case "data":
        return skillsData.filter((s) => s.category === "aiml" || s.category === "analytics");
      case "tools":
        return skillsData.filter((s) => s.category === "tools" || s.category === "concepts");
      default:
        return skillsData;
    }
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Background neon blob */}
      <div className="absolute left-1/10 bottom-10 w-72 h-72 rounded-full bg-indigo-500/5 blur-[90px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Expertise & Skills
        </h2>
        <div className="h-[3px] w-12 bg-violet-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Categories Filter Tabs Menu */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 border transition-all cursor-pointer relative ${
              activeTab === tab.id
                ? "border-transparent text-white"
                : "border-slate-350/50 dark:border-slate-800 bg-white/5 dark:bg-slate-900/10 text-slate-600 dark:text-white hover:border-indigo-400/50"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeSkillTabBg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              key={skill.name}
              className="p-5 rounded-2xl glass-panel glow-card bg-slate-900/40 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-sm text-slate-600 dark:text-white">{skill.name}</span>
                <span className="text-[10px] font-bold text-cyan-400 font-mono tracking-wider uppercase">
                  Intermediate
                </span>
              </div>

              {/* Progress bar container */}
              <div className="w-full h-1.5 bg-slate-500/10 dark:bg-slate-800/80 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

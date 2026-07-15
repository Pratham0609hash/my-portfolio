"use client";

import { motion } from "framer-motion";
import { Trophy, ShieldAlert, Award, Calendar } from "lucide-react";

interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  glowClass: string;
}

export default function Achievements() {
  const achievementsList: Achievement[] = [
    {
      title: "National Finalist",
      subtitle: "DECODE X 2026",
      date: "2026",
      description:
        "Advanced to the national finals of the DECODE X competition by developing a data-driven constrained optimization strategy for operational demand analysis. Designed analytical modeling formulas to forecast workloads and optimized routing variables.",
      icon: <Award className="h-5 w-5 text-indigo-400" />,
      glowClass: "shadow-[0_0_15px_rgba(99,102,241,0.5)] border-indigo-500",
    },
    {
      title: "Winner",
      subtitle: "KJSIT Campus Hackathon 2025",
      date: "2025",
      description:
        "Recognized as one of the winning teams for developing an innovative technology solution during the institute-level hackathon organized by the Project Competition Cell (PCC) and Institution’s Innovation Council (IIC). Engineered full-stack modules under rigid time constraints.",
      icon: <Trophy className="h-5 w-5 text-amber-500" />,
      glowClass: "shadow-[0_0_15px_rgba(245,158,11,0.5)] border-amber-500",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Background decoration */}
      <div className="absolute right-10 top-1/3 w-64 h-64 rounded-full bg-indigo-500/5 blur-[80px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Key Achievements
        </h2>
        <div className="h-[3px] w-12 bg-indigo-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-250 dark:border-slate-800/80 ml-4 sm:ml-32 pl-8 sm:pl-12 py-4 space-y-12">
        {achievementsList.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            key={item.subtitle}
            className="relative"
          >
            {/* Timeline node dot */}
            <div
              className={`absolute -left-[41px] sm:-left-[57px] top-1 h-6 w-6 rounded-full bg-slate-950 dark:bg-slate-950 light:bg-white border-2 flex items-center justify-center z-10 ${item.glowClass}`}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-white light:bg-slate-900" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl border border-slate-350 dark:border-slate-800 bg-slate-900/40 light:bg-white glass-panel glow-card hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                {/* Header title */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-500/5 dark:bg-slate-800/80 border border-slate-750 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-600 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Date stamp */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-350/50 dark:border-slate-800/80 bg-slate-500/5 text-xs text-slate-600 dark:text-white font-medium self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-white leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
  gradeLabel: string;
}

export default function Education() {
  const educationData: EducationItem[] = [
    {
      institution: "K. J. Somaiya Institute of Technology",
      degree: "B.Tech in Information Technology",
      duration: "Aug. 2023 – Jun. 2027",
      location: "Mumbai, Maharashtra",
      grade: "8.45/10",
      gradeLabel: "CGPA",
    },
    {
      institution: "Elphinstone College",
      degree: "Higher Secondary Certificate (HSC) — Science",
      duration: "Jul. 2021 – Jul. 2023",
      location: "Mumbai, Maharashtra",
      grade: "60.33%",
      gradeLabel: "Percentage",
    },
    {
      institution: "Antonio De Souza High School",
      degree: "Secondary School Certificate (SSC)",
      duration: "Jul. 2011 – Jul. 2021",
      location: "Mumbai, Maharashtra",
      grade: "84.00%",
      gradeLabel: "Percentage",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 relative max-w-5xl mx-auto">
      {/* Background decoration */}
      <div className="absolute left-10 bottom-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[90px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Education History
        </h2>
        <div className="h-[3px] w-12 bg-cyan-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-250 dark:border-slate-800/80 ml-4 sm:ml-32 pl-8 sm:pl-12 py-4 space-y-12">
        {educationData.map((edu, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            key={edu.institution}
            className="relative"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 h-6 w-6 rounded-full bg-slate-950 dark:bg-slate-950 light:bg-white border-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.4)] flex items-center justify-center z-10">
              <GraduationCap className="h-3 w-3 text-cyan-400" />
            </div>

            {/* Content card */}
            <div className="p-6 rounded-2xl border border-slate-350 dark:border-slate-800 bg-slate-900/40 light:bg-white glass-panel glow-card hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300">
              {/* Institution details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-600 dark:text-white flex items-center gap-2">
                    <Landmark className="h-4.5 w-4.5 text-slate-600" />
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mt-1">
                    {edu.degree}
                  </p>
                </div>

                {/* Score badge details */}
                <div className="px-3.5 py-1.5 rounded-xl border border-cyan-400/20 bg-cyan-500/5 text-cyan-705 dark:text-cyan-400 text-xs font-bold self-start sm:self-auto flex flex-col items-center">
                  <span className="text-[9px] uppercase tracking-wider text-slate-600 font-medium">
                    {edu.gradeLabel}
                  </span>
                  <span>{edu.grade}</span>
                </div>
              </div>

              {/* Sub-meta (Duration, Location) */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-505 dark:text-slate-450 font-medium border-t border-slate-200/10 dark:border-slate-805/50 pt-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {edu.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {edu.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Trophy, Code2, Award, Terminal } from "lucide-react";

interface StatItem {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  icon: React.ReactNode;
  decimal?: boolean;
}

function StatCounter({ item }: { item: StatItem }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const duration = 1500; // Total duration in ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setValue(progress * item.targetValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setValue(item.targetValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, item.targetValue]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl glass-panel glow-card bg-slate-900/40 relative flex flex-col justify-between h-36"
    >
      <div className="flex items-center justify-between text-indigo-400">
        {item.icon}
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600">Metric</span>
      </div>
      <div>
        <h3 className="text-3xl font-extrabold tracking-tight mt-3">
          {item.decimal ? value.toFixed(2) : Math.floor(value)}
          {item.suffix}
        </h3>
        <p className="text-xs text-slate-600 dark:text-white mt-1 font-medium">{item.label}</p>
      </div>
    </div>
  );
}

export default function About() {
  const statsList: StatItem[] = [
    {
      id: "cgpa",
      label: "CGPA",
      targetValue: 8.45,
      suffix: "/10",
      decimal: true,
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: "hacks",
      label: "Hackathons Participated",
      targetValue: 2,
      suffix: "",
      icon: <Trophy className="h-5 w-5 text-amber-500" />,
    },
    {
      id: "projects",
      label: "Worked on Projects",
      targetValue: 3,
      suffix: "+",
      icon: <Code2 className="h-5 w-5 text-cyan-400" />,
    },
    {
      id: "techs",
      label: "Technologies Mastered",
      targetValue: 20,
      suffix: "+",
      icon: <Award className="h-5 w-5 text-violet-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Background blobs */}
      <div className="absolute right-10 top-20 w-72 h-72 rounded-full bg-cyan-500/5 blur-[80px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="h-[3px] w-12 bg-indigo-500 mx-auto mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Mock Developer Profile Code IDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 w-full rounded-2xl border border-slate-350 dark:border-slate-800 bg-slate-950/80 shadow-2xl overflow-hidden font-mono text-xs text-slate-300 pointer-events-auto"
        >
          {/* Header Panel */}
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-350/10 dark:border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-slate-600 font-medium flex items-center gap-1.5">
              <Terminal className="h-3 w-3" /> pratham_rathod.json
            </span>
            <div className="w-12" />
          </div>

          {/* IDE Content */}
          <div className="p-6 space-y-2 select-none overflow-x-auto leading-relaxed">
            <div><span className="text-indigo-400">{"{"}</span></div>
            <div className="pl-4">
              <span className="text-cyan-400">"candidate"</span>: <span className="text-amber-300">"Pratham Rathod"</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"academicRole"</span>: <span className="text-amber-300">"IT Undergraduate"</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"focus"</span>: <span className="text-indigo-400">{"["}</span>
              <div className="pl-4 text-violet-300">
                "Data Engineering",<br />
                "Software Development",<br />
                "AI & Analytics Systems"
              </div>
              <span className="text-indigo-400">{" ]"}</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"strengths"</span>: <span className="text-indigo-400">{"["}</span>
              <div className="pl-4 text-violet-300">
                "Problem Solving",<br />
                "Scalable Architecture",<br />
                "Automation Pipelines"
              </div>
              <span className="text-indigo-400">{" ]"}</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"location"</span>: <span className="text-amber-300">"Mumbai, Maharashtra"</span>,
            </div>
            <div className="pl-4">
              <span className="text-cyan-400">"status"</span>: <span className="text-emerald-400">"Open to Opportunities"</span>
            </div>
            <div><span className="text-indigo-400">{"}"}</span></div>
          </div>
        </motion.div>

        {/* Right Side: Professional Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-white mb-4">
              Information Technology Undergraduate & Aspiring Engineer
            </h3>
            <p className="text-slate-600 dark:text-white leading-relaxed text-sm sm:text-base font-normal">
              I am an energetic and motivated Information Technology student at K. J. Somaiya Institute of Technology. I am deeply interested in building high-performance software, setting up resilient cloud infrastructures, designing smart AI-driven automation, and developing optimized database models.
            </p>
            <p className="text-slate-600 dark:text-white leading-relaxed text-sm sm:text-base mt-4 font-normal">
              My engineering experience focuses on engineering scalable pipelines and solid APIs using frameworks like Python, FastAPI, and Flask, writing high-performance smart contracts on Ethereum, and autoscaling Kubernetes nodes to drive data pipelines and dashboard visualizations.
            </p>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-4">
            {statsList.map((stat) => (
              <StatCounter key={stat.id} item={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

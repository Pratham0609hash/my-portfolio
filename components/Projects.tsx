"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

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

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  techs: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  bgDecorative: React.ReactNode;
}

export default function Projects() {
  const projectsData: ProjectItem[] = [
    {
      id: "pod-mgmt",
      title: "Autonomous Pod Management System for Predictive Autoscaling & Self-Healing",
      year: "2026",
      techs: ["Python", "Kubernetes", "TensorFlow", "Prometheus", "Grafana", "Locust", "K6"],
      features: [
        "Engineered an AI-driven Kubernetes management platform combining predictive autoscaling with self-healing.",
        "Integrated an LSTM-based workload prediction model to proactively scale pods before traffic spikes.",
        "Implemented Prometheus and Grafana dashboards for monitoring CPU, memory, pod health, and metrics.",
        "Performed intensive benchmarking using Locust and K6 to validate autoscaling latency and recovery.",
      ],
      githubUrl: "#",
      demoUrl: "#",
      icon: <Cpu className="h-6 w-6 text-indigo-400" />,
      bgDecorative: (
        // Kubernetes telemetry screen
        <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-4 font-mono text-[9px] text-indigo-400 select-none overflow-hidden">
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
            <span>[K8S-AUTOPOD-MONITOR]</span>
            <span className="text-emerald-400 animate-pulse">● STABLE</span>
          </div>
          <div className="space-y-1 my-2 flex-1">
            <div>$ kubectl get pods --namespace=ai-system</div>
            <div className="text-slate-600">NAME           READY   STATUS    RESTART   AGE</div>
            <div className="flex justify-between">
              <span>lstm-predictor-7ff   1/1</span>
              <span className="text-emerald-400">Running</span>
              <span>0</span>
              <span>4m</span>
            </div>
            <div className="flex justify-between">
              <span>pod-autoscaler-2b   1/1</span>
              <span className="text-emerald-400">Running</span>
              <span>0</span>
              <span>12m</span>
            </div>
            <div className="flex justify-between">
              <span>replica-target-99   1/1</span>
              <span className="text-pink-400">Scaling</span>
              <span>1</span>
              <span>1s</span>
            </div>
          </div>
          <div className="h-8 flex items-end gap-1.5 border-t border-indigo-500/20 pt-1.5">
            <div className="flex-1 bg-indigo-500/40 h-4 rounded-[1px] animate-pulse" />
            <div className="flex-1 bg-indigo-500/20 h-6 rounded-[1px]" />
            <div className="flex-1 bg-indigo-500/60 h-3 rounded-[1px] animate-pulse" />
            <div className="flex-1 bg-cyan-500/45 h-8 rounded-[1px]" />
            <div className="flex-1 bg-cyan-500/20 h-5 rounded-[1px]" />
          </div>
        </div>
      ),
    },
    {
      id: "blockchain",
      title: "Blockchain-Based Certificate Verification System",
      year: "2025",
      techs: ["Solidity", "React.js", "Node.js", "Express.js", "MongoDB", "Ethereum"],
      features: [
        "Developed a blockchain-based platform to securely issue and verify academic certificates.",
        "Implemented Solidity smart contracts to enable immutable certificate storage and transparent verification.",
        "Built a responsive React.js dashboard for institutions to issue and users to verify authenticity.",
        "Integrated secure role-based authentication to govern certificate generation pipelines.",
      ],
      githubUrl: "#",
      demoUrl: "#",
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
      bgDecorative: (
        // Blockchain blocks animation
        <div className="absolute inset-0 bg-slate-950 flex items-center justify-center p-4 font-mono text-[9px] text-cyan-400 select-none overflow-hidden">
          <div className="flex items-center gap-4 relative">
            <div className="relative p-2 rounded border border-cyan-505/30 bg-slate-900/60 flex flex-col items-center">
              <span>BLOCK #127</span>
              <span className="text-[7px] text-slate-600">Hash: 8f2c..e</span>
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1 animate-ping" />
            </div>
            <div className="h-[2px] w-8 bg-gradient-to-r from-cyan-400 to-indigo-500 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </div>
            <div className="p-2 rounded border border-indigo-500/30 bg-slate-900/60 flex flex-col items-center">
              <span>BLOCK #128</span>
              <span className="text-[7px] text-slate-600">Hash: 4a9d..b</span>
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "stockguru",
      title: "StockGuru — Stock Market Dashboard Application",
      year: "2025",
      techs: ["Python", "Flask", "React.js", "MySQL", "yFinance", "Matplotlib"],
      features: [
        "Developed a full-stack stock analysis platform providing real-time insights for NSE and BSE listed stocks.",
        "Integrated the yFinance API to dynamically retrieve live prices, historical indexes, and financial details.",
        "Designed interactive dashboards using Flask and Matplotlib to visualize stock trends.",
        "Implemented secure authentication, stock search, and optimized MySQL database operations.",
      ],
      githubUrl: "#",
      demoUrl: "#",
      icon: <TrendingUp className="h-6 w-6 text-violet-400" />,
      bgDecorative: (
        // Stock market sparklines chart
        <div className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-4 font-mono text-[9px] text-violet-400 select-none overflow-hidden">
          <div className="flex items-center justify-between border-b border-violet-500/20 pb-2">
            <span>[TICKER: SENSEX]</span>
            <span className="text-violet-400">+1.24% ▲</span>
          </div>
          <div className="relative flex-1 flex items-center justify-center my-3">
            {/* Sparkline curve */}
            <svg className="w-full h-16 stroke-violet-500 stroke-2 fill-none overflow-visible">
              <path d="M 0 50 Q 30 10, 60 40 T 120 5 T 180 30 T 240 10 T 320 20" />
              <path d="M 0 50 Q 30 10, 60 40 T 120 5 T 180 30 T 240 10 T 320 20 L 320 60 L 0 60 Z" className="fill-violet-500/10 stroke-none" />
              <circle cx="320" cy="20" r="3" className="fill-cyan-400 animate-pulse" />
            </svg>
          </div>
          <div className="flex justify-between border-t border-violet-500/20 pt-1.5 text-[8px] text-slate-600">
            <span>1D</span>
            <span>1W</span>
            <span>1M</span>
            <span>1Y</span>
            <span>5Y</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Background decoration */}
      <div className="absolute right-1/10 bottom-24 w-80 h-80 rounded-full bg-cyan-600/5 blur-[120px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="h-[3px] w-12 bg-cyan-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Projects Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            key={project.id}
            className="rounded-2xl border border-slate-350 dark:border-slate-800 bg-slate-900/40 dark:bg-slate-900/40 light:bg-white overflow-hidden flex flex-col justify-between glow-card shadow-lg hover:shadow-2xl hover:border-slate-300 transition-all duration-300"
          >
            {/* Visual Header / Placeholder Graph */}
            <div className="relative h-44 w-full border-b border-slate-350 dark:border-slate-800/80 bg-slate-950">
              {project.bgDecorative}
              {/* Year Badge */}
              <span className="absolute top-4 right-4 px-2 py-1 rounded bg-slate-950/80 border border-slate-800 text-[10px] uppercase font-bold tracking-wider text-slate-600 dark:text-white">
                {project.year}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Title */}
                <div className="flex items-center gap-2 mb-3">
                  {project.icon}
                  <h3 className="text-base sm:text-lg font-bold text-slate-600 dark:text-white line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-400/20 text-indigo-700 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-600 dark:text-white">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 font-normal leading-relaxed">
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Layers, BrainCircuit, Blocks, CloudLightning, LineChart } from "lucide-react";

interface ExpCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderClass: string;
  techs: string[];
}

export default function Experience() {
  const experiences: ExpCard[] = [
    {
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications. Designing frontend layouts in React.js, writing robust servers in Node.js/Express, setting up REST interfaces, and managing optimized relational/non-relational stores (MongoDB, MySQL).",
      icon: <Layers className="h-6 w-6 text-indigo-400" />,
      borderClass: "hover:border-indigo-500/50",
      techs: ["React.js", "Node.js", "Express", "Flask", "REST APIs", "MySQL", "MongoDB"],
    },
    {
      title: "AI Solutions",
      description:
        "Designing Machine Learning integrations. Building predictive sequence estimators (LSTM networks) in TensorFlow, employing estimators in Scikit-learn, and handling text parsing with NLP methodologies.",
      icon: <BrainCircuit className="h-6 w-6 text-cyan-400" />,
      borderClass: "hover:border-cyan-500/50",
      techs: ["Python", "TensorFlow", "Scikit-learn", "NLP", "Matplotlib"],
    },
    {
      title: "Blockchain Applications",
      description:
        "Familiar with smart contract development. Authoring Solidity contracts, administering user scopes in smart applications, and managing verification ledgers on the Ethereum decentralized blockchain.",
      icon: <Blocks className="h-6 w-6 text-pink-400" />,
      borderClass: "hover:border-pink-500/50",
      techs: ["Solidity", "Smart Contracts", "Ethereum", "MongoDB"],
    },
    {
      title: "Cloud Native Projects",
      description:
        "Deploying and orchestrating microservice systems. Setting up scaling routines in Kubernetes environments, logging pod parameters in Prometheus, and tracking operational metrics inside Grafana dashboards.",
      icon: <CloudLightning className="h-6 w-6 text-violet-400" />,
      borderClass: "hover:border-violet-500/50",
      techs: ["Kubernetes", "Docker", "Prometheus", "Grafana", "K6", "Locust"],
    },
    {
      title: "Data Analytics",
      description:
        "Converting complex raw datasets into intelligence summaries. Developing clear models in Power BI and Tableau, building custom graphs in Matplotlib, and conducting business forecasting.",
      icon: <LineChart className="h-6 w-6 text-emerald-400" />,
      borderClass: "hover:border-emerald-500/50",
      techs: ["Power BI", "Tableau", "Excel", "Matplotlib", "Data Mining"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Background radial lights */}
      <div className="absolute left-1/3 top-10 w-80 h-80 rounded-full bg-violet-600/5 blur-[110px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Engineering Experience
        </h2>
        <div className="h-[3px] w-12 bg-indigo-505 mx-auto mt-3 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
      </div>

      {/* Experience Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={exp.title}
            className={`p-6 rounded-2xl border border-slate-350 dark:border-slate-800 bg-slate-905/40 bg-slate-900/40 light:bg-white flex flex-col justify-between glow-card shadow hover:shadow-xl transition-all duration-300 ${exp.borderClass}`}
          >
            <div>
              {/* Icon & Title Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-slate-500/5 dark:bg-slate-800/80 border border-slate-750 flex items-center justify-center">
                  {exp.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-600 dark:text-white">{exp.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-605 dark:text-slate-405 leading-relaxed font-normal mb-6">
                {exp.description}
              </p>
            </div>

            {/* Tags footer */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-200/10 dark:border-slate-800/50">
              {exp.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/5 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

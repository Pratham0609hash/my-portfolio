"use client";

import { motion } from "framer-motion";
import { Lock, Award } from "lucide-react";

interface CertificateGoal {
  title: string;
  issuer: string;
  status: string;
  topic: string;
}

export default function Certifications() {
  const certificationsData: CertificateGoal[] = [
    {
      title: "Google Cloud Certified",
      issuer: "Professional Data Engineer",
      status: "Preparation Phase",
      topic: "BigQuery, Dataflow, Dataproc, Pub/Sub, Vertex AI, Architecture Principles",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      status: "In Progress",
      topic: "Cluster Architecture, Workloads, Services, Storage, Troubleshooting and Logging",
    },
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      status: "Preparation Phase",
      topic: "Serverless Applications, AWS Elastic Beanstalk, DynamoDB, Cognito and IAM",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Background decoration */}
      <div className="absolute right-1/4 top-10 w-64 h-64 rounded-full bg-violet-500/5 blur-[80px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="h-[3px] w-12 bg-violet-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Grid of Certifications Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={item.title}
            className="p-6 rounded-2xl border border-slate-350 dark:border-slate-850 dark:border-slate-800 bg-slate-950/40 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Pulsing overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-50" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="p-2.5 rounded-xl bg-slate-500/5 dark:bg-slate-800/80 border border-slate-800 flex items-center justify-center text-slate-600">
                  <Award className="h-5 w-5 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[9px] uppercase font-bold tracking-wider text-slate-600">
                  <Lock className="h-3 w-3 text-cyan-400" />
                  {item.status}
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="relative z-10 mb-4">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-600 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-indigo-400 font-semibold tracking-wider mt-1">{item.issuer}</p>
              </div>

              {/* Topics */}
              <p className="text-[11px] text-slate-600 dark:text-white relative z-10 leading-relaxed font-normal">
                {item.topic}
              </p>
            </div>

            {/* Bottom spacer */}
            <div className="mt-8 text-[10px] text-slate-600 flex items-center gap-1 relative z-10 italic">
              Verification files coming soon.
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global placeholder alert note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center p-4 rounded-xl border border-indigo-400/20 bg-indigo-500/5 max-w-md mx-auto"
      >
        <p className="text-xs text-indigo-755 dark:text-indigo-350 font-medium">
          🚀 Preparing for core Cloud and Data examinations. More official certifications coming soon!
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Background neon light */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="h-[3px] w-12 bg-indigo-500 mx-auto mt-3 rounded-full" />
      </div>

      <div className="flex justify-center">
        {/* Contact Information Card */}
        <div className="w-full max-w-xl p-6 rounded-2xl border border-slate-350 dark:border-slate-800 bg-slate-900/40 light:bg-white glass-panel flex flex-col gap-6">
          <h3 className="text-xl font-bold text-slate-600 dark:text-white text-center">Contact Info</h3>
          
          {/* Items */}
          <div className="space-y-4">
            <a
              href="mailto:rathod.pratham12345@gmail.com"
              className="flex items-center gap-3.5 p-3 rounded-xl border border-transparent hover:border-slate-350/50 dark:hover:border-slate-800 hover:bg-slate-500/5 transition-all text-slate-600 dark:text-white hover:text-indigo-400 cursor-pointer"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Email</span>
                <span className="text-xs sm:text-sm font-semibold">rathod.pratham12345@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+919004217987"
              className="flex items-center gap-3.5 p-3 rounded-xl border border-transparent hover:border-slate-350/50 dark:hover:border-slate-800 hover:bg-slate-500/5 transition-all text-slate-600 dark:text-white hover:text-cyan-400 cursor-pointer"
            >
              <div className="h-10 w-10 rounded-lg bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Call</span>
                <span className="text-xs sm:text-sm font-semibold">+91 90042 17987</span>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-3 rounded-xl border border-transparent text-slate-600 dark:text-slate-303 select-none">
              <div className="h-10 w-10 rounded-lg bg-violet-500/5 dark:bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-violet-400">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Location</span>
                <span className="text-xs sm:text-sm font-semibold">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

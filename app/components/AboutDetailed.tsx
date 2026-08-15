"use client";

import { useState } from "react";
import { User, Shield, Target, Dumbbell, Code2, CheckCircle2, Compass, Cpu, Flame } from "lucide-react";

export default function AboutDetailed(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<"journey" | "focus" | "objective">("journey");

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#110720] via-[#0d051a] to-[#110720]">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Personal Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Mark Oliver</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Information Systems Student at De La Salle - College of Saint Benilde. Passionate about Software QA Testing, AI Automation, Learning New Skills & Technologies, Career Growth, and Fitness.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("journey")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${activeTab === "journey"
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-purple-400 shadow-lg shadow-purple-900/50 scale-105"
              : "bg-slate-950/60 text-white/70 border-white/10 hover:border-purple-500/30 hover:text-white"
              }`}
          >
            <Compass className="w-4 h-4 text-purple-300" />
            <span>1. My Journey</span>
          </button>

          <button
            onClick={() => setActiveTab("focus")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${activeTab === "focus"
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-purple-400 shadow-lg shadow-purple-900/50 scale-105"
              : "bg-slate-950/60 text-white/70 border-white/10 hover:border-purple-500/30 hover:text-white"
              }`}
          >
            <Cpu className="w-4 h-4 text-purple-300" />
            <span>2. Core Focus Areas</span>
          </button>

          <button
            onClick={() => setActiveTab("objective")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${activeTab === "objective"
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-purple-400 shadow-lg shadow-purple-900/50 scale-105"
              : "bg-slate-950/60 text-white/70 border-white/10 hover:border-purple-500/30 hover:text-white"
              }`}
          >
            <Target className="w-4 h-4 text-purple-300" />
            <span>3. Career Objective</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/20 shadow-2xl backdrop-blur-xl">

          {/* TAB 1: MY JOURNEY */}
          {activeTab === "journey" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">IT &amp; Fitness</h3>
                    <p className="text-xs text-purple-300 uppercase tracking-wider font-semibold">Discipline • Data Analytics • System Design</p>
                  </div>
                </div>

                <p className="text-base text-white/80 leading-relaxed">
                  My journey began with a passion for both technology and physical health. As an Information Systems Graduate, I quickly realized that software engineering and physical fitness share identical core principles: <strong className="text-purple-300">measurement, discipline, iterative testing, and progressive overload</strong>.
                </p>

                <p className="text-base text-white/80 leading-relaxed">
                  Whether analyzing macro-nutritional data or executing test cases, my mindset centers around breaking down complex systems into predictable, optimized components. This dual discipline inspired my Capstone project, <strong className="text-purple-300 font-semibold">BiteBalance</strong>, a progressive web application designed to help Filipino adults track nutrition through localized food databases and AI-powered insights.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20">
                    <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-1">
                      <Flame className="w-4 h-4 text-amber-400" /> Analytical Discipline
                    </h4>
                    <p className="text-xs text-white/70">Approaching bug tracking and system validation with metric-driven accuracy.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20">
                    <h4 className="font-semibold text-white text-sm flex items-center gap-2 mb-1">
                      <Code2 className="w-4 h-4 text-purple-400" /> User-Centric Solutions
                    </h4>
                    <p className="text-xs text-white/70">Designing digital products tailored to real human habits and cultural nutrition.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-violet-950/60 to-slate-950 border border-purple-500/30 space-y-4">
                  <h4 className="font-bold text-white text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Quick Highlights
                  </h4>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span><strong>Academic Background:</strong> De La Salle - College of Saint Benilde (BS Information Systems &apos;26)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span><strong>Honors:</strong> 3x Dean&apos;s Lister Recipient for academic excellence</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span><strong>Capstone Thesis:</strong> BiteBalance PWA — Nominated for Best Capstone Thesis</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span><strong>Primary Focus:</strong> Software Quality Assurance Testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CORE FOCUS AREAS */}
          {activeTab === "focus" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">Technical Specializations</h3>
                <p className="text-sm text-white/70">Bridging system reliability, defect detection, and web development.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Focus 1: QA & Testing */}
                <div className="p-6 rounded-2xl bg-slate-950/70 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Software &amp; Physical Hardware QA</h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Manual testing (Black Box, E2E, Smoke, Sanity, Regression, Spot), Playwright with Gemini CLI automation, AI Agent testing, hardware QA (Ayala Malls Parking Hardware), and physical item inspection (BabyPlus).
                  </p>
                  <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">Playwright CLI • Jira • Excel • Wikis</span>
                </div>

                {/* Focus 2: Web Development */}
                <div className="p-6 rounded-2xl bg-slate-950/70 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Web Development</h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Building responsive frontends and backends using React, Next.js, C#, SQL Server, TypeScript and Node.js.
                  </p>
                  <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">React • Next.js • C# • SQL</span>
                </div>

                {/* Focus 3: System Analysis */}
                <div className="p-6 rounded-2xl bg-slate-950/70 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Systems Analysis &amp; Design</h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Translating business requirements into detailed system workflows, ER diagrams, data flow diagrams, and Figma prototypes.
                  </p>
                  <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">UML • Figma • Requirements</span>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: CAREER OBJECTIVE */}
          {activeTab === "objective" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Career Objectives</h3>
                    <p className="text-xs text-purple-300 uppercase tracking-wider font-semibold">Manual & Automation Testng • AI Workflow Automation • Software Consulting</p>
                  </div>
                </div>

                <p className="text-base text-white/80 leading-relaxed">
                  As an Information Systems Graduate, my immediate objective is to secure a challenging <strong className="text-purple-300">Software Quality Assurance (QA) role</strong> where I can contribute my testing expertise, bug documentation skills, and analytical rigor while still learning new skills & technologies.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white text-sm">Key Value Contributions to Your Team:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Defect Prevention:</strong> Systematic test design to capture bugs prior to production releases.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Cross-Functional Clarity:</strong> Clear, actionable bug reporting for developers and stakeholders.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Continuous Learning:</strong> Rapidly adapting to enterprise tools, security frameworks, and CI/CD pipelines.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-900/30 via-slate-950 to-purple-950/30 border border-purple-500/30 text-center space-y-4 shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-purple-900/60 border border-purple-400/40 mx-auto flex items-center justify-center text-purple-300">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Ready for Placement</h4>
                  <p className="text-xs text-white/70">
                    Available for work opportunities. Equipped with hands-on capstone experience, formal test case management, web development knowledge, and Junior QA Internship Experience.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-semibold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all shadow-md"
                  >
                    Initiate Contact / Discuss Role
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

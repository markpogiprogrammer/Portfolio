"use client";

import {
  Building2,
  MapPin,
  Clock,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Sparkles,
  Zap,
  CheckSquare,
  BookOpen,
  Layers,
  ArrowRight,
  Bot,
  Package,
  Wrench
} from "lucide-react";

interface PracticumCompetency {
  title: string;
  category: string;
  badgeColor: string;
  icon: typeof ShieldCheck;
  description: string;
  skillsAcquired: string[];
  toolsUsed: string[];
}

const practicumCompetencies: PracticumCompetency[] = [
  {
    title: "Manual & Exploratory Testing Mastery",
    category: "Testing Lifecycle",
    badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    icon: ShieldCheck,
    description:
      "Executed systematic Black Box, Smoke, Sanity, Regression, Spot, and End-to-End testing cycles across live enterprise web platforms, mobile applications, and payment hardware.",
    skillsAcquired: [
      "End-to-End user journey validation and edge-case discovery",
      "Regression verification following builds and hotfixes",
      "Fast-feedback Smoke & Sanity build health assessments",
      "Dynamic unscripted Spot testing on critical modules"
    ],
    toolsUsed: ["Black Box Testing", "Regression", "Smoke & Sanity", "Spot Testing"]
  },
  {
    title: "Test Suite Engineering & Defect Lifecycle",
    category: "QA Operations",
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30",
    icon: CheckSquare,
    description:
      "Authored granular, reusable test cases targeting complex multi-tier enterprise logic. Managed the defect lifecycle with reproducible steps, expected vs. actual outcomes, and screenshot evidence.",
    skillsAcquired: [
      "Designing comprehensive test case repositories with boundary analysis",
      "Logging and classifying bugs by severity and priority in Jira and Excel",
      "Capturing annotated screenshot proof for rapid developer triage",
      "Verifying bug resolution and conducting sign-off regression"
    ],
    toolsUsed: ["Jira", "Microsoft Excel", "Chrome DevTools", "Bug Triage"]
  },
  {
    title: "Enterprise Documentation & Client Wikis",
    category: "Knowledge Transfer",
    badgeColor: "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30",
    icon: BookOpen,
    description:
      "Engineered structured technical documentation to bridge software capabilities with client end-users across multiple organizations, streamlining onboarding and system adoption.",
    skillsAcquired: [
      "Authoring multi-company User Manuals for enterprise HRIS & ERP systems",
      "Designing quick-reference Cheat Sheets for employee workflows",
      "Building client Knowledge Base Wikis for self-service support",
      "Documenting system workflows, timelines, and operational guides"
    ],
    toolsUsed: ["User Manuals", "Cheat Sheets", "Confluence / Wikis", "Project Timelines"]
  },
  {
    title: "Automation & Next-Gen AI QA Exploration",
    category: "Modern QA Tooling",
    badgeColor: "from-cyan-500/20 to-teal-500/20 text-cyan-300 border-cyan-500/30",
    icon: Bot,
    description:
      "Researched modern automation tools and AI-driven testing workflows to accelerate regression cycles and explore automated test case authoring with Large Language Models.",
    skillsAcquired: [
      "Developing browser automation scripts using Playwright and Gemini CLI",
      "Researching AI Agent testing paradigms for automated bug discovery",
      "Prompt engineering with Claude AI for rapid test case generation",
      "Investigating CI/CD test automation pipeline integrations"
    ],
    toolsUsed: ["Playwright", "Gemini CLI", "Claude AI", "AI Agent QA"]
  }
];

const testingMethodologies = [
  {
    name: "End-to-End (E2E) Testing",
    tag: "Full Journey",
    desc: "Validating complete multi-step user workflows across portals, mobile apps, and payment hardware.",
    icon: Layers
  },
  {
    name: "Black Box Testing",
    tag: "Spec-Driven",
    desc: "Validating software inputs and actual vs expected outputs purely against specifications.",
    icon: CheckSquare
  },
  {
    name: "Smoke Testing",
    tag: "Build Sanity",
    desc: "Executing critical preliminary checks to verify build stability before deep testing.",
    icon: Zap
  },
  {
    name: "Sanity Testing",
    tag: "Targeted Scope",
    desc: "Focused testing on modified modules and critical fixes after minor code releases.",
    icon: ShieldCheck
  },
  {
    name: "Regression Testing",
    tag: "Zero Regressions",
    desc: "Re-running test suites to ensure bug fixes or updates do not break existing features.",
    icon: Clock
  },
  {
    name: "Spot & Ad-Hoc Testing",
    tag: "Exploratory",
    desc: "Dynamic, unscripted spot checks targeting high-risk edge cases, hardware scanners, and UI states.",
    icon: Sparkles
  }
];

export default function InternshipExperience(): React.JSX.Element {
  return (
    <section id="internship" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#110720] via-[#0d051a] to-[#110720]">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <Building2 className="w-3.5 h-3.5" />
            <span>Professional Internship &amp; Practicum</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internship at{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Circuit Solutions Inc.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Completed a comprehensive <strong>500-Hour Quality Assurance Internship</strong> in Pasig City (Ortigas), executing manual testing, hardware QA, data reconciliation, user documentation, and AI-driven automation testing across enterprise systems.
          </p>

          {/* Company & Practicum Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs sm:text-sm font-medium text-white/90">
              <Building2 className="w-4 h-4 text-purple-400" />
              <span>Circuit Solutions Inc.</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs sm:text-sm font-medium text-white/90">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>Ortigas, Pasig City</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs sm:text-sm font-medium text-purple-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-amber-300">500 Hours Completed</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs sm:text-sm font-medium text-white/90">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Software QA Intern</span>
            </div>
          </div>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-purple-500/20 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">Total Practicum</span>
              <div className="p-2 rounded-lg bg-purple-900/40 text-purple-300 group-hover:scale-110 transition-transform">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">500 Hours</div>
            <p className="text-xs text-white/60 mt-1">Full-immersion QA engineering &amp; systems testing</p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-purple-500/20 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Testing Spectrum</span>
              <div className="p-2 rounded-lg bg-emerald-900/40 text-emerald-300 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">6 Methodologies</div>
            <p className="text-xs text-white/60 mt-1">E2E, Black Box, Smoke, Sanity, Regression, Spot</p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-purple-500/20 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Scope Covered</span>
              <div className="p-2 rounded-lg bg-cyan-900/40 text-cyan-300 group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Hardware + Software</div>
            <p className="text-xs text-white/60 mt-1">Web, Mobile Apps, ATM Terminals &amp; POS Scanners</p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-purple-500/20 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">Documentation</span>
              <div className="p-2 rounded-lg bg-pink-900/40 text-pink-300 group-hover:scale-110 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Manuals &amp; Wikis</div>
            <p className="text-xs text-white/60 mt-1">User guides, cheat sheets, Jira logs &amp; Excel sheets</p>
          </div>
        </div>

        {/* 4 Core Practicum Learnings & Responsibilities */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Practicum Learnings &amp; Responsibilities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Core Competencies &amp; Industry Experience
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Key operational skills and responsibilities practiced across enterprise software systems and physical hardware during the internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicumCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-2xl backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/50 hover:shadow-purple-900/30 transition-all duration-300 space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border bg-gradient-to-r ${comp.badgeColor}`}>
                        {comp.category}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {comp.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {comp.description}
                    </p>

                    {/* Key Competencies Acquired */}
                    <div className="space-y-2 pt-1">
                      <h5 className="text-[11px] font-bold text-white/60 uppercase tracking-wider">
                        Key Responsibilities &amp; Capabilities:
                      </h5>
                      <div className="space-y-1.5">
                        {comp.skillsAcquired.map((skill, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills/Tools Pills */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                    {comp.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/20 text-[11px] font-medium text-purple-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testing Methodologies 6 Pillar Breakdown */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/20 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core QA Disciplines Mastered</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              6 Pillars of Manual &amp; Exploratory Testing
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Systematic testing methodologies practiced daily during the 500-hour practicum across web portals, mobile apps, and hardware terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testingMethodologies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/20 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-purple-900/50 border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 border border-purple-500/20 text-purple-300 uppercase tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-xs text-white/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Physical Quality & Hardware Verification Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-950/70 border border-purple-500/20 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-300">
              <Package className="w-5 h-5" />
              <h4 className="font-bold text-white text-base">Physical Quality Control (BabyPlus)</h4>
            </div>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Applied rigorous quality control inspections to physical retail products for BabyPlus Company, ensuring material compliance, packaging integrity, and zero defect leakage.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-slate-950/70 border border-purple-500/20 space-y-3">
            <div className="flex items-center gap-2.5 text-cyan-300">
              <Layers className="w-5 h-5" />
              <h4 className="font-bold text-white text-base">Hardware &amp; Autopay Parking Systems</h4>
            </div>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Tested physical Autopay ATM payment kiosks, handheld POS ticket scanners, barrier ticket dispensers, and exit receipt QR code scanners with financial database reconciliation.
            </p>
          </div>
        </div>

        {/* Documentation & Defect Lifecycle Highlight Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-purple-950/60 via-slate-950 to-purple-950/60 border border-purple-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Multi-Company Documentation &amp; Defect Triage</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              End-to-End Defect Lifecycle &amp; Client Enablement
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Authored structured multi-company User Manuals, Knowledge Base Wikis, and quick-reference cheat sheets. Logged actionable bug tickets with clear reproducibility steps, expected vs. actual results, and visual screenshot evidence using Jira and Excel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="#qa-showcase"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/50 flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore QA Project Showcase</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

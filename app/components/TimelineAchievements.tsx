"use client";

import { Award, GraduationCap, Star, Calendar, CheckCircle2, Trophy, Briefcase } from "lucide-react";

interface TimelineEvent {
  period: string;
  title: string;
  institution: string;
  category: "capstone" | "deanslist" | "cert" | "academic" | "internship";
  description: string;
  details: string[];
  badge: string;
  icon: typeof Award;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "2025 - 2026",
    title: "Nominated for Best Capstone Thesis (Capstone 1 & 2)",
    institution: "De La Salle - College of Saint Benilde",
    category: "capstone",
    description:
      "Researched, designed, and developed BiteBalance — a culturally relevant Progressive Web Application (PWA) incorporating Filipino food databases and AI-powered nutritional analysis.",
    details: [
      "Selected as one of the top nominated Capstone thesis projects in the Information Systems program",
      "Lead developer & QA engineer for full-stack system architecture and user testing",
      "Integrated machine learning models for personalized meal recommendations tailored to Filipino dietary habits"
    ],
    badge: "Best Thesis Nominee",
    icon: Trophy,
  },
  {
    period: "2023 - 2026",
    title: "3x Dean's List Recipient",
    institution: "De La Salle - College of Saint Benilde — School of Management and Information Technology",
    category: "deanslist",
    description:
      "Earned 3-time Dean's List recognition for maintaining outstanding Grade Point Average (GPA) academic standing across core Information Systems courses.",
    details: [
      "Consistently achieved high academic marks in Systems Analysis & Design, Database Management, and Enterprise Architecture",
      "Demonstrated academic excellence and disciplined time management while balancing IT projects and fitness research"
    ],
    badge: "3x Recipient",
    icon: Star,
  },
  {
    period: "2022 - 2026 (Present)",
    title: "Bachelor of Science in Information Systems",
    institution: "De La Salle - College of Saint Benilde",
    category: "academic",
    description:
      "Candidate for Graduation ('26). Specialized coursework in Software Quality Assurance, Software Testing, Information Security, Relational Databases, and Full-Stack Web Engineering.",
    details: [
      "Core Competencies: Software Testing, Quality Assurance, Test Suite Design, SQL Server Management, C#, React.js, Security Fundamentals",
      "Active participant in academic technology seminars and peer review workshops"
    ],
    badge: "Expected Grad 2026",
    icon: GraduationCap,
  },
  {
    period: "June 5 to September 8, 2026",
    title: "Junior QA Internship",
    institution: "Circuit Solutions Inc. — Ortigas, Pasig City",
    category: "internship",
    description:
      "Completed a 500-hour comprehensive Quality Assurance practicum performing manual testing, hardware QA, data reconciliation, user documentation, and AI automation research.",
    details: [
      "Executed End-to-End, Black Box, Smoke, Sanity, Regression, and Spot Testing for enterprise web portals, mobile apps, and parking hardware",
      "Authored multi-company user manuals, cheat sheets, and Knowledge Base Wikis alongside visual Jira and Excel defect logs",
      "Explored browser test automation with Playwright & Gemini CLI and AI test case generation via Claude AI"
    ],
    badge: "500 Hours Practicum",
    icon: Briefcase,
  }
];

export default function TimelineAchievements(): React.JSX.Element {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 relative bg-[#110720]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Milestones &amp; Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Timeline &amp; Honors</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Key academic achievements, Dean&apos;s List recognitions, Capstone Best Thesis nominations, and technical milestones at Benilde.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-8 md:ml-32 space-y-12 pl-6 sm:pl-10">
          {timelineEvents.map((event, idx) => {
            const Icon = event.icon;

            return (
              <div key={idx} className="relative group">
                
                {/* Glowing Node Marker on Line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 border-2 border-[#110720] shadow-lg shadow-purple-900/50 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Period Badge for larger screens */}
                <div className="hidden md:block absolute -left-48 top-2 text-right w-36">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/30 inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{event.period}</span>
                  </span>
                </div>

                {/* Main Event Content Card */}
                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-purple-400 hover:shadow-purple-900/30 space-y-4">
                  
                  {/* Period for mobile screens */}
                  <div className="md:hidden inline-block mb-1">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/30 inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{event.period}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-purple-400 mt-0.5">
                        {event.institution}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-500/40 uppercase tracking-wider flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                      <span>{event.badge}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Bullet Details */}
                  <div className="pt-2 border-t border-white/5 space-y-2">
                    {event.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

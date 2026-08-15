"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Code, 
  Layers, 
  Database, 
  Users, 
  Wrench, 
  Cpu, 
  Star,
  Search
} from "lucide-react";

interface Skill {
  name: string;
  category: "qa" | "languages" | "frameworks" | "tools" | "soft";
  description: string;
  highlight?: boolean;
}

const skillsData: Skill[] = [
  // Testing & QA Tools
  { name: "Manual Testing (Smoke, Sanity, Regression, Black Box, Spot, E2E)", category: "qa", description: "End-to-end, black-box, smoke, sanity, regression, and spot testing across web, mobile, and hardware.", highlight: true },
  { name: "Playwright with Gemini CLI", category: "qa", description: "Browser automation testing scripts integrated with Gemini CLI and AI workflows.", highlight: true },
  { name: "AI Agent Testing & Claude AI", category: "qa", description: "AI Agent testing research and automated test case generation using Claude AI.", highlight: true },
  { name: "Hardware & Physical Items QA", category: "qa", description: "Testing Ayala Malls parking hardware (ATM, Handheld, Exit QR) & BabyPlus physical item quality checking.", highlight: true },
  { name: "Data Reconciliation & Verification", category: "qa", description: "Reconciliation of hardware transaction logs with backend financial database ledgers.", highlight: true },
  { name: "Test Case Design & Execution", category: "qa", description: "Designing comprehensive test case suites for real estate, parking, and workdesk platforms.", highlight: true },
  { name: "Jira & Excel Defect Tracking", category: "qa", description: "Documenting issues using Jira, Excel spreadsheets, and visual screenshot evidence.", highlight: true },
  { name: "User Manuals & Wiki Documentation", category: "qa", description: "Authoring multi-company user manuals, cheat sheets, and Knowledge Base Wikis.", highlight: true },

  // Programming Languages
  { name: "C#", category: "languages", description: "Object-oriented programming, LINQ, backend REST services.", highlight: true },
  { name: "SQL", category: "languages", description: "Complex relational queries, JOINs, Stored Procedures, aggregation.", highlight: true },
  { name: "Python", category: "languages", description: "Scripting, data analysis, automation scripts, test helpers.", highlight: true },
  { name: "Java", category: "languages", description: "OOP concepts, data structures, enterprise backend logic." },
  { name: "JavaScript / HTML5 / CSS3", category: "languages", description: "Modern ES6+, DOM manipulation, responsive semantic web markup.", highlight: true },

  // Frameworks & Libraries
  { name: "React.js", category: "frameworks", description: "Component state management, hooks, modern UI component architecture.", highlight: true },
  { name: "Next.js", category: "frameworks", description: "App router, SSR, static generation, API routes, performance optimization.", highlight: true },
  { name: "Node.js", category: "frameworks", description: "Backend runtime environment, Express server setup, REST APIs." },
  { name: "Entity Framework", category: "frameworks", description: "ORM mapping C# objects to relational SQL databases." },
  { name: "Tailwind CSS", category: "frameworks", description: "Utility-first CSS, dark-mode design systems, responsive layouts.", highlight: true },

  // Databases & Tools
  { name: "AntiGravity IDE", category: "tools", description: "Next-generation AI-powered development environment and agentic workflow orchestration.", highlight: true },
  { name: "VS Code / Visual Studio", category: "tools", description: "Primary IDEs for full-stack C#, React, and Python development.", highlight: true },
  { name: "Jira & Excel Bug Tracking", category: "tools", description: "Bug severity logging, reproducibility steps, and visual issue tracking.", highlight: true },
  { name: "SQL Server (SSMS)", category: "tools", description: "Database schema design, indexing, relational database management.", highlight: true },
  { name: "Git / GitHub", category: "tools", description: "Version control, branching strategies, PR code reviews, issue tracking.", highlight: true },
  { name: "Netlify / Vercel", category: "tools", description: "Web app deployment, continuous delivery, environment configuration." },
  { name: "Figma", category: "tools", description: "UI/UX wireframing, interactive prototyping, design handoff." },

  // Soft Skills & Leadership
  { name: "Detail-Oriented Analysis", category: "soft", description: "Meticulous eye for edge cases, missing validation, and physical/software defects.", highlight: true },
  { name: "Cross-functional Communication", category: "soft", description: "Communicating technical bugs clearly between developers and stakeholders." },
  { name: "Analytical Problem Solving", category: "soft", description: "Deconstructing complex system failures into root cause diagnostics." },
  { name: "Team Leadership & Collaboration", category: "soft", description: "Guiding capstone project team workflows, task allocation, and quality standards.", highlight: true },
];

export default function SkillsMatrix(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = [
    { id: "all", label: "All Skills", icon: Layers },
    { id: "qa", label: "Testing & QA Tools", icon: ShieldCheck },
    { id: "languages", label: "Programming Languages", icon: Code },
    { id: "frameworks", label: "Frameworks & Libraries", icon: Cpu },
    { id: "tools", label: "Databases & Tools", icon: Database },
    { id: "soft", label: "Soft Skills & Leadership", icon: Users },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesFilter = activeFilter === "all" || skill.category === activeFilter;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative bg-[#110720]">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities &amp; Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Categorized overview of QA testing tools, software development languages, frameworks, databases, and analytical soft skills.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-6">
          
          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, tools, or concepts (e.g. Playwright, Jira, AntiGravity IDE)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-950/70 border border-purple-500/30 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
            />
          </div>

          {/* Filter Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-purple-400 shadow-md shadow-purple-900/40 scale-105"
                      : "bg-slate-950/50 text-white/70 border-white/10 hover:border-purple-500/30 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl glass-card border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                skill.highlight
                  ? "border-purple-500/40 bg-gradient-to-br from-violet-950/40 via-slate-950 to-purple-950/30 hover:border-purple-400"
                  : "border-white/10 bg-slate-950/60 hover:border-purple-500/30"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                  
                  {skill.highlight && (
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/30 flex-shrink-0">
                      <Star className="w-3 h-3 fill-amber-300" /> Core
                    </span>
                  )}
                </div>

                <p className="text-xs text-white/70 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                <span className="capitalize font-medium text-purple-400/80">
                  {skill.category === "qa"
                    ? "Software QA & Testing"
                    : skill.category === "languages"
                    ? "Language"
                    : skill.category === "frameworks"
                    ? "Framework"
                    : skill.category === "tools"
                    ? "Database / Tool"
                    : "Soft Skill"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-950/50 border border-purple-500/20 max-w-md mx-auto">
            <p className="text-sm text-white/70">No skills found matching &ldquo;{searchTerm}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              className="mt-3 text-xs text-purple-400 hover:text-purple-300 underline font-semibold cursor-pointer"
            >
              Reset filters &amp; search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  Code,
  Database,
  Layers,
  RotateCcw,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import { MetaLabel, Orb, Panel, Section, SectionHeader } from "@/app/components/ui/primitives";

interface Skill {
  name: string;
  category: "qa" | "languages" | "frameworks" | "tools" | "soft";
  description: string;
  highlight?: boolean;
}

const skillsData: Skill[] = [
  // Testing & QA
  { name: "Manual Testing (Smoke, Sanity, Regression, Black Box, Spot, E2E)", category: "qa", description: "End-to-end, black-box, smoke, sanity, regression, and spot testing across web, mobile, and hardware.", highlight: true },
  { name: "Postman (API Testing)", category: "qa", description: "RESTful API endpoint validation, payload verification, status code checks, and auth flows. Actively building depth." },
  { name: "Playwright with Gemini CLI", category: "qa", description: "Browser automation scripts built with Gemini CLI and AI-assisted workflows. Actively building depth." },
  { name: "AI Agent Testing & Claude AI", category: "qa", description: "AI agent testing research and automated test case generation using Claude AI.", highlight: true },
  { name: "Hardware & Physical Items QA", category: "qa", description: "Testing Ayala Malls parking hardware (ATM, handheld, exit QR) and BabyPlus physical item quality checking.", highlight: true },
  { name: "Data Reconciliation & Verification", category: "qa", description: "Reconciliation of hardware transaction logs against backend financial database ledgers.", highlight: true },
  { name: "Test Case Design & Execution", category: "qa", description: "Designing comprehensive test case suites for real estate, parking, and workdesk platforms.", highlight: true },
  { name: "Jira & Excel Defect Tracking", category: "qa", description: "Documenting issues using Jira, Excel spreadsheets, and visual screenshot evidence.", highlight: true },
  { name: "User Manuals & Wiki Documentation", category: "qa", description: "Authoring multi-company user manuals, cheat sheets, and knowledge base wikis.", highlight: true },

  // Languages
  { name: "C#", category: "languages", description: "Object-oriented programming, LINQ, and backend REST services.", highlight: true },
  { name: "SQL", category: "languages", description: "Complex relational queries, JOINs, stored procedures, and aggregation.", highlight: true },
  { name: "Python", category: "languages", description: "Scripting, data analysis, automation scripts, and test helpers." },
  { name: "Java", category: "languages", description: "OOP concepts, data structures, and enterprise backend logic." },
  { name: "JavaScript / HTML5 / CSS3", category: "languages", description: "Modern ES6+, DOM manipulation, and responsive semantic markup.", highlight: true },

  // Frameworks
  { name: "React.js", category: "frameworks", description: "Component state management, hooks, and modern UI architecture.", highlight: true },
  { name: "Next.js", category: "frameworks", description: "App router, SSR, static generation, API routes, and performance work.", highlight: true },
  { name: "Google Gemini Multimodal API", category: "frameworks", description: "Audio and video transcription, real-time multimodal streaming, and key extraction.", highlight: true },
  { name: "Local LLMs & Air-Gapped AI", category: "frameworks", description: "Ollama, vLLM, and LangChain — on-premise LLM deployment, local vector RAG, and real-time PII redaction.", highlight: true },
  { name: "Node.js", category: "frameworks", description: "Backend runtime, Express server setup, and REST APIs." },
  { name: "Entity Framework", category: "frameworks", description: "ORM mapping C# objects to relational SQL databases." },
  { name: "Tailwind CSS", category: "frameworks", description: "Utility-first CSS, design tokens, and responsive layouts.", highlight: true },

  // Tools
  { name: "AntiGravity IDE", category: "tools", description: "AI-powered development environment and agentic workflow orchestration.", highlight: true },
  { name: "VS Code / Visual Studio", category: "tools", description: "Primary IDEs for full-stack C#, React, and Python development.", highlight: true },
  { name: "SQL Server (SSMS)", category: "tools", description: "Database schema design, indexing, and relational database management.", highlight: true },
  { name: "Git / GitHub", category: "tools", description: "Version control, branching strategies, PR reviews, and issue tracking.", highlight: true },
  { name: "Netlify / Vercel", category: "tools", description: "Web app deployment, continuous delivery, and environment configuration." },
  { name: "Figma", category: "tools", description: "UI/UX wireframing, interactive prototyping, and design handoff." },

  // Soft skills
  { name: "Detail-Oriented Analysis", category: "soft", description: "Meticulous eye for edge cases, missing validation, and physical or software defects.", highlight: true },
  { name: "Cross-Functional Communication", category: "soft", description: "Communicating technical bugs clearly between developers and stakeholders." },
  { name: "Analytical Problem Solving", category: "soft", description: "Deconstructing complex system failures into root cause diagnostics." },
  { name: "Team Leadership & Collaboration", category: "soft", description: "Guiding capstone project workflows, task allocation, and quality standards.", highlight: true },
];

const CATEGORIES = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "qa", label: "Testing & QA", icon: ShieldCheck },
  { id: "languages", label: "Languages", icon: Code },
  { id: "frameworks", label: "Frameworks", icon: Wrench },
  { id: "tools", label: "Tools", icon: Database },
  { id: "soft", label: "Soft Skills", icon: Users },
];

const CATEGORY_LABEL: Record<Skill["category"], string> = {
  qa: "Software QA & Testing",
  languages: "Language",
  frameworks: "Framework",
  tools: "Tool",
  soft: "Soft Skill",
};

export default function SkillsMatrix(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return skillsData.filter((skill) => {
      const matchesFilter = activeFilter === "all" || skill.category === activeFilter;
      const matchesSearch =
        !term ||
        skill.name.toLowerCase().includes(term) ||
        skill.description.toLowerCase().includes(term);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <Section
      id="skills"
      orbs={
        <>
          <Orb className="-right-24 top-10 h-[28rem] w-[28rem]" color="from-accent/20" />
          <Orb className="-left-32 bottom-20 h-[24rem] w-[24rem]" color="from-sky/25" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Technical Capabilities"
        eyebrowIcon={Wrench}
        title="Comprehensive"
        highlight="Tech Stack"
        lede="A categorised view of QA tooling, languages, frameworks, databases, and the analytical skills that sit behind them."
      />

      {/* Controls */}
      <div className="mb-10 flex flex-col items-center gap-5">
        <Reveal className="w-full max-w-lg">
          <label htmlFor="skill-search" className="sr-only">
            Search skills, tools, or concepts
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
            <input
              id="skill-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skills, tools, or concepts…"
              className="w-full rounded-xl border border-white/70 bg-white/70 py-3 pr-11 pl-11 text-[15px] text-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_4px_16px_-8px_rgba(10,22,38,0.2)] backdrop-blur-md transition-colors placeholder:text-ink-3 focus:border-accent/40 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg text-ink-3 transition-colors hover:bg-accent/10 hover:text-accent-deep"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-transparent bg-gradient-to-br from-sky to-accent text-white shadow-[0_6px_18px_-8px_rgba(11,107,203,0.7)]"
                    : "border-white/70 bg-white/60 text-ink-2 backdrop-blur-md hover:border-accent/30 hover:text-ink"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.label}
              </button>
            );
          })}
        </Reveal>

        {/* Result count doubles as the live region for filtering. */}
        <p aria-live="polite" className="mono-meta text-ink-3">
          {filtered.length} {filtered.length === 1 ? "skill" : "skills"}
          {search ? ` matching “${search}”` : ""}
        </p>
      </div>

      {/* Grid. Re-keyed on category so the entrance replays; typing in the
          search box does not remount, avoiding a per-keystroke flash. */}
      {filtered.length > 0 ? (
        <div
          key={activeFilter}
          className="animate-fade-rise grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((skill, i) => (
            <Reveal key={skill.name} delay={Math.min(i, 8) * 55} className="h-full">
              <Panel
                className={`group flex h-full flex-col p-5 sm:p-6 ${
                  skill.highlight ? "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_10px_30px_-10px_rgba(11,107,203,0.3)]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[15px] font-semibold leading-snug transition-colors group-hover:text-accent-deep">
                    {skill.name}
                  </h3>
                  {skill.highlight && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-rust/20 bg-rust/[0.07] px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-rust uppercase">
                      <Star className="h-2.5 w-2.5 fill-current" />
                      Core
                    </span>
                  )}
                </div>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-2">
                  {skill.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-ink/[0.07] pt-3">
                  <span className="mono-meta text-accent-deep">
                    {CATEGORY_LABEL[skill.category]}
                  </span>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      ) : (
        <Panel className="mx-auto max-w-md p-8 text-center" hover={false}>
          <p className="text-[15px] text-ink-2">
            No skills found matching{" "}
            <span className="font-semibold text-ink">“{search}”</span>.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveFilter("all");
            }}
            className="btn btn-secondary mt-5 !text-[13px]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset filters
          </button>
        </Panel>
      )}

      <MetaLabel className="sr-only">Skills inventory</MetaLabel>
    </Section>
  );
}
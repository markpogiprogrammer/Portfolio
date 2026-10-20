"use client";

import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Bot,
  CheckCircle2,
  CheckSquare,
  Clock,
  Layers,
  MapPin,
  Package,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import {
  MetaLabel,
  Orb,
  Panel,
  Section,
  SectionHeader,
  Stat,
} from "@/app/components/ui/primitives";

const COMPETENCIES = [
  {
    title: "Manual & Exploratory Testing",
    category: "Testing Lifecycle",
    tone: "accent" as const,
    icon: ShieldCheck,
    body: "Systematic Black Box, Smoke, Sanity, Regression, Spot, and End-to-End testing across live enterprise web platforms, mobile applications, and payment hardware.",
    points: [
      "End-to-end user journey validation and edge-case discovery",
      "Regression verification following builds and hotfixes",
      "Fast-feedback smoke and sanity build health checks",
      "Dynamic unscripted spot testing on critical modules",
    ],
    tools: ["Black Box", "Regression", "Smoke & Sanity", "Spot Testing"],
  },
  {
    title: "Test Suite & Defect Lifecycle",
    category: "QA Operations",
    tone: "accent" as const,
    icon: CheckSquare,
    body: "Authored granular, reusable test cases targeting multi-tier enterprise logic, and managed the defect lifecycle with reproducible steps and screenshot evidence.",
    points: [
      "Comprehensive test case repositories with boundary analysis",
      "Classifying bugs by severity and priority in Jira and Excel",
      "Annotated screenshot proof for rapid developer triage",
      "Verifying fixes and running sign-off regression",
    ],
    tools: ["Jira", "Excel", "Chrome DevTools", "Bug Triage"],
  },
  {
    title: "Documentation & Client Wikis",
    category: "Knowledge Transfer",
    tone: "accent" as const,
    icon: BookOpen,
    body: "Structured technical documentation bridging software capability with end-users across multiple organizations, streamlining onboarding and adoption.",
    points: [
      "Multi-company user manuals for enterprise HRIS and ERP systems",
      "Quick-reference cheat sheets for employee workflows",
      "Client knowledge base wikis for self-service support",
      "System workflows, timelines, and operational guides",
    ],
    tools: ["User Manuals", "Cheat Sheets", "Wikis", "Timelines"],
  },
  {
    title: "Automation & AI QA Exploration",
    category: "Modern QA Tooling",
    tone: "accent" as const,
    icon: Bot,
    body: "Researched automation tooling and AI-driven testing workflows to shorten regression cycles and explore automated test authoring with language models.",
    points: [
      "Browser automation scripts using Playwright and Gemini CLI",
      "AI agent testing paradigms for automated bug discovery",
      "Prompt engineering with Claude AI for test case generation",
      "CI/CD test automation pipeline integration research",
    ],
    tools: ["Playwright", "Gemini CLI", "Claude AI", "AI Agent QA"],
  },
];

const METHODOLOGIES = [
  {
    name: "End-to-End Testing",
    tag: "Full Journey",
    body: "Complete multi-step workflows across portals, mobile apps, and payment hardware.",
    icon: Layers,
  },
  {
    name: "Black Box Testing",
    tag: "Spec-Driven",
    body: "Inputs and outputs validated purely against the specification.",
    icon: CheckSquare,
  },
  {
    name: "Smoke Testing",
    tag: "Build Sanity",
    body: "Critical preliminary checks confirming build stability first.",
    icon: Zap,
  },
  {
    name: "Sanity Testing",
    tag: "Targeted Scope",
    body: "Focused testing on modified modules after a minor release.",
    icon: ShieldCheck,
  },
  {
    name: "Regression Testing",
    tag: "Zero Regressions",
    body: "Re-running suites so fixes never break existing features.",
    icon: Clock,
  },
  {
    name: "Spot & Ad-Hoc Testing",
    tag: "Exploratory",
    body: "Unscripted checks on high-risk edge cases and UI states.",
    icon: Sparkles,
  },
];

export default function InternshipExperience(): React.JSX.Element {
  return (
    <Section
      id="internship"
      orbs={
        <>
          <Orb className="-right-32 -top-10 h-[32rem] w-[32rem]" color="from-accent/25" />
          <Orb className="-left-28 bottom-0 h-[28rem] w-[28rem]" color="from-sky/30" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Professional Internship"
        eyebrowIcon={Building2}
        title="Internship at"
        highlight="Circuit Solutions Inc."
        lede={
          <>
            A <strong className="font-semibold text-ink">500-hour Quality
            Assurance practicum</strong> in Ortigas, Pasig City &mdash; manual
            testing, hardware QA, data reconciliation, user documentation, and
            AI-driven automation research across enterprise systems.
          </>
        }
      />

      {/* Engagement metadata */}
      <Reveal className="mb-12 flex flex-wrap items-center justify-center gap-2.5" delay={80}>
        {[
          { icon: Building2, label: "Circuit Solutions Inc." },
          { icon: MapPin, label: "Ortigas, Pasig City" },
          { icon: Briefcase, label: "Software QA Intern" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <span
              key={item.label}
              className="glass-inset inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-2"
            >
              <Icon className="h-3.5 w-3.5 text-accent" />
              {item.label}
            </span>
          );
        })}
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/[0.08] px-3.5 py-1.5 text-[13px] font-semibold text-emerald">
          <Clock className="h-3.5 w-3.5" />
          500 Hours Completed
        </span>
      </Reveal>

      {/* Metrics */}
      <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {[
          {
            value: "500",
            label: "Total Practicum",
            note: "Full-immersion QA engineering and systems testing",
            tone: "accent" as const,
          },
          {
            value: "6",
            label: "Testing Spectrum",
            note: "E2E, Black Box, Smoke, Sanity, Regression, Spot",
            tone: "emerald" as const,
          },
          {
            value: "Both",
            label: "Scope Covered",
            note: "Web, mobile apps, ATM terminals and POS scanners",
            tone: "accent" as const,
          },
          {
            value: "4",
            label: "Client Manuals",
            note: "User guides, cheat sheets, Jira logs and Excel sheets",
            tone: "rust" as const,
          },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70}>
            <Stat {...stat} />
          </Reveal>
        ))}
      </div>

      {/* Competencies */}
      <div className="mb-16">
        <Reveal className="mb-9 max-w-2xl">
          <MetaLabel className="text-accent-deep">Practicum Learnings</MetaLabel>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            Core Competencies &amp; Industry Experience
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
            Operational skills and responsibilities practised across enterprise
            software systems and physical hardware.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {COMPETENCIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 2) * 80} className="h-full">
                <Panel className="group flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <MetaLabel className="text-accent-deep">{item.category}</MetaLabel>
                      <h4 className="mt-1 font-display text-lg font-semibold sm:text-xl">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{item.body}</p>

                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-2">
                        <CheckCircle2 className="mt-[0.2rem] h-4 w-4 shrink-0 text-emerald" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ink/[0.07] pt-4">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-ink/[0.08] bg-white/60 px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide text-ink-2"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Panel>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Methodologies */}
      <Reveal className="mb-16">
        <Panel className="p-6 sm:p-9" hover={false}>
          <div className="mb-9 max-w-2xl">
            <MetaLabel className="text-emerald">QA Disciplines</MetaLabel>
            <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              6 Pillars of Manual &amp; Exploratory Testing
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
              Methodologies practised daily during the 500-hour practicum across web
              portals, mobile apps, and hardware terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {METHODOLOGIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.name} delay={i * 60} className="h-full">
                  <Panel inset className="group flex h-full flex-col p-5" hover={false}>
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/15 bg-white/70 text-accent-deep transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="rounded-full border border-ink/[0.08] bg-white/60 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-ink-3 uppercase">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-base font-semibold">
                      {item.name}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{item.body}</p>
                  </Panel>
                </Reveal>
              );
            })}
          </div>
        </Panel>
      </Reveal>

      {/* Physical QA highlights */}
      <div className="mb-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {[
          {
            icon: Package,
            tone: "text-rust",
            title: "Physical Quality Control — BabyPlus",
            body: "Rigorous quality inspection on physical retail products, ensuring material compliance, packaging integrity, and zero defect leakage.",
          },
          {
            icon: Layers,
            tone: "text-accent-deep",
            title: "Hardware & Autopay Parking Systems",
            body: "Tested Autopay ATM payment kiosks, handheld POS ticket scanners, barrier ticket dispensers, and exit receipt QR scanners with financial ledger reconciliation.",
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <Panel className="h-full p-6">
                <div className="flex items-center gap-2.5">
                  <Icon className={`h-5 w-5 ${item.tone}`} />
                  <h4 className="font-display text-base font-semibold">{item.title}</h4>
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
              </Panel>
            </Reveal>
          );
        })}
      </div>

      {/* Documentation CTA */}
      <Reveal>
        <Panel className="flex flex-col items-center gap-6 p-6 sm:p-8 md:flex-row md:justify-between">
          <div className="max-w-2xl text-center md:text-left">
            <MetaLabel className="text-accent-deep">
              Documentation &amp; Defect Triage
            </MetaLabel>
            <h4 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
              End-to-End Defect Lifecycle &amp; Client Enablement
            </h4>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
              Authored multi-company user manuals, knowledge base wikis, and
              quick-reference cheat sheets. Logged actionable bug tickets with clear
              reproducibility steps, expected vs. actual results, and visual evidence
              using Jira and Excel.
            </p>
          </div>
          <a href="#qa-showcase" className="btn btn-primary shrink-0 !text-sm">
            Explore QA Showcase
            <ArrowRight className="h-4 w-4" />
          </a>
        </Panel>
      </Reveal>
    </Section>
  );
}
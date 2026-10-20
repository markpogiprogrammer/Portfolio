"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Dumbbell,
  Flame,
  Shield,
  Target,
  User,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import {
  Orb,
  Panel,
  Section,
  SectionHeader,
} from "@/app/components/ui/primitives";

type TabId = "journey" | "focus" | "objective";

const TABS: { id: TabId; label: string; icon: typeof Compass }[] = [
  { id: "journey", label: "My Journey", icon: Compass },
  { id: "focus", label: "Core Focus", icon: Cpu },
  { id: "objective", label: "Objective", icon: Target },
];

export default function AboutDetailed(): React.JSX.Element {
  const [active, setActive] = useState<TabId>("journey");
  const activeIndex = TABS.findIndex((t) => t.id === active);

  return (
    <Section
      id="about"
      orbs={
        <>
          <Orb className="-left-32 top-1/4 h-[30rem] w-[30rem]" color="from-sky/35" />
          <Orb className="-right-24 bottom-10 h-[26rem] w-[26rem]" color="from-[#c4b5fd]/35" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Background & Philosophy"
        eyebrowIcon={User}
        title="About"
        highlight="Mark Oliver"
        lede="An Information Systems graduate of De La Salle – College of Saint Benilde, drawn to software quality assurance, AI automation, and the discipline that transfers between engineering and athletics."
      />

      {/* Segmented control. Three equal cells let the indicator be positioned
          with a transform instead of measured layout. */}
      <Reveal className="mb-10 flex justify-center">
        <div
          role="tablist"
          aria-label="About Mark Oliver"
          className="glass-inset relative grid w-full max-w-lg grid-cols-3 gap-1 rounded-2xl p-1.5"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-1.5 left-1.5 w-[calc((100%-0.75rem)/3)] rounded-xl bg-white shadow-[0_1px_2px_rgba(10,22,38,0.08),0_4px_12px_-4px_rgba(11,107,203,0.3)] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`relative flex items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-[13px] font-semibold transition-colors duration-200 ${
                  isActive ? "text-accent-deep" : "text-ink-2 hover:text-ink"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Panel className="overflow-hidden !rounded-3xl p-6 sm:p-9" hover={false}>
        {/* ---------------------------------------------------------------- */}
        {active === "journey" && (
          <div
            key="journey"
            role="tabpanel"
            id="panel-journey"
            aria-labelledby="tab-journey"
            className="animate-fade-rise grid grid-cols-1 items-start gap-9 lg:grid-cols-12"
          >
            <div className="space-y-5 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep">
                  <Dumbbell className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">IT &amp; Fitness</h3>
                  <p className="mono-meta mt-1 text-ink-3">
                    Discipline · Data Analytics · System Design
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-ink-2">
                My journey started with two obsessions: technology, and physical
                training. As an Information Systems graduate I kept noticing that
                the two share the same mechanics &mdash;{" "}
                <strong className="font-semibold text-ink">
                  measurement, discipline, iterative testing, and progressive
                  overload
                </strong>
                . A training block is a test suite. A missed PR is a regression.
              </p>

              <p className="text-[15px] leading-relaxed text-ink-2">
                Whether I&rsquo;m parsing nutrition data or writing test cases, the
                instinct is the same: break a complicated system into parts that
                can be measured, then improve them one run at a time. That instinct
                produced my capstone,{" "}
                <strong className="font-semibold text-ink">BiteBalance</strong>, a
                progressive web app that helps Filipino adults track nutrition
                against a localized food database.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Panel inset className="p-4" hover={false}>
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Flame className="h-4 w-4 text-rust" />
                    Analytical Discipline
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    Metric-driven accuracy when tracking defects and validating
                    system behaviour.
                  </p>
                </Panel>
                <Panel inset className="p-4" hover={false}>
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <Code2 className="h-4 w-4 text-accent" />
                    User-Centric Solutions
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    Products shaped around real habits and real cultural context,
                    not assumptions.
                  </p>
                </Panel>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Panel inset className="p-6">
                <h4 className="flex items-center gap-2 font-display text-base font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald" />
                  Quick Highlights
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    <>
                      <strong className="font-semibold text-ink">Academic background:</strong>{" "}
                      BS Information Systems, De La Salle &ndash; College of Saint
                      Benilde (&rsquo;26)
                    </>,
                    <>
                      <strong className="font-semibold text-ink">Honors:</strong>{" "}
                      3&times; Dean&rsquo;s List recipient for academic excellence
                    </>,
                    <>
                      <strong className="font-semibold text-ink">Capstone:</strong>{" "}
                      BiteBalance PWA &mdash; nominated for Best Capstone Thesis
                    </>,
                    <>
                      <strong className="font-semibold text-ink">Primary focus:</strong>{" "}
                      Software Quality Assurance testing
                    </>,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {active === "focus" && (
          <div
            key="focus"
            role="tabpanel"
            id="panel-focus"
            aria-labelledby="tab-focus"
            className="animate-fade-rise"
          >
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h3 className="font-display text-2xl font-semibold">
                Technical Specializations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                Bridging system reliability, defect detection, and web development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Software & Hardware QA",
                  body: "Manual testing (Black Box, E2E, Smoke, Sanity, Regression, Spot), Playwright with Gemini CLI automation, AI agent testing, Ayala Malls parking hardware QA, and BabyPlus physical item inspection.",
                  tags: ["Playwright CLI", "Jira", "Excel", "Wikis"],
                },
                {
                  icon: Code2,
                  title: "Web Development",
                  body: "Building responsive frontends and backends with React, Next.js, C#, SQL Server, TypeScript, and Node.js.",
                  tags: ["React", "Next.js", "C#", "SQL"],
                },
                {
                  icon: Cpu,
                  title: "Systems Analysis & Design",
                  body: "Translating business requirements into system workflows, ER diagrams, data flow diagrams, and Figma prototypes.",
                  tags: ["UML", "Figma", "Requirements"],
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Panel key={item.title} className="group flex flex-col p-6">
                    <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-deep transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">
                      {item.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-accent/15 bg-accent/[0.06] px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide text-accent-deep"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Panel>
                );
              })}
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------------- */}
        {active === "objective" && (
          <div
            key="objective"
            role="tabpanel"
            id="panel-objective"
            aria-labelledby="tab-objective"
            className="animate-fade-rise grid grid-cols-1 items-start gap-9 lg:grid-cols-12"
          >
            <div className="space-y-5 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">Career Objectives</h3>
                  <p className="mono-meta mt-1 text-ink-3">
                    Manual &amp; Automation Testing · AI Workflow Automation
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-ink-2">
                My immediate goal is a{" "}
                <strong className="font-semibold text-ink">
                  Software Quality Assurance role
                </strong>{" "}
                where I can bring my testing background, bug documentation skills,
                and analytical rigour &mdash; and keep learning the tools enterprise
                teams actually use.
              </p>

              <div className="space-y-3">
                <h4 className="font-display text-sm font-semibold">
                  What I&rsquo;d bring to your team
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    ["Defect Prevention", "Systematic test design that catches bugs before they reach production."],
                    ["Cross-Functional Clarity", "Bug reports developers and stakeholders can act on without a meeting."],
                    ["Continuous Learning", "Rapid ramp-up on enterprise tooling, security frameworks, and CI/CD."],
                  ].map(([title, body]) => (
                    <Panel key={title} inset className="flex gap-2.5 p-4" hover={false}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <p className="text-sm leading-relaxed text-ink-2">
                        <strong className="font-semibold text-ink">{title}:</strong>{" "}
                        {body}
                      </p>
                    </Panel>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Panel className="flex flex-col items-center p-6 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-sky/25 to-accent/15 text-accent-deep">
                  <Shield className="h-7 w-7" />
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold">
                  Ready for Placement
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">
                  Available for work opportunities. Equipped with hands-on capstone
                  experience, formal test case management, web development knowledge,
                  and a completed junior QA internship.
                </p>
                <a href="#contact" className="btn btn-primary mt-5 w-full !text-sm">
                  Initiate Contact
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Panel>
            </div>
          </div>
        )}
      </Panel>
    </Section>
  );
}
"use client";

import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import { Orb, Panel, Section, SectionHeader } from "@/app/components/ui/primitives";

const TIMELINE = [
  {
    period: "Oct 9–10, 2026",
    title: "AppBuildersPH Hackathon 2026",
    institution: "Cerebral Valley Events",
    badge: "Product Manager & QA",
    icon: Trophy,
    tone: "rust" as const,
    body: "Gathered system requirements and executed manual testing alongside AI tools to verify a local AI product's functionality.",
    details: [
      "Worked as product manager and QA on a local AI application during a two-day build",
      "Drafted requirements and validated functionality with a mix of manual and AI-assisted testing",
    ],
  },
  {
    period: "Oct 2026",
    title: "Business Analysis & Process Management",
    institution: "Coursera",
    badge: "Certification",
    icon: Award,
    tone: "accent" as const,
    body: "Coursework in business analysis and process management, directly reinforcing the systems analysis side of QA work.",
    details: [
      "Requirement gathering, stakeholder processes, and workflow analysis",
    ],
  },
  {
    period: "Jun 5 – Sep 18, 2026",
    title: "Junior QA Internship",
    institution: "Circuit Solutions Inc. — Ortigas, Pasig City",
    badge: "500 Hours Practicum",
    icon: Briefcase,
    tone: "emerald" as const,
    body: "Completed a 500-hour quality assurance practicum covering manual testing, hardware QA, data reconciliation, user documentation, and AI automation research.",
    details: [
      "Executed end-to-end, black box, smoke, sanity, regression, and spot testing across web portals, mobile apps, and parking hardware",
      "Authored multi-company user manuals, cheat sheets, and knowledge base wikis alongside Jira and Excel defect logs",
      "Explored browser automation with Playwright and Gemini CLI, and AI test case generation with Claude",
    ],
  },
  {
    period: "2025 – 2026",
    title: "Nominated for Best Capstone Thesis",
    institution: "De La Salle – College of Saint Benilde",
    badge: "Best Thesis Nominee",
    icon: Trophy,
    tone: "rust" as const,
    body: "Researched, designed, and developed BiteBalance — a culturally relevant progressive web application incorporating Filipino food databases and AI-powered nutritional analysis.",
    details: [
      "Selected as one of the top nominated capstone projects in the Information Systems program",
      "Lead developer and QA engineer for full-stack architecture and user testing",
      "Integrated machine learning models for meal recommendations suited to Filipino dietary habits",
    ],
  },
  {
    period: "2023 – 2026",
    title: "3× Dean's List Recipient",
    institution: "School of Management and Information Technology",
    badge: "3× Recipient",
    icon: Star,
    tone: "accent" as const,
    body: "Earned three consecutive Dean's List recognitions for maintaining outstanding academic standing across core Information Systems coursework.",
    details: [
      "Consistently high marks in Systems Analysis, Database Management, and Enterprise Architecture",
      "Maintained academic excellence while balancing IT projects and fitness research",
    ],
  },
  {
    period: "2022 – 2023",
    title: "Certifications & Trainings",
    institution: "Amazon Web Services Academy · Marine Base Ternate Cavite",
    badge: "2 Credentials",
    icon: ShieldCheck,
    tone: "accent" as const,
    body: "Cloud fundamentals and military discipline training.",
    details: [
      "AWS Cloud Foundations — Amazon Web Services Academy, August 2023",
      "Basic Citizen Military Course Class 02-2022 — Marine Base Ternate, Cavite, May 2022",
    ],
  },
  {
    period: "2022 – 2026",
    title: "BS Information Systems",
    institution: "De La Salle – College of Saint Benilde",
    badge: "Expected Grad 2026",
    icon: GraduationCap,
    tone: "accent" as const,
    body: "Coursework across Software Quality Assurance, Software Testing, Information Security, Relational Databases, and Full-Stack Web Engineering.",
    details: [
      "Core competencies: software testing, test suite design, SQL Server, C#, React, security fundamentals",
      "Member, Google Development Student Club Benilde — October to December 2022",
    ],
  },
  {
    period: "2021 – 2024",
    title: "Community Engagement",
    institution: "Metro Manila, Quezon City & Rizal",
    badge: "4 Programs",
    icon: Users,
    tone: "emerald" as const,
    body: "Volunteer across feeding, dental outreach, and animal welfare programs.",
    details: [
      "Annual Christmas Feeding Program, Metro Manila",
      "Operation Tuli and Bunot Ngipin — Camp General Emilio Aguinaldo High School, Quezon City, July 2024",
      "Alpha Kawanggawa sa Eskwela, Pililia, Rizal — May 2021",
      "Free Anti-Rabies Shot for Pets — MollyCoddle Animal Vaccination Services, Sta. Ana, November 2021",
    ],
  },
];

export default function TimelineAchievements(): React.JSX.Element {
  return (
    <Section
      id="timeline"
      orbs={
        <>
          <Orb className="-left-32 top-1/3 h-[28rem] w-[28rem]" color="from-accent/20" />
          <Orb className="-right-24 top-10 h-[24rem] w-[24rem]" color="from-sky/25" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Milestones & Credentials"
        eyebrowIcon={Award}
        title="Career"
        highlight="Timeline & Honors"
        lede="Academic achievements, a capstone nomination, certifications, hackathon work, and community engagement."
      />

      <div className="relative">
        {/* Track. Hidden from assistive tech — it carries no information. */}
        <div
          aria-hidden="true"
          className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
        />

        <ol className="space-y-8">
          {TIMELINE.map((event, i) => {
            const Icon = event.icon;
            return (
              <Reveal as="li" key={event.title} delay={i * 70} className="relative pl-12">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-4 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sky to-accent text-white shadow-[0_4px_14px_-4px_rgba(11,107,203,0.7)]"
                >
                  <Icon className="h-4 w-4" />
                </span>

                {/* Period sits above the card at every width. An absolutely
                    positioned left column was clipped by the viewport edge
                    between sm and lg, so it stays in flow. */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-white/70 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-accent-deep backdrop-blur-md">
                    <Calendar className="h-3 w-3" />
                    {event.period}
                  </span>
                </div>

                <Panel className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold sm:text-2xl">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent-deep">
                        {event.institution}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10.5px] font-medium tracking-wider uppercase ${
                        event.tone === "rust"
                          ? "border-rust/20 bg-rust/[0.07] text-rust"
                          : event.tone === "emerald"
                            ? "border-emerald/25 bg-emerald/[0.08] text-emerald"
                            : "border-accent/20 bg-accent/[0.07] text-accent-deep"
                      }`}
                    >
                      <Star className="h-3 w-3 fill-current" />
                      {event.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{event.body}</p>

                  <ul className="mt-4 space-y-2 border-t border-ink/[0.07] pt-4">
                    {event.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-2">
                        <CheckCircle2 className="mt-[0.2rem] h-4 w-4 shrink-0 text-emerald" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
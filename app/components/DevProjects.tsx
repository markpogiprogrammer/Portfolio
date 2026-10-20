"use client";

import Image from "next/image";
import {
  CheckCircle2,
  CircleDot,
  Code2,
  ExternalLink,
  Lock,
  TriangleAlert,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import { MetaLabel, Orb, Panel, Section, SectionHeader } from "@/app/components/ui/primitives";

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  statusBadge?: string;
  isWip?: boolean;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  imageUrl: string;
  alt: string;
}

const projects: FeaturedProject[] = [
  {
    id: "bitebalance",
    title: "BiteBalance",
    subtitle:
      "Culturally relevant nutrition and meal tracking PWA for young Filipino adults",
    badge: "Capstone Project",
    statusBadge: "Nominated Best Thesis",
    problemStatement:
      "Global nutrition apps ignore traditional Filipino meals, producing inaccurate calorie estimates, poor engagement, and no culturally tailored dietary guidance for young adults in the Philippines.",
    solution:
      "A progressive web application pairing a database of localized Filipino dishes with AI-driven nutritional recommendations, intuitive meal logging, and progress visualisation.",
    keyFeatures: [
      "Localized Filipino food database (sinigang, adobo, kare-kare and regional dishes)",
      "AI nutritional insights for personalised macro-nutrient goals",
      "Progressive web app with offline-first caching and responsive UI",
      "Daily caloric and macro tracking with visual progress analytics",
      "Personalised meal history and favourites management",
    ],
    techStack: ["React.js", "PWA", "Tailwind CSS", "C# / ASP.NET API", "SQL Server", "Netlify"],
    liveUrl: "https://bitebalancever17.netlify.app/",
    imageUrl: "/projects/bitebalance1.png",
    alt: "BiteBalance nutrition tracking application interface",
  },
  {
    id: "kalix",
    title: "Kalix",
    subtitle:
      "Air-gapped local AI assistant for BPO operations with zero-cloud-leak data protection",
    badge: "Enterprise AI Security",
    statusBadge: "Enterprise Ready",
    problemStatement:
      "BPO firms and call centres handle volumes of PII, payment data, and confidential health records. Compliance rules, client NDAs, and breach liability prevent them from using public cloud AI APIs.",
    solution:
      "A self-hosted, air-gapped AI platform for BPO workflows that runs entirely on on-premise hardware — real-time PII redaction, on-device inference, and agent script assistance, so customer data never crosses the network perimeter.",
    keyFeatures: [
      "100% on-premise air-gapped inference running private local models with zero external traffic",
      "Real-time PII masking across card numbers, identifiers, phone numbers, and addresses",
      "Agent workflow assistance with context retrieval, call summaries, and complaint templates",
      "Local vector RAG retrieving answers strictly from company SOPs and internal documents",
      "Episodic memory isolation — no persistent conversational retention after a session closes",
      "Cryptographic audit logs generating immutable trails for compliance validation",
    ],
    techStack: [
      "Python / FastAPI",
      "Local LLMs (Ollama / vLLM)",
      "LangChain",
      "ChromaDB",
      "Next.js / React",
      "Docker",
      "Presidio",
    ],
    imageUrl: "/projects/kalix.jpg",
    alt: "Kalix local AI platform architecture",
  },
  {
    id: "echo",
    title: "Echo",
    subtitle:
      "Real-time multimodal video and audio transcription powered by Google Gemini",
    badge: "AI & Speech Tech",
    statusBadge: "Work in Progress",
    isWip: true,
    problemStatement:
      "Reviewing hours of recorded meetings and lectures is slow. Conventional speech-to-text engines emit unformatted walls of text with no speaker attribution, no multimodal context, and no action items.",
    solution:
      "A transcription and conversational intelligence system on Gemini's multimodal audio API — low-latency streaming transcription, drag-and-drop file processing, speaker diarization, timestamp navigation, and AI-generated summaries.",
    keyFeatures: [
      "Real-time live conversation streaming with contextual punctuation",
      "Drag-and-drop processing for MP4, MKV, WAV, and MP3 with synchronised waveforms",
      "Instant meeting summaries, discussion takeaways, sentiment, and action items",
      "Speaker diarization labelling multiple conversational participants",
      "Interactive timestamp explorer that jumps playback to an exact second",
      "One-click export to Markdown, PDF, JSON, and SRT / VTT subtitle tracks",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Google Gemini API",
      "Web Audio API",
      "WebSockets",
      "Wavesurfer.js",
    ],
    imageUrl: "/projects/echo.jpg",
    alt: "Echo transcription application interface",
  },
  {
    id: "overload",
    title: "Overload",
    subtitle:
      "Progressive overload workout tracker and strength periodization analytics PWA",
    badge: "Fitness Tech",
    statusBadge: "Work in Progress",
    isWip: true,
    problemStatement:
      "Lifters struggle to apply progressive overload consistently, buried in cluttered, ad-heavy apps with subscription walls, confusing navigation, and no clear tracking of volume load, fatigue, or recovery across blocks.",
    solution:
      "A focused training tracker for strength athletes — automatic set-by-set weight and rep progression, weekly volume tonnage per muscle group, RPE logging, plate-loading calculators, and offline training history.",
    keyFeatures: [
      "Progressive overload engine computing target load from prior session RPE and fatigue",
      "Fast set, rep, and weight logging with rest timers and superset grouping",
      "Volume and muscle group periodization with heatmaps tracking weekly tonnage",
      "Estimated 1RM and PR tracking using Brzycki and Epley formulas",
      "Olympic barbell plate calculator with collar and bumper plate support",
      "Offline-first reliability via local storage and PWA caching for basement gyms",
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PWA"],
    imageUrl: "/projects/overload.jpg",
    alt: "Overload workout tracking application interface",
  },
  {
    id: "apartment-billing",
    title: "Apartment Billing",
    subtitle:
      "Tenant and unit management with automated billing and receipt generation, built for a rental business",
    badge: "Business Tooling",
    statusBadge: "In Production",
    problemStatement:
      "Built while managing Quiazon Building Rental, where water and electricity consumption was re-typed into spreadsheets and Word templates by hand every billing cycle — calculating totals, producing bill sheets and receipts, and tracking monthly income across scattered files.",
    solution:
      "A tenant and unit management system that removes the repetitive data entry: consumption is calculated from meter readings, bill sheets and receipts generate in one click, and monthly income totals update automatically.",
    keyFeatures: [
      "Automated consumption calculation from previous and current meter readings",
      "One-click generation of printable bill sheets and payment receipts",
      "Tenant management for active and past records, leases, and payment history",
      "Real-time unit occupancy and room availability tracking",
      "Monthly income, collection status, and financial overview dashboard",
      "Centralised database replacing loose spreadsheets for audit trails",
    ],
    techStack: ["C# / .NET", "SQL Server", "Windows Forms", "Automated Reporting", "Excel & PDF"],
    imageUrl: "/projects/apartment_billing.jpg",
    alt: "Apartment billing system reporting interface",
  },
];

export default function DevProjects(): React.JSX.Element {
  return (
    <Section
      id="dev-projects"
      orbs={
        <>
          <Orb className="-left-28 top-1/4 h-[30rem] w-[30rem]" color="from-accent/20" />
          <Orb className="-right-28 bottom-1/4 h-[26rem] w-[26rem]" color="from-sky/25" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Software Development & Architecture"
        eyebrowIcon={Code2}
        title="Featured"
        highlight="Development Projects"
        lede="Problem statements, technical approaches, and the reasoning behind each build — from a nutrition PWA to an air-gapped enterprise AI platform."
      />

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <Reveal key={project.id} className="h-full">
              <Panel className="p-5 sm:p-8" hover={false}>
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* Narrative */}
                  <div className={`flex flex-col gap-5 lg:col-span-7 ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1 font-mono text-[10.5px] font-medium tracking-wider text-accent-deep uppercase">
                        {project.badge}
                      </span>
                      {project.isWip ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-rust/20 bg-rust/[0.07] px-3 py-1 font-mono text-[10.5px] font-medium tracking-wider text-rust uppercase">
                          <CircleDot className="h-3 w-3" />
                          Work in Progress
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/[0.08] px-3 py-1 font-mono text-[10.5px] font-medium tracking-wider text-emerald uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                          {project.statusBadge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] font-medium text-accent-deep">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem / solution */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-rust/15 bg-rust/[0.05] p-4">
                        <MetaLabel className="mb-1.5 flex items-center gap-1.5 text-rust">
                          <TriangleAlert className="h-3.5 w-3.5" />
                          Problem
                        </MetaLabel>
                        <p className="text-sm leading-relaxed text-ink-2">
                          {project.problemStatement}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-emerald/15 bg-emerald/[0.05] p-4">
                        <MetaLabel className="mb-1.5 flex items-center gap-1.5 text-emerald">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Solution
                        </MetaLabel>
                        <p className="text-sm leading-relaxed text-ink-2">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div>
                      <MetaLabel className="mb-2.5">Key capabilities</MetaLabel>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {project.keyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-ink-2">
                            <CheckCircle2 className="mt-[0.2rem] h-4 w-4 shrink-0 text-emerald" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <MetaLabel className="mb-2">Built with</MetaLabel>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-ink/[0.09] bg-white/65 px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide text-ink-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary !text-[13px]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Launch Live App
                        </a>
                      )}
                      {project.id === "kalix" && (
                        <span className="inline-flex items-center gap-2 rounded-xl border border-emerald/20 bg-emerald/[0.06] px-3.5 py-2 text-[13px] font-medium text-emerald">
                          <Lock className="h-3.5 w-3.5" />
                          Air-gapped · zero cloud leak
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Preview */}
                  <div className={`lg:col-span-5 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/50 p-2 shadow-[0_14px_40px_-18px_rgba(10,22,38,0.3)] backdrop-blur-md">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                        <Image
                          src={project.imageUrl}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
"use client";

import {
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { MetaLabel, Panel } from "@/app/components/ui/primitives";

export interface QAProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  description: string;
  testingScope: string[];
  deliverables: string[];
  toolsUsed: string[];
  metricsHighlights?: string[];
  sampleDocTitle?: string;
  sampleDocContent?: {
    overview: string;
    totalTestCases: number;
    passRate: string;
    criticalBugsFixed: number;
    sampleBugReport: {
      bugId: string;
      title: string;
      severity: string;
      stepsToReproduce: string[];
      expectedResult: string;
      actualResult: string;
      status: string;
    };
  };
}

export default function QATestedProjectCard({
  project,
}: {
  project: QAProjectItem;
}): React.JSX.Element {
  return (
    <Panel className="group flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/[0.08] px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-emerald uppercase">
          <ShieldCheck className="h-3 w-3" />
          {project.categoryTag}
        </span>
      </div>

      <h3 className="mt-3.5 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-emerald sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{project.description}</p>

      {/* Scope */}
      <div className="mt-5">
        <MetaLabel className="mb-2 flex items-center gap-1.5 text-emerald">
          <Wrench className="h-3.5 w-3.5" />
          Testing scope
        </MetaLabel>
        <div className="flex flex-wrap gap-1.5">
          {project.testingScope.map((scope) => (
            <span
              key={scope}
              className="rounded-lg border border-ink/[0.08] bg-white/60 px-2.5 py-1 text-[11.5px] leading-tight text-ink-2"
            >
              {scope}
            </span>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="mt-5">
        <MetaLabel className="mb-2 flex items-center gap-1.5">
          <FileCheck2 className="h-3.5 w-3.5" />
          Deliverables
        </MetaLabel>
        <ul className="grid grid-cols-1 gap-1.5">
          {project.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex items-start gap-2 text-sm leading-snug text-ink-2">
              <CheckCircle2 className="mt-[0.15rem] h-3.5 w-3.5 shrink-0 text-emerald" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="mt-5 border-t border-ink/[0.07] pt-4">
        <MetaLabel className="mb-2">QA tools &amp; environment</MetaLabel>
        <div className="flex flex-wrap gap-1.5">
          {project.toolsUsed.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-accent/15 bg-accent/[0.06] px-2 py-0.5 font-mono text-[10.5px] font-medium text-accent-deep"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}
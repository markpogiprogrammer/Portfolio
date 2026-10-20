"use client";

import { useId, useState } from "react";
import {
  ChevronDown,
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

const SEVERITY_TONE: Record<string, string> = {
  High: "border-rust/25 bg-rust/[0.08] text-rust",
  Medium: "border-amber-500/30 bg-amber-500/10 text-amber-700",
  Low: "border-ink/[0.12] bg-ink/[0.05] text-ink-2",
};

export default function QATestedProjectCard({
  project,
}: {
  project: QAProjectItem;
}): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const report = project.sampleDocContent;

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

      {/* ------------------------------------------------------------------ */}
      {/* Disclosure: the metrics and sample defect report that ship with the
          project record but sit behind a toggle rather than on every card.   */}
      {/* ------------------------------------------------------------------ */}
      {report && (
        <div className="mt-4">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center justify-between gap-2 rounded-xl border border-emerald/20 bg-emerald/[0.06] px-3.5 py-2.5 text-[13px] font-semibold text-emerald transition-colors hover:bg-emerald/[0.11]"
          >
            <span>{open ? "Hide" : "View"} test report</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* grid-template-rows 0fr → 1fr animates the reveal without
              transitioning height directly. */}
          <div
            id={panelId}
            className="grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="mt-3 space-y-4">
                <p className="text-sm leading-relaxed text-ink-2">{report.overview}</p>

                {/* Headline figures */}
                <dl className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Test cases", value: String(report.totalTestCases) },
                    { label: "Pass rate", value: report.passRate },
                    { label: "Critical bugs", value: String(report.criticalBugsFixed) },
                  ].map((figure) => (
                    <div
                      key={figure.label}
                      className="rounded-xl border border-ink/[0.08] bg-white/60 px-3 py-2.5 text-center"
                    >
                      <dt className="mono-meta text-ink-3">{figure.label}</dt>
                      <dd className="mt-1 font-display text-lg font-bold text-ink">
                        {figure.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {project.metricsHighlights && project.metricsHighlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {project.metricsHighlights.map((metric) => (
                      <li key={metric} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-2">
                        <CheckCircle2 className="mt-[0.2rem] h-3.5 w-3.5 shrink-0 text-emerald" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Sample defect record */}
                <div className="rounded-xl border border-ink/[0.09] bg-white/65 p-3.5">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-medium text-ink">
                      {report.sampleBugReport.bugId}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider uppercase ${
                        SEVERITY_TONE[report.sampleBugReport.severity] ?? SEVERITY_TONE.Low
                      }`}
                    >
                      {report.sampleBugReport.severity}
                    </span>
                    <span className="rounded-full border border-emerald/25 bg-emerald/[0.08] px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-emerald uppercase">
                      {report.sampleBugReport.status}
                    </span>
                  </div>

                  <p className="text-[13px] font-semibold leading-snug text-ink">
                    {report.sampleBugReport.title}
                  </p>

                  <div className="mt-3 space-y-2.5">
                    <div>
                      <MetaLabel className="mb-1">Steps to reproduce</MetaLabel>
                      <ol className="list-decimal space-y-1 pl-4">
                        {report.sampleBugReport.stepsToReproduce.map((step) => (
                          <li key={step} className="text-[13px] leading-snug text-ink-2">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="rounded-lg border border-emerald/15 bg-emerald/[0.05] p-2.5">
                      <MetaLabel className="mb-1 text-emerald">Expected</MetaLabel>
                      <p className="text-[13px] leading-snug text-ink-2">
                        {report.sampleBugReport.expectedResult}
                      </p>
                    </div>

                    <div className="rounded-lg border border-rust/15 bg-rust/[0.05] p-2.5">
                      <MetaLabel className="mb-1 text-rust">Actual</MetaLabel>
                      <p className="text-[13px] leading-snug text-ink-2">
                        {report.sampleBugReport.actualResult}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Panel>
  );
}
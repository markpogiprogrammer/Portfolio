"use client";

import type { ComponentType, ReactNode } from "react";
import Reveal from "@/app/components/motion/Reveal";

export type Tone = "accent" | "emerald" | "rust" | "sky";

/* Tone → class map. Every foreground here clears 4.5:1 on the glass fill. */
const TONE: Record<Tone, { text: string; bg: string; border: string; glow: string }> = {
  accent: {
    text: "text-accent-deep",
    bg: "bg-[rgba(11,107,203,0.08)]",
    border: "border-[rgba(11,107,203,0.22)]",
    glow: "from-sky/45",
  },
  emerald: {
    text: "text-emerald",
    bg: "bg-[rgba(4,120,87,0.08)]",
    border: "border-[rgba(4,120,87,0.22)]",
    glow: "from-[#34d399]/45",
  },
  rust: {
    text: "text-rust",
    bg: "bg-[rgba(154,52,18,0.08)]",
    border: "border-[rgba(154,52,18,0.22)]",
    glow: "from-[#fb923c]/40",
  },
  sky: {
    text: "text-accent-deep",
    bg: "bg-[rgba(56,189,248,0.16)]",
    border: "border-[rgba(56,189,248,0.4)]",
    glow: "from-sky/50",
  },
};

export function toneClasses(tone: Tone) {
  return TONE[tone];
}

/* -------------------------------------------------------------------------- */

/** Ambient colour field. This is the light the glass refracts. */
export function Orb({
  className = "",
  color = "from-sky/50",
  parallax = 0.08,
}: {
  className?: string;
  color?: string;
  parallax?: number;
}) {
  return (
    <div
      aria-hidden="true"
      data-parallax={parallax}
      className={`orb bg-gradient-to-tr ${color} to-transparent ${className}`}
    />
  );
}

/* -------------------------------------------------------------------------- */

export function Section({
  id,
  children,
  className = "",
  orbs,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  orbs?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-5 py-24 sm:px-6 lg:py-32 ${className}`}
    >
      {orbs}
      <div className="relative z-10 mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  icon: Icon,
  tone = "accent",
}: {
  children: ReactNode;
  icon?: ComponentType<{ className?: string }>;
  tone?: Tone;
}) {
  const t = TONE[tone];
  return (
    <span className={`eyebrow ${t.text} ${t.bg} ${t.border}`}>
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * The section masthead. Every section used to repeat the same centred
 * badge/heading/lede stack; this centralises it and adds a `align` option so
 * consecutive sections don't read as nine identical blocks.
 */
export function SectionHeader({
  eyebrow,
  eyebrowIcon,
  eyebrowTone = "accent",
  title,
  highlight,
  lede,
  align = "center",
}: {
  eyebrow: string;
  eyebrowIcon?: ComponentType<{ className?: string }>;
  eyebrowTone?: Tone;
  /** Plain-text prefix. Pass undefined to render the title alone. */
  title: string;
  /** Gradient-suffixed remainder of the heading. */
  highlight?: string;
  lede?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-14 flex flex-col gap-4 sm:mb-16 ${
        centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl items-start text-left"
      }`}
    >
      <Eyebrow icon={eyebrowIcon} tone={eyebrowTone}>
        {eyebrow}
      </Eyebrow>

      <h2
        className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${
          centered ? "text-center" : ""
        }`}
      >
        {title}{" "}
        {highlight ? (
          <span className="text-gradient-accent">{highlight}</span>
        ) : null}
      </h2>

      {lede ? (
        <p
          className={`text-base leading-relaxed text-ink-2 sm:text-lg prose-measure ${
            centered ? "mx-auto text-center" : ""
          }`}
        >
          {lede}
        </p>
      ) : null}

      <span className="sr-only">{`${title} ${highlight ?? ""}`}</span>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */

export function Panel({
  children,
  className = "",
  hover = true,
  as: Tag = "div",
  inset = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li" | "section";
  inset?: boolean;
}) {
  return (
    <Tag
      className={`${inset ? "glass-inset" : "glass glass-edge"} ${
        hover ? "glass-hover" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */

export function Badge({
  children,
  tone = "accent",
  icon: Icon,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
}) {
  const t = TONE[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wider uppercase ${t.text} ${t.bg} ${t.border} ${className}`}
    >
      {Icon ? <Icon className="h-3 w-3" /> : null}
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */

/** Headline metric. `unit` renders smaller and lighter beside the figure. */
export function Stat({
  value,
  label,
  tone = "accent",
  note,
}: {
  value: string;
  label: string;
  tone?: Tone;
  note?: string;
}) {
  const t = TONE[tone];
  return (
    <Panel className="flex flex-col gap-1.5 p-5 sm:p-6">
      <span className={`font-mono text-[10.5px] font-medium tracking-wider uppercase ${t.text}`}>
        {label}
      </span>
      <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {value}
      </span>
      {note ? <span className="text-sm leading-snug text-ink-3">{note}</span> : null}
    </Panel>
  );
}

/* -------------------------------------------------------------------------- */

/** Small labelled meta line — replaces the many `text-[11px]` block labels. */
export function MetaLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`mono-meta block uppercase tracking-wider text-ink-3 ${className}`}>
      {children}
    </span>
  );
}
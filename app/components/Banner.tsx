"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  ArrowRight,
  Award,
  Download,
  GraduationCap,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import { Orb } from "@/app/components/ui/primitives";
import { RESUME_URL } from "@/app/lib/resume";

interface BannerProps {
  onOpenResume?: () => void;
}

/* Module scope so the reference is stable across renders — keeping this
   inside the component previously re-fired the typing effect every render. */
const ROLES = [
  "Software QA Tester",
  "Information Systems Graduate",
  "Web Developer",
] as const;

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

/* Read as a subscription rather than inside an effect: it gives a stable
   server snapshot (so no hydration mismatch) and avoids setState in the
   effect body. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(REDUCED_QUERY);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

export default function Banner({ onOpenResume }: BannerProps = {}): React.JSX.Element {
  // One state object drives the whole loop. Every update happens inside a
  // timer callback, so the effect body only ever schedules work.
  const [state, setState] = useState<{
    index: number;
    text: string;
    phase: "typing" | "holding" | "deleting";
  }>({ index: 0, text: "", phase: "typing" });

  const prefersReduced = usePrefersReducedMotion();

  // Reduced motion pins the first role instead of cycling.
  const display = prefersReduced ? ROLES[0] : state.text;

  useEffect(() => {
    if (prefersReduced) return;

    const current = ROLES[state.index];

    if (state.phase === "holding") {
      const hold = setTimeout(
        () => setState((s) => ({ ...s, phase: "deleting" })),
        1900,
      );
      return () => clearTimeout(hold);
    }

    const tick = setTimeout(() => {
      setState((s) => {
        if (s.phase === "typing") {
          const next = s.text.length + 1;
          if (next >= current.length) return { ...s, text: current, phase: "holding" };
          return { ...s, text: current.slice(0, next) };
        }
        // Deleting — the last character advances to the next role.
        if (s.text.length <= 1) {
          return { index: (s.index + 1) % ROLES.length, text: "", phase: "typing" };
        }
        return { ...s, text: s.text.slice(0, -1) };
      });
    }, state.phase === "deleting" ? 34 : 78);

    return () => clearTimeout(tick);
  }, [state, prefersReduced]);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
    }
  };

  const quickStats = [
    { icon: Award, label: "Best Thesis Nominee", tone: "text-rust" },
    { icon: Sparkles, label: "3× Dean's Lister", tone: "text-accent-deep" },
    { icon: GraduationCap, label: "Information Systems '26", tone: "text-accent-deep" },
    { icon: ShieldCheck, label: "Software QA Specialist", tone: "text-emerald" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-6 lg:pt-40 lg:pb-28"
    >
      <Orb
        className="-top-32 left-[8%] h-[34rem] w-[34rem]"
        color="from-sky/55"
        parallax={0.06}
      />
      <Orb
        className="top-[45%] -right-24 h-[30rem] w-[30rem]"
        color="from-accent/35"
        parallax={0.1}
      />
      <Orb
        className="-bottom-24 left-[30%] h-[24rem] w-[24rem]"
        color="from-[#c4b5fd]/40"
        parallax={0.08}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* ---------------------------------------------------------------- */}
        {/* Primary column                                                    */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-col items-center gap-6 text-center lg:col-span-7 lg:items-start lg:text-left">
          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald/25 bg-emerald/[0.07] px-4 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-breathe absolute inline-flex h-full w-full rounded-full bg-emerald" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              <span className="font-mono text-[10.5px] font-medium tracking-[0.09em] text-emerald uppercase">
                Seeking Opportunities
              </span>
            </span>
          </Reveal>

          <Reveal delay={70} className="space-y-3">
            <p className="text-base font-medium text-accent-deep sm:text-lg">Hello, I&rsquo;m</p>
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Mark Oliver
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-accent">Quiazon</span>
            </h1>
          </Reveal>

          {/* Role line — min-height reserves two wrapped lines on narrow
              viewports so the layout never jumps mid-typing. */}
          <Reveal delay={140}>
            <p className="min-h-[3.25rem] text-xl font-semibold sm:min-h-[2.75rem] sm:text-2xl">
              {/* The rotating line is decorative; screen readers get a
                  static, complete description instead of a partial string. */}
              <span className="sr-only">
                Software QA Tester, Information Systems Graduate, and Web Developer.
              </span>
              <span
                aria-hidden="true"
                className="flex flex-wrap items-baseline justify-center gap-x-2 lg:justify-start"
              >
                <span className="text-ink-3">I&rsquo;m a</span>
                <span className="text-accent-deep">
                  {display}
                  <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-breathe bg-accent align-baseline" />
                </span>
              </span>
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="prose-measure text-base leading-relaxed text-ink-2 sm:text-lg">
              Information Systems graduate of{" "}
              <strong className="font-semibold text-ink">
                De&nbsp;La&nbsp;Salle&nbsp;&ndash;&nbsp;College of Saint Benilde
              </strong>{" "}
              (&rsquo;26). I work at the seam between software engineering and
              structured analysis &mdash; designing test coverage, documenting
              defects until they&rsquo;re closed, and building the web tools that
              make it all repeatable.
            </p>
          </Reveal>

          <Reveal delay={280} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="btn btn-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <a href="#contact" className="btn btn-ghost">
              <Mail className="h-4 w-4" />
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal
            delay={350}
            className="grid w-full max-w-xl grid-cols-2 gap-3 sm:gap-3.5"
          >
            {quickStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass glass-hover flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                >
                  <Icon className={`h-4 w-4 shrink-0 ${stat.tone}`} />
                  <span className="text-[13px] leading-tight font-medium text-ink-2">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </Reveal>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Portrait column                                                  */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex justify-center lg:col-span-5">
          <Reveal variant="scale" delay={200} className="w-full max-w-sm lg:max-w-none">
            <div className="relative">
              {/* Specular halo behind the glass. */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-sky/45 via-accent/25 to-transparent blur-3xl"
              />

              <div className="glass glass-edge relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="relative mx-auto aspect-square w-full max-w-[19rem]">
                  <Image
                    src="/assets/meagain.png"
                    alt="Mark Oliver Quiazon — Information Systems graduate and Software QA specialist"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 22rem"
                    className="object-contain drop-shadow-[0_18px_28px_rgba(10,22,38,0.16)]"
                  />
                </div>

                {/* Corner tag */}
                <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/60 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  <span className="font-mono text-[10px] font-medium tracking-[0.09em] text-ink-2 uppercase">
                    Benilde IS &rsquo;26
                  </span>
                </div>
              </div>

              {/* Floating credential chips */}
              <div className="glass glass-hover absolute -left-3 top-14 hidden rounded-xl px-3 py-2 sm:block lg:-left-8">
                <span className="mono-meta block text-emerald">500 HOURS</span>
                <span className="text-[13px] font-semibold text-ink">QA Practicum</span>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SOCIALS } from "@/app/lib/social";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="relative overflow-hidden border-t border-white/70 bg-white/45 px-5 py-12 backdrop-blur-xl sm:px-6">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-8 pb-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="space-y-3">
            <Link href="#home" className="group inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky via-accent to-accent-deep shadow-[0_4px_14px_-4px_rgba(11,107,203,0.6)] transition-transform duration-300 group-hover:scale-105">
                <span className="font-display text-[15px] font-bold text-white">MQ</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Mark Oliver Quiazon
              </span>
            </Link>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-ink-2 md:mx-0">
              Information Systems graduate of De La Salle &ndash; College of Saint
              Benilde, specialising in Software QA, test automation, information
              security, and full-stack development.
            </p>
          </div>

          <ul className="flex items-center gap-2.5">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/60 text-ink-2 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white hover:text-accent-deep"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/[0.07] pt-7 sm:flex-row">
          <p className="text-center text-[13px] text-ink-3 sm:text-left">
            © {new Date().getFullYear()} Mark Oliver Quiazon. All rights reserved.
            <span className="hidden sm:inline"> De La Salle &ndash; College of Saint Benilde.</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-secondary !min-h-10 !px-4 !py-2 !text-[13px]"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
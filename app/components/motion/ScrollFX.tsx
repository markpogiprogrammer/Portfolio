"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/app/lib/sections";

const HEADER_OFFSET = 96; // --header-h plus breathing room

/**
 * Installs the page's scroll effects and renders the two progress affordances:
 * a hairline bar pinned to the top of the viewport, and a section rail on
 * wide screens.
 *
 * Everything runs inside a single rAF-throttled scroll handler. Orb document
 * positions are cached on mount and resize so the loop never calls
 * getBoundingClientRect per frame — one style write per orb, transform only.
 */
export default function ScrollFX() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let orbs: { el: HTMLElement; speed: number; center: number }[] = [];
    let ticking = false;

    const measure = () => {
      if (reduced) {
        orbs = [];
        return;
      }
      const scrollY = window.scrollY;
      orbs = Array.from(
        document.querySelectorAll<HTMLElement>(".orb[data-parallax]"),
      ).map((el) => ({
        el,
        speed: Number(el.dataset.parallax ?? 0.1),
        center: el.getBoundingClientRect().top + scrollY + el.offsetHeight / 2,
      }));
    };

    const apply = () => {
      ticking = false;

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0);

      // Active section: the last one whose top has passed the header line.
      const probe = scrollY + HEADER_OFFSET;
      let current = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.offsetTop <= probe) current = section.id;
      }
      // Pin the last section once the page bottom is in view.
      if (docHeight > 0 && scrollY >= docHeight - 4) {
        current = SECTIONS[SECTIONS.length - 1].id;
      }
      setActive(current);

      const viewportCenter = scrollY + window.innerHeight / 2;
      for (const orb of orbs) {
        orb.el.style.setProperty(
          "--parallax-y",
          `${(orb.center - viewportCenter) * orb.speed}px`,
        );
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(apply);
    };

    measure();
    apply();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* Hairline progress bar — transform-only, never width. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-sky via-accent to-accent-deep transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Section rail — wide viewports only. */}
      <nav
        aria-label="Section navigation"
        className="pointer-events-none fixed right-6 top-1/2 z-[80] hidden -translate-y-1/2 xl:block"
      >
        <ul className="pointer-events-auto flex flex-col items-end gap-1">
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center justify-end gap-3 py-1.5 pl-3"
                >
                  <span
                    className={`font-mono text-[10px] font-medium tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "text-ink opacity-100"
                        : "text-ink-3 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {section.short}
                  </span>
                  <span
                    className={`block h-px rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "w-7 bg-accent-deep"
                        : "w-3.5 bg-ink/25 group-hover:w-5 group-hover:bg-accent/60"
                    }`}
                  />
                  <span className="sr-only">
                    {isActive ? `Current section: ${section.label}` : section.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
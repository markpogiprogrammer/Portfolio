"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { SECTIONS } from "@/app/lib/sections";
import { RESUME_URL } from "@/app/lib/resume";

interface HeaderProps {
  onOpenResume?: () => void;
}

export default function Header({ onOpenResume }: HeaderProps = {}): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver, independent of ScrollFX so the
  // header does not depend on sibling render order.
  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Document order is the source of truth when sections overlap the band.
        const first = SECTIONS.find((s) => visible.has(s.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the drawer and close on Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ease-out ${
          isScrolled
            ? "border-b border-white/70 bg-white/70 shadow-[0_1px_0_rgba(10,22,38,0.04),0_8px_28px_-16px_rgba(10,22,38,0.25)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-white/30 backdrop-blur-md backdrop-saturate-150"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6"
        >
          {/* Brand */}
          <Link
            href="#home"
            className="group flex shrink-0 items-center gap-2.5 rounded-xl"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-sky via-accent to-accent-deep shadow-[0_4px_14px_-4px_rgba(11,107,203,0.6)] transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-[15px] font-bold tracking-tight text-white">
                MQ
              </span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-bold tracking-tight transition-colors group-hover:text-accent-deep">
                Mark Quiazon
              </span>
              <span className="mt-1 font-mono text-[10px] font-medium tracking-[0.1em] text-ink-3 uppercase">
                Software QA
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {SECTIONS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-accent-deep"
                        : "text-ink-2 hover:text-ink hover:bg-white/60"
                    }`}
                  >
                    {item.label}
                    {/* Underline wipes in from the left on activation. */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-2.5 -bottom-0.5 h-px origin-left bg-accent-deep transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="btn btn-primary hidden sm:inline-flex !min-h-10 !px-4 !py-2 !text-[13px]"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/70 bg-white/70 text-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-colors hover:bg-white lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-accent-deep" />
              ) : (
                <Menu className="h-5 w-5 text-accent-deep" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-[65] overflow-y-auto border-t border-white/70 bg-white/85 backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-6">
            <ul className="flex flex-col gap-1.5">
              {SECTIONS.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                return (
                  <li
                    key={item.id}
                    className="animate-drawer-in"
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 transition-colors ${
                        isActive
                          ? "border-accent/25 bg-accent/[0.07] text-accent-deep"
                          : "border-white/70 bg-white/60 text-ink-2 hover:bg-white"
                      }`}
                    >
                      <span className="flex items-center gap-3 text-[15px] font-medium">
                        <Icon className="h-4 w-4 text-accent" />
                        {item.label}
                      </span>
                      <span className="font-mono text-[10px] tracking-wider text-ink-3">
                        0{i + 1}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleResumeClick(e);
              }}
              className="btn btn-primary mt-5 w-full animate-drawer-in !text-sm"
              style={{ animationDelay: `${SECTIONS.length * 45}ms` }}
            >
              <FileText className="h-4 w-4" />
              Download Full Resume
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
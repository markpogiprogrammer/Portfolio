"use client";

import { useEffect, useRef } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { RESUME_DOWNLOAD_NAME, RESUME_URL } from "@/app/lib/resume";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Overridable for testing; defaults to the canonical resume asset. */
  resumeUrl?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl = RESUME_URL,
}: ResumeModalProps): React.JSX.Element | null {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Keep Tab inside the dialog.
      if (e.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/35 p-3 backdrop-blur-md sm:p-4 md:p-6 animate-fade-rise"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="glass glass-edge flex h-[92vh] max-h-[920px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl !border-white/80 shadow-[0_40px_90px_-30px_rgba(10,22,38,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-ink/[0.07] px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-deep">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <h2
                id="resume-modal-title"
                className="truncate font-display text-base font-semibold"
              >
                Resume Preview
              </h2>
              <p className="mono-meta hidden text-ink-3 sm:block">
                Software QA &amp; InfoSec Specialist
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={resumeUrl}
              download={RESUME_DOWNLOAD_NAME}
              className="btn btn-primary !min-h-9 !px-3 !py-1.5 !text-[13px]"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF in a new tab"
              title="Open PDF in new tab"
              className="grid h-9 w-9 place-items-center rounded-lg border border-ink/[0.1] bg-white/60 text-ink-2 transition-colors hover:bg-white hover:text-accent-deep"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close resume preview"
              title="Close preview"
              className="grid h-9 w-9 place-items-center rounded-lg border border-ink/[0.1] bg-white/60 text-ink-2 transition-colors hover:border-rust/30 hover:bg-rust/[0.07] hover:text-rust"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Viewer */}
        <div className="relative flex min-h-0 flex-1 flex-col bg-white/35">
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0`}
            title="Mark Oliver Quiazon resume PDF preview"
            className="min-h-0 w-full flex-1 border-none"
          />

          <div className="flex shrink-0 flex-col items-center justify-between gap-2 border-t border-ink/[0.07] px-4 py-2.5 text-[13px] text-ink-2 sm:flex-row">
            <span>Having trouble viewing the preview?</span>
            <div className="flex items-center gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-deep underline underline-offset-2 hover:text-accent"
              >
                Open in new tab
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={resumeUrl}
                download={RESUME_DOWNLOAD_NAME}
                className="font-medium text-accent-deep underline underline-offset-2 hover:text-accent"
              >
                Direct download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl = "/Mark Oliver Quiazon - Resume.pdf",
}: ResumeModalProps): React.JSX.Element | null {
  // Lock background scroll when modal is open and add ESC key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="resume-modal-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl h-[90vh] max-h-[900px] bg-[#110720] rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/80 flex flex-col overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#170a2c] border-b border-purple-500/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/30 text-purple-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3
                id="resume-modal-title"
                className="text-base sm:text-lg font-bold text-white tracking-wide"
              >
                Resume Preview
              </h3>
              <p className="text-xs text-purple-300/70 hidden sm:block">
                Mark Oliver Quiazon • Software QA &amp; InfoSec Specialist
              </p>
            </div>
          </div>

          {/* Actions & Close Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={resumeUrl}
              download="Mark Oliver Quiazon - Resume.pdf"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-xl shadow-md shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xs:inline">Download PDF</span>
              <span className="xs:hidden">Download</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-purple-300 hover:text-white bg-white/5 hover:bg-purple-900/40 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
              title="Open PDF in new tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-red-500/20 hover:border-red-500/40 rounded-xl border border-white/10 transition-all"
              title="Close preview"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="relative flex-1 w-full bg-[#0a0314] overflow-hidden flex flex-col">
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full border-none flex-1"
            title="Mark Oliver Quiazon Resume PDF Preview"
          />

          {/* Mobile / Fallback Banner at bottom of PDF viewer */}
          <div className="px-4 py-2.5 bg-[#170a2c] border-t border-purple-500/20 text-center text-xs text-white/70 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
            <span>Having trouble viewing the PDF preview?</span>
            <div className="flex items-center gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-200 underline font-medium"
              >
                Open in new tab
              </a>
              <span>•</span>
              <a
                href={resumeUrl}
                download="Mark Oliver Quiazon - Resume.pdf"
                className="text-purple-300 hover:text-purple-200 underline font-medium"
              >
                Direct Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

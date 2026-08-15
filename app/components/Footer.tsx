"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer(): React.JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#0a0314] border-t border-purple-500/20 relative">
      <div className="container mx-auto max-w-7xl relative">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <Link href="#home" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#110720] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-sm text-purple-300">MQ</span>
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-wide">
                MARK OLIVER QUIAZON
              </span>
            </Link>
            <p className="text-xs text-white/60 max-w-md">
              Information Systems Student at De La Salle - College of Saint Benilde specializing in Software QA, Test Automation, InfoSec &amp; Full-Stack Development.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mark-quiazon-b65588290"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-purple-500/20 text-white/80 hover:text-white hover:bg-purple-900/50 hover:border-purple-400 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/markpogiprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-purple-500/20 text-white/80 hover:text-white hover:bg-purple-900/50 hover:border-purple-400 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/qznmark/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-purple-500/20 text-white/80 hover:text-white hover:bg-purple-900/50 hover:border-purple-400 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/mark6god/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-purple-500/20 text-white/80 hover:text-white hover:bg-purple-900/50 hover:border-purple-400 transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar & Scroll-To-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Mark Oliver Quiazon. All rights reserved. De La Salle - College of Saint Benilde.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/80 transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

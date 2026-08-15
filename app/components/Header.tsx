"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ShieldCheck, Code, Award, User, Mail, Sparkles, Building2 } from "lucide-react";

interface HeaderProps {
  onOpenResume?: () => void;
}

export default function Header({ onOpenResume }: HeaderProps = {}): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", icon: Sparkles },
    { label: "About", href: "#about", icon: User },
    { label: "Internship", href: "#internship", icon: Building2 },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Dev Projects", href: "#dev-projects", icon: Code },
    { label: "QA Showcase", href: "#qa-showcase", icon: ShieldCheck },
    { label: "Timeline", href: "#timeline", icon: Award },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#110720]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-lg shadow-purple-950/20"
          : "bg-[#110720]/50 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 p-0.5 shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <div className="w-full h-full bg-[#110720] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-lg bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                MQ
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-wide text-base group-hover:text-purple-300 transition-colors">
              MARK QUIAZON
            </span>
            <span className="text-[10px] text-purple-400/80 tracking-wider uppercase font-semibold">
              Software QA Tester
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-1 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="relative px-3.5 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1.5 rounded-lg hover:bg-violet-900/30 group"
              >
                <span>{item.label}</span>

              </Link>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/Resume - Mark Quiazon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeClick}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-lg shadow-md shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#110720]/95 backdrop-blur-xl border-b border-purple-500/20 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-violet-900/40 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span>{item.label}</span>
                  </div>

                </Link>
              );
            })}
            <a
              href="/Resume - Mark Quiazon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleResumeClick(e);
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl shadow-lg shadow-purple-900/50 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

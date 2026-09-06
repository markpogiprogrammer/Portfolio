"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Download, ShieldCheck, Mail, Award, Sparkles, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

interface BannerProps {
  onOpenResume?: () => void;
}

export default function Banner({ onOpenResume }: BannerProps = {}): React.JSX.Element {
  const texts = [
    "Information Systems Graduate",
    "Software QA Tester",
    "Web Developer",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(45);
        }, 1800);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(90);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed, texts]);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
    }
  };

  const quickStats = [
    { icon: Award, label: "Capstone Best Thesis Nominee", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
    { icon: Sparkles, label: "3x Dean's Lister", color: "text-purple-300 border-purple-500/30 bg-purple-500/10" },
    { icon: GraduationCap, label: "Information Systems '26", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
    { icon: ShieldCheck, label: "Software QA Specialist", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-900/30 via-violet-600/20 to-indigo-900/10 rounded-full blur-[120px] pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Main Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-950/80 border border-purple-500/30 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-purple-200 tracking-wide uppercase">
                Seeking Software QA Testing Opportunities
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl text-purple-300 font-medium tracking-wide">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                Mark Oliver{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                    Quiazon
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-400 rounded-full"></span>
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="p-4 rounded-2xl bg-slate-950/50 border border-purple-500/20 backdrop-blur-md inline-block max-w-xl">
              <p className="text-lg sm:text-xl text-purple-200 font-medium italic">
                &ldquo;Obsessed with Growth.&rdquo;
              </p>
            </div>

            {/* Typing Subtitle */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                I&apos;m a{" "}
                <span className="bg-gradient-to-r from-purple-400 to-violet-200 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="animate-pulse text-purple-400 ml-0.5">|</span>
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              I am a 24-year-old Information Systems Graduate from{" "}
              <strong className="text-purple-300 font-semibold">De La Salle - College of Saint Benilde</strong> (&apos;26). Passionate about Software Quality Assurance, Test Automation, System Testing, and Information Security, applying analytical precision and systematic discipline to build reliable digital solutions. Hopeful A.I. Workflow Automation & Software Consulting Practicioner.
            </p>

            {/* Dynamic CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/Mark Oliver Quiazon - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-purple-900/50 hover:shadow-purple-600/50 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#qa-showcase"
                className="flex items-center gap-2.5 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-purple-200 font-semibold rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
              >
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                <span>View QA Showcase</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 text-white/90 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick-Stat Highlight Chips Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0">
              {quickStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center lg:items-start p-3 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 ${stat.color}`}
                  >
                    <Icon className="w-5 h-5 mb-1.5" />
                    <span className="text-xs font-bold text-white tracking-wide text-center lg:text-left">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column - Avatar Visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">

              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 via-purple-500 to-indigo-600 opacity-30 blur-2xl animate-pulse" />

              {/* Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-slate-950/40 border border-purple-500/20 backdrop-blur-xl p-4 flex items-center justify-center overflow-hidden shadow-2xl group">

                {/* Glow Overlay Image */}
                <Image
                  src="/assets/me-glow.png"
                  alt="Mark Oliver Quiazon Tech Glow Backdrop"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                  priority
                />

                {/* Main Avatar Image */}
                <Image
                  src="/assets/meagain.png"
                  alt="Mark Oliver Quiazon - Information Systems & QA Specialist"
                  fill
                  className="object-contain drop-shadow-[0_10px_25px_rgba(139,92,246,0.5)] transform group-hover:scale-105 transition-transform duration-500 z-10"
                  priority
                />

                {/* Arrow Pointer Banner */}
                <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-full border border-purple-500/40 text-xs font-semibold text-purple-300 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Benilde IS &apos;26</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

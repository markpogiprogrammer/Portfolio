"use client";

import Image from "next/image";
import { ExternalLink, Sparkles, CheckCircle2, Code2, Database, ShieldCheck, Flame } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  isFeatured?: boolean;
}

const projects: FeaturedProject[] = [
  {
    id: "bitebalance",
    title: "BiteBalance",
    subtitle: "Culturally Relevant Nutrition & Meal Tracking PWA for Young Filipino Adults",
    problemStatement:
      "Generic global nutrition applications fail to account for traditional Filipino meals, leading to inaccurate calorie estimations, poor engagement, and lack of culturally tailored dietary insights for young adults in the Philippines.",
    solution:
      "Architected BiteBalance, a Progressive Web Application (PWA) that combines a comprehensive database of localized Filipino dishes with AI-driven nutritional recommendations, intuitive meal logging, and progress visualization.",
    keyFeatures: [
      "Localized Filipino Food Database (Sinigang, Adobo, Kare-Kare & regional dishes)",
      "AI Nutritional Insights for personalized macro-nutrient goals",
      "Progressive Web App (PWA) with offline-first caching & responsive UI",
      "Daily Caloric & Macro Tracking with visual progress analytics",
      "Personalized Meal History & Favorites management"
    ],
    techStack: ["React.js", "PWA", "Tailwind CSS", "C# / ASP.NET API", "SQL Server", "Netlify"],
    liveUrl:
      "https://bitebalancever17.netlify.app/?fbclid=IwY2xjawQLlgFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeB-Em3XiiI9y-IKdlIEzoSIbNmVi1CUqZgjicIuDhkbAOQRZ6Xd-Hau3Ni9I_aem_zrHWAniHNg7IJWPagpG-yA",
    githubUrl: "https://github.com/markpogiprogrammer",
    imageUrl: "/projects/bitebalance1.png",
    isFeatured: true,
  },


];

export default function DevProjects(): React.JSX.Element {
  return (
    <section id="dev-projects" className="py-24 px-4 sm:px-6 relative bg-[#0d051a]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Software Development &amp; </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Development Project</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            In-depth breakdowns of full-stack applications, problem statements, technical solutions, and live implementations.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-500/20 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReverse ? "lg:flex-row-reverse" : ""}`}>

                  {/* Text Column */}
                  <div className="lg:col-span-7 space-y-6">

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40 uppercase tracking-wider">
                          {project.isFeatured ? "Flagship Project" : "Academic System"}
                        </span>
                        <span className="text-xs text-white/50">BS Information Systems</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-300">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem vs Solution */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/20">
                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                          Problem Statement
                        </h4>
                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                          {project.problemStatement}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30">
                        <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">
                          Technical Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-white/90 uppercase tracking-wider">
                        Key Features &amp; System Capabilities
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                        {project.keyFeatures.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="space-y-2 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-purple-500/20 text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-xs rounded-xl shadow-md shadow-purple-900/40 transition-all hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Launch Live PWA App</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl border border-white/10 hover:border-purple-500/40 transition-all"
                        >
                          <GithubIcon className="w-4 h-4 text-purple-400" />
                          <span>View Code Repository</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Image Preview Column */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-950 p-2 shadow-2xl group">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#110720]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

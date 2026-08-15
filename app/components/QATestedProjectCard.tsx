"use client";

import { 
  ShieldCheck, 
  FileCheck, 
  Wrench, 
  CheckCircle2 
} from "lucide-react";

export interface QAProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  description: string;
  testingScope: string[];
  deliverables: string[];
  toolsUsed: string[];
}

export default function QATestedProjectCard({ project }: { project: QAProjectItem }): React.JSX.Element {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-purple-400 hover:shadow-purple-900/30 flex flex-col justify-between group">
      
      {/* Top Header */}
      <div className="space-y-4">
        
        <div className="flex items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.categoryTag}</span>
          </span>
          <span className="text-xs font-semibold text-purple-300/80">
            Software QA Portfolio
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed mt-2">
            {project.description}
          </p>
        </div>

        {/* Testing Scope */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" /> Testing Scope &amp; Methodology
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.testingScope.map((scope, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-purple-950/50 border border-purple-500/30 text-purple-200"
              >
                {scope}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables Produced */}
        <div className="space-y-2 pt-1">
          <h4 className="text-xs font-bold text-white/90 uppercase tracking-wider flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-purple-400" /> Key QA Deliverables Produced
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-white/80">
            {project.deliverables.map((deliv, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{deliv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used Badges */}
        <div className="space-y-2 pt-3 border-t border-white/5">
          <h4 className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">
            QA Tools &amp; Environment
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 border border-white/10 text-white/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

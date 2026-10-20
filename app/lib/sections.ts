import {
  Award,
  Briefcase,
  Code2,
  Home,
  Mail,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import type { ComponentType } from "react";

export interface SectionMeta {
  id: string;
  label: string;
  /** Short form used in the fixed progress rail. */
  short: string;
  icon: ComponentType<{ className?: string }>;
}

export const SECTIONS: SectionMeta[] = [
  { id: "home", label: "Home", short: "Home", icon: Home },
  { id: "about", label: "About", short: "About", icon: User },
  { id: "internship", label: "Internship", short: "Internship", icon: Briefcase },
  { id: "skills", label: "Skills", short: "Skills", icon: Wrench },
  { id: "dev-projects", label: "Dev Projects", short: "Projects", icon: Code2 },
  { id: "qa-showcase", label: "QA Showcase", short: "QA", icon: ShieldCheck },
  { id: "timeline", label: "Timeline", short: "Timeline", icon: Award },
  { id: "contact", label: "Contact", short: "Contact", icon: Mail },
];

/** Accent hue per section, used to tint the rail marker. */
export const SECTION_TONE: Record<string, string> = {
  home: "var(--accent)",
  about: "var(--accent)",
  internship: "var(--accent)",
  skills: "var(--accent)",
  "dev-projects": "var(--accent)",
  "qa-showcase": "var(--emerald)",
  timeline: "var(--accent)",
  contact: "var(--accent)",
};
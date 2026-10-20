import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/app/components/SocialIcons";

export interface SocialLink {
  href: string;
  label: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  /** Brand colour, used at small sizes where a glyph needs to read as itself. */
  tone: string;
}

/**
 * Single source of truth for profile URLs.
 *
 * These were duplicated across ContactSection and Footer, which is how the
 * LinkedIn slug drifted out of date without anyone noticing. Import from
 * here so a profile change is a one-line edit.
 */
export const SOCIALS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/mark-oliver-quiazon-b65588290",
    label: "LinkedIn",
    Icon: LinkedinIcon,
    tone: "text-[#0a66c2]",
  },
  {
    href: "https://github.com/markpogiprogrammer",
    label: "GitHub",
    Icon: GithubIcon,
    tone: "text-ink",
  },
  {
    href: "https://www.instagram.com/qznmark/",
    label: "Instagram",
    Icon: InstagramIcon,
    tone: "text-[#c13584]",
  },
  {
    href: "https://www.facebook.com/mark6god/",
    label: "Facebook",
    Icon: FacebookIcon,
    tone: "text-[#1877f2]",
  },
];
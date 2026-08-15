import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Oliver Quiazon | Software QA Engineer & Information Systems Specialist",
  description: "Portfolio of Mark Oliver Quiazon — Information Systems Student at De La Salle - College of Saint Benilde specializing in Software Quality Assurance, Test Automation, Information Security, and Full-Stack Development.",
  keywords: [
    "Mark Oliver Quiazon",
    "Mark Quiazon",
    "Software QA Engineer",
    "Software Tester",
    "Information Systems",
    "De La Salle - College of Saint Benilde",
    "Test Automation",
    "Playwright with Gemini CLI",
    "Hardware QA",
    "Postman",
    "Information Security",
    "BiteBalance",
    "Full-Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Mark Oliver Quiazon" }],
  creator: "Mark Oliver Quiazon",
  publisher: "Mark Oliver Quiazon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quiazonportfolio.netlify.app/",
    title: "Mark Oliver Quiazon | Software QA Engineer & Information Systems Specialist",
    description: "Bridging the gap between IT & Physical Fitness. Specialized in Software Quality Assurance, Testing, Information Security & Full-Stack Web Development.",
    siteName: "Mark Oliver Quiazon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Oliver Quiazon | Software QA & Information Systems",
    description: "Bridging the gap between IT & Physical Fitness. BS Information Systems student at De La Salle - College of Saint Benilde.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://quiazonportfolio.netlify.app/" />
      </head>
      <body
        className={`${poppins.variable} font-sans bg-[#110720] text-white antialiased selection:bg-purple-500 selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

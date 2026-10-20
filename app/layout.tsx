import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Oliver Quiazon | Software QA Engineer & Information Systems Specialist",
  description:
    "Portfolio of Mark Oliver Quiazon — Information Systems Student at De La Salle - College of Saint Benilde specializing in Software Quality Assurance, Test Automation, Information Security, and Full-Stack Development.",
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
    "Kalix Local AI",
    "Echo Gemini Transcription",
    "Overload Workout Tracker",
    "Full-Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Mark Oliver Quiazon" }],
  creator: "Mark Oliver Quiazon",
  publisher: "Mark Oliver Quiazon",
  alternates: {
    canonical: "https://quiazonportfolio.netlify.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quiazonportfolio.netlify.app/",
    title: "Mark Oliver Quiazon | Software QA Engineer & Information Systems Specialist",
    description:
      "Bridging the gap between IT & Physical Fitness. Specialized in Software Quality Assurance, Testing, Information Security & Full-Stack Web Development.",
    siteName: "Mark Oliver Quiazon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Oliver Quiazon | Software QA & Information Systems",
    description:
      "Bridging the gap between IT & Physical Fitness. BS Information Systems student at De La Salle - College of Saint Benilde.",
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
  themeColor: "#eef3fa",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrains.variable}`}
    >
      <head>
        {/*
          Marks the document as JS-capable before first paint. The scroll
          reveal styles are scoped to `.js`, so a failed bundle leaves every
          element visible at its final state instead of stuck at opacity 0.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
"use client";

import QATestedProjectCard, { QAProjectItem } from "./QATestedProjectCard";
import { ShieldCheck } from "lucide-react";

const qaProjects: QAProjectItem[] = [
  {
    id: "qa-ayala-vermosa",
    title: "Ayala Malls Vermosa Parking System & Physical Hardware QA",
    categoryTag: "Hardware & Autopay System QA",
    description:
      "End-to-end QA, physical hardware testing, sensor validation, data reconciliation, and project timeline creation for the Ayala Malls Vermosa Autopay Parking System.",
    testingScope: [
      "Autopay Automated Teller Machine (ATM) Payment Verification",
      "Handheld Payment Machine Ticket Scanning QA",
      "Exit System QR Code Receipt Scanning Verification",
      "Entry Barrier & Physical Ticket Dispensing Functionality",
      "Data Reconciliation & Database Transaction Ledgers",
      "Black Box & Regression Testing"
    ],
    deliverables: [
      "Master Parking Hardware & Software Test Case Suite",
      "Visual Bug & Defect Tracker (Excel, Jira, Screenshots)",
      "Financial Data Reconciliation & Ledger Integrity Report",
      "Project Execution & Testing Milestone Timeline"
    ],
    toolsUsed: ["Jira", "Excel", "Handheld Payment Scanners", "Autopay ATM Terminals"]
  },
  {
    id: "qa-workdesk-systems",
    title: "Workdesk HRIS Systems (Web & Mobile Apps) — Multi-Company QA & User Documentation",
    categoryTag: "Enterprise HRIS Web & Mobile QA",
    description:
      "Comprehensive manual testing, test case design, defect tracking, and wiki user manual creation for multi-company Workdesk HRIS systems covering Employee Management, HRIS Payroll Functionalities, Employee Reports, and Timekeeping.",
    testingScope: [
      "Workdesk HRIS Web Application & Mobile App Functionality",
      "HRIS Employee Management & Payroll Logic Verification",
      "Employee Reports & Timekeeping Shift Calculation QA",
      "Sanity, Spot, & Regression Testing",
      "Test Case Creation & Execution",
      "User Manuals, Cheat Sheets, & System Wikis"
    ],
    deliverables: [
      "Comprehensive Workdesk HRIS Test Case Suite (Web & Mobile)",
      "Defect & Issue Tracker (Excel, Jira, Screenshots)",
      "Client User Manuals, Cheat Sheets, & Knowledge Base Wikis",
      "Sanity & Spot Testing Checklists"
    ],
    toolsUsed: ["Jira", "Excel", "Confluence / Wikis", "Mobile OS (iOS/Android)"]
  },
  {
    id: "qa-real-estate",
    title: "Real Estate Website End-to-End Testing & QA Suite",
    categoryTag: "E2E & Functional Web QA",
    description:
      "End-to-end testing, black box testing, smoke testing, sanity testing, and regression testing for real estate web applications.",
    testingScope: [
      "End-to-End Property Search & Listing Filter Testing",
      "Black Box & Regression Testing",
      "Smoke & Sanity Test Executions",
      "Test Case Design & Defect Lifecycle Logging",
      "Form Boundary & Mortgage Calculator Validation"
    ],
    deliverables: [
      "End-to-End Real Estate Test Case Repository",
      "Defect Log & Severity Tracker (Jira, Excel, Visual Screenshots)",
      "Regression Sanity Checklist"
    ],
    toolsUsed: ["Jira", "Excel", "Chrome DevTools"]
  },
  {
    id: "qa-bitebalance",
    title: "BiteBalance PWA — Comprehensive E2E Testing & UI/UX Audit",
    categoryTag: "Full Web Application QA",
    description:
      "End-to-end quality assurance, exploratory testing, UI/UX audit, and cross-device testing for BiteBalance — a culturally tailored Filipino nutrition tracking progressive web app.",
    testingScope: [
      "Manual Functional Testing",
      "UI/UX Usability Auditing",
      "Meal Logging & Macro Calculation QA",
      "PWA Offline & Service Worker Audit",
      "Cross-Browser Mobile Testing"
    ],
    deliverables: [
      "Structured Test Suite (100+ Executed Scenarios)",
      "Redacted Bug Severity Matrix & Issue Logs",
      "Requirement Traceability Matrix (RTM)",
      "PWA Lighthouse & Performance Audit Summary"
    ],
    toolsUsed: ["Chrome DevTools", "GitHub Issues", "Lighthouse PWA"]
  },
  {
    id: "qa-ai-automation",
    title: "Automation Testing & AI Agent QA Methodologies",
    categoryTag: "Automation & AI QA Research",
    description:
      "Research and practical implementation of Test Automation, AI Agent Testing, AI-driven test case creation with Claude, and Playwright integrated with Gemini CLI.",
    testingScope: [
      "Automation Testing Tools & Workflow Integration Research",
      "AI Agent Testing & Autonomous QA Methodologies",
      "AI Test Case Generation using Claude AI",
      "Automated Testing with Playwright integrated with Gemini CLI"
    ],
    deliverables: [
      "Automation Workflow Integration Guides",
      "AI Agent Testing & Prompt Engineering Matrix",
      "Playwright + Gemini CLI Automated Execution Scripts",
      "Claude AI Test Case Prompt Repository"
    ],
    toolsUsed: ["Playwright with Gemini CLI", "Claude AI", "Python", "Node.js"]
  },
  {
    id: "qa-physical-items",
    title: "Physical Items & Hardware Quality Inspection (BabyPlus & Parking Systems)",
    categoryTag: "Physical Product & Hardware QA",
    description:
      "Physical product quality inspection for BabyPlus Company alongside physical hardware testing for parking autotellers, entry barrier ticket dispensers, and handheld scanners.",
    testingScope: [
      "Physical Product Quality Assurance & Defect Inspection for BabyPlus",
      "Parking System Physical Hardware Testing (ATM, Handheld, Scanners)",
      "Material Spec & Physical Packaging Integrity Verification",
      "Barcode & QR Physical Scanner Readability QA"
    ],
    deliverables: [
      "BabyPlus Physical Product Quality Inspection Checklist",
      "Hardware Physical Sensor & Reader Verification Logs",
      "Visual Defect Reports with High-Resolution Photos"
    ],
    toolsUsed: ["Physical Inspection Checklists", "Excel Bug Documentation", "Barcode/QR Scanners", "Jira"]
  }
];

export default function QAShowcase(): React.JSX.Element {
  return (
    <section id="qa-showcase" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#110720] via-[#0e041d] to-[#110720]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dedicated QA &amp; Software Testing Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects <span className="bg-gradient-to-r from-emerald-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">Tested &amp; Quality Assured</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Detailed breakdown of Software &amp; Physical Hardware QA projects, manual test suites, defect logs (Excel, Jira), and physical item quality inspections.
          </p>
        </div>

        {/* QA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qaProjects.map((project) => (
            <QATestedProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

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
    metricsHighlights: [
      "Verified 100% ticket scanning & QR payment recognition accuracy across ATM and Handheld devices",
      "Reconciled transaction data between entry barrier hardware logs and backend payment ledgers",
      "Executed physical hardware entry, exit barrier, and ATM cash/card payment stress scenarios"
    ],
    toolsUsed: ["Jira", "Excel", "Handheld Payment Scanners", "Autopay ATM Terminals", "Playwright with Gemini CLI"],
    sampleDocTitle: "Ayala Malls Vermosa Parking Hardware & Autopay System QA Report",
    sampleDocContent: {
      overview:
        "Comprehensive testing of Autopay parking hardware, exit QR scanning readers, handheld ticket devices, ATM cash/card payment workflows, and transaction data reconciliation.",
      totalTestCases: 110,
      passRate: "99.1%",
      criticalBugsFixed: 9,
      sampleBugReport: {
        bugId: "BUG-VERMOSA-014",
        title: "Exit QR Ticket Scanner failed to validate receipt when scanned at 45-degree angle under direct glare",
        severity: "High",
        stepsToReproduce: [
          "Dispense entry ticket at entrance parking barrier.",
          "Pay fee at Autopay ATM terminal and collect printed QR receipt.",
          "Scan QR receipt at exit column scanner at a 45-degree angle under outdoor lighting."
        ],
        expectedResult: "Exit reader instantly parses QR code payload, reconciles payment, and opens barrier.",
        actualResult: "Scanner timeout error occurred; barrier remained locked requiring manual override.",
        status: "Verified & Resolved"
      }
    }
  },
  {
    id: "qa-workdesk-systems",
    title: "Workdesk Systems (Web & Mobile Apps) — Multi-Company QA & User Documentation",
    categoryTag: "Enterprise Web & Mobile QA",
    description:
      "Comprehensive manual testing, test case design, defect tracking, and wiki user manual creation for multi-company Workdesk systems covering Employee Management, Payroll, Reports, and Timekeeping.",
    testingScope: [
      "Workdesk Web Application & Mobile App Functionality",
      "Employee Management & Payroll Logic Verification",
      "Employee Reports & Timekeeping Shift Calculation QA",
      "Sanity, Spot, & Regression Testing",
      "Test Case Creation & Execution",
      "User Manuals, Cheat Sheets, & System Wikis"
    ],
    deliverables: [
      "Comprehensive Workdesk Test Case Suite (Web & Mobile)",
      "Defect & Issue Tracker (Excel, Jira, Screenshots)",
      "Client User Manuals, Cheat Sheets, & Knowledge Base Wikis",
      "Sanity & Spot Testing Checklists"
    ],
    metricsHighlights: [
      "Created structured Wiki user manuals and cheat sheets for multi-company client deployment",
      "Documented 35+ payroll calculation, timekeeping, and mobile user flow discrepancies using Jira & Excel",
      "Achieved 100% test coverage across employee mobile app user workflows"
    ],
    toolsUsed: ["Jira", "Excel", "Playwright with Gemini CLI", "Confluence / Wikis", "Mobile OS (iOS/Android)"],
    sampleDocTitle: "Workdesk Enterprise Systems & Mobile App Execution Summary",
    sampleDocContent: {
      overview:
        "Full-scope manual QA covering payroll computations, employee shift reports, mobile timekeeping clock-in features, and user documentation wikis.",
      totalTestCases: 145,
      passRate: "98.6%",
      criticalBugsFixed: 14,
      sampleBugReport: {
        bugId: "BUG-WD-027",
        title: "Timekeeping overtime calculation mismatch during night-differential shift transition",
        severity: "High",
        stepsToReproduce: [
          "Clock in employee at 10:00 PM shift start via Workdesk Mobile App.",
          "Log 2 hours overtime post 6:00 AM standard end time.",
          "Generate Employee Payroll & Timekeeping Report."
        ],
        expectedResult: "Payroll report applies standard night diff multiplier plus overtime rate accurately.",
        actualResult: "System calculated standard rate for overtime period, ignoring night differential overflow.",
        status: "Verified & Resolved"
      }
    }
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
    metricsHighlights: [
      "Authored 80+ structured manual test cases covering search, filters, inquiry forms, and mortgage calculators",
      "Captured visual screenshot logs for bug triage in Jira and Excel",
      "Ensured zero P1 defect leakage into production release"
    ],
    toolsUsed: ["Jira", "Excel", "Chrome DevTools", "Playwright with Gemini CLI", "Postman"],
    sampleDocTitle: "Real Estate Web Application E2E Test Execution Summary",
    sampleDocContent: {
      overview:
        "End-to-end functional, smoke, sanity, and regression testing of property search queries, price filters, agent contact forms, and mortgage calculators.",
      totalTestCases: 82,
      passRate: "100%",
      criticalBugsFixed: 7,
      sampleBugReport: {
        bugId: "BUG-RE-009",
        title: "Filter price slider boundary error resets max budget query on page refresh",
        severity: "Medium",
        stepsToReproduce: [
          "Apply property price filter between 5M and 15M PHP.",
          "Refresh property search page."
        ],
        expectedResult: "Price filter values persist in URL params and UI range slider.",
        actualResult: "Slider range reset to default 0-100M PHP while URL parameter remained unchanged.",
        status: "Verified & Resolved"
      }
    }
  },
  {
    id: "qa-bitebalance",
    title: "BiteBalance PWA — Comprehensive E2E Testing & Security Audit",
    categoryTag: "Full Web Application QA",
    description:
      "End-to-end quality assurance, exploratory testing, UI/UX audit, and API validation for BiteBalance — a culturally tailored Filipino nutrition tracking progressive web app.",
    testingScope: [
      "Manual Functional Testing",
      "UI/UX Usability Auditing",
      "Postman API Validation",
      "PWA Offline & Service Worker Audit",
      "Cross-Browser Mobile Testing"
    ],
    deliverables: [
      "Structured Test Suite (100+ Executed Scenarios)",
      "Redacted Bug Severity Matrix & Issue Logs",
      "Requirement Traceability Matrix (RTM)",
      "PWA Lighthouse & Performance Audit Summary"
    ],
    metricsHighlights: [
      "Identified & documented 25+ functional, layout, and data validation bugs prior to launch",
      "Achieved 100% test suite execution pass rate on final release build v1.7",
      "Validated HTTP status code responses & edge-case JSON payload error handling"
    ],
    toolsUsed: ["Postman", "Chrome DevTools", "GitHub Issues", "Playwright with Gemini CLI", "Lighthouse PWA"],
    sampleDocTitle: "BiteBalance v1.7 Test Execution Summary & Bug Log",
    sampleDocContent: {
      overview:
        "Comprehensive end-to-end test execution covering meal logging workflows, Filipino food database search queries, caloric progress calculations, and offline storage caching.",
      totalTestCases: 105,
      passRate: "98.1%",
      criticalBugsFixed: 8,
      sampleBugReport: {
        bugId: "BUG-BB-042",
        title: "Calorie Overflow Error when logging portion sizes greater than 999g",
        severity: "High",
        stepsToReproduce: [
          "Navigate to BiteBalance Meal Logger.",
          "Search and select 'Adobo' from localized database.",
          "Input portion weight value '1500' grams into quantity field.",
          "Click 'Add Meal to Daily Log' button."
        ],
        expectedResult: "System calculates 1,500g metrics cleanly and updates daily total counter without display overflow.",
        actualResult: "UI container broke due to missing integer boundary truncation, resulting in NaN macro display.",
        status: "Verified & Resolved"
      }
    }
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
    metricsHighlights: [
      "Integrated AI-driven prompt workflows to generate structured test cases 3x faster using Claude AI",
      "Streamlined browser automation using Playwright combined with Gemini CLI for rapid script execution",
      "Researched AI Agent testing frameworks for autonomous bug discovery and test suite maintenance"
    ],
    toolsUsed: ["Playwright with Gemini CLI", "Claude AI", "Python", "Node.js", "Postman"],
    sampleDocTitle: "Automation & AI Agent Testing Framework Evaluation Report",
    sampleDocContent: {
      overview:
        "Practical research and implementation of automation testing tools, AI Agent testing, prompt-based test generation using Claude, and Playwright with Gemini CLI.",
      totalTestCases: 65,
      passRate: "100%",
      criticalBugsFixed: 6,
      sampleBugReport: {
        bugId: "RESEARCH-AI-003",
        title: "Playwright with Gemini CLI DOM element selector dynamic wait failure",
        severity: "Medium",
        stepsToReproduce: [
          "Generate automated test script via Claude AI prompt.",
          "Execute script using Playwright with Gemini CLI against dynamic React modal."
        ],
        expectedResult: "Playwright auto-waits for element state before triggering click action.",
        actualResult: "ElementHandle detached error returned due to missing explicit state guard.",
        status: "Verified & Resolved"
      }
    }
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
    metricsHighlights: [
      "Inspected physical product batches to ensure strict quality compliance and zero physical defect dispatches",
      "Verified physical autoteller payment printing, QR receipt readability, and barrier trigger sensors"
    ],
    toolsUsed: ["Physical Inspection Checklists", "Excel Bug Documentation", "Barcode/QR Scanners", "Jira"],
    sampleDocTitle: "Physical Item & Hardware Quality Assurance Summary",
    sampleDocContent: {
      overview:
        "Physical inspection procedures for BabyPlus product batches combined with physical stress testing of parking autoteller printers and handheld scanners.",
      totalTestCases: 55,
      passRate: "98.5%",
      criticalBugsFixed: 5,
      sampleBugReport: {
        bugId: "BUG-BABYPLUS-002",
        title: "Packaging seal integrity defect on physical item batch #408",
        severity: "High",
        stepsToReproduce: [
          "Inspect physical product box seal under standard stress handling.",
          "Check adhesive bonding strength across batch sample."
        ],
        expectedResult: "Seal remains intact without peeling under light handling pressure.",
        actualResult: "Adhesive failed on 15% of batch sample; reported to supplier for repackaging.",
        status: "Verified & Resolved"
      }
    }
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
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Dedicated QA &amp; Software Testing Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects <span className="bg-gradient-to-r from-emerald-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">Tested &amp; Quality Assured</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Detailed breakdown of Software &amp; Physical Hardware QA projects, manual test suites, defect logs (Excel, Jira), and physical item quality inspections.
          </p>
        </div>

        {/* Quick QA Overview Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-purple-500/20 text-center space-y-1">
            <span className="text-2xl font-extrabold text-white">450+</span>
            <span className="text-xs font-medium text-purple-300 block">Executed Test Cases</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-purple-500/20 text-center space-y-1">
            <span className="text-2xl font-extrabold text-emerald-400">99.1%</span>
            <span className="text-xs font-medium text-emerald-300/80 block">Average Pass Rate</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-purple-500/20 text-center space-y-1">
            <span className="text-2xl font-extrabold text-amber-400">75+</span>
            <span className="text-xs font-medium text-amber-300/80 block">Bugs Documented &amp; Verified</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-purple-500/20 text-center space-y-1">
            <span className="text-2xl font-extrabold text-purple-300">100%</span>
            <span className="text-xs font-medium text-purple-200/80 block">Defect Traceability</span>
          </div>
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

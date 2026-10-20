"use client";

import { ShieldCheck } from "lucide-react";
import QATestedProjectCard, { type QAProjectItem } from "./QATestedProjectCard";
import Reveal from "@/app/components/motion/Reveal";
import {
  Orb,
  Section,
  SectionHeader,
  Stat,
} from "@/app/components/ui/primitives";

const qaProjects: QAProjectItem[] = [
  {
    id: "qa-ayala-vermosa",
    title: "Ayala Malls Vermosa Parking System & Physical Hardware QA",
    categoryTag: "Hardware QA",
    description:
      "End-to-end QA, physical hardware testing, sensor validation, data reconciliation, and project timelines for the Ayala Malls Vermosa Autopay parking system.",
    testingScope: [
      "Autopay ATM payment verification",
      "Handheld payment machine ticket scanning",
      "Exit system QR receipt scanning",
      "Entry barrier & ticket dispensing",
      "Data reconciliation & ledger integrity",
      "Black Box & Regression testing",
    ],
    deliverables: [
      "Master parking hardware test case suite",
      "Visual bug & defect tracker",
      "Financial data reconciliation report",
      "Project execution & testing timeline",
    ],
    metricsHighlights: [
      "Verified 100% ticket scanning and QR payment recognition across ATM and handheld devices",
      "Reconciled transaction data between barrier hardware logs and backend payment ledgers",
      "Executed physical entry, exit barrier, and ATM cash/card stress scenarios",
    ],
    toolsUsed: ["Jira", "Excel", "Handheld scanners", "Autopay ATM", "Playwright"],
    sampleDocTitle: "Ayala Malls Vermosa Parking Hardware & Autopay System QA Report",
    sampleDocContent: {
      overview:
        "Comprehensive testing of Autopay parking hardware, exit QR scanning readers, handheld ticket devices, ATM cash and card payment workflows, and transaction data reconciliation.",
      totalTestCases: 110,
      passRate: "99.1%",
      criticalBugsFixed: 9,
      sampleBugReport: {
        bugId: "BUG-VERMOSA-014",
        title:
          "Exit QR ticket scanner failed to validate receipt when scanned at a 45° angle under direct glare",
        severity: "High",
        stepsToReproduce: [
          "Dispense an entry ticket at the entrance parking barrier.",
          "Pay the fee at the Autopay ATM terminal and collect the printed QR receipt.",
          "Scan the QR receipt at the exit column scanner at a 45° angle under outdoor lighting.",
        ],
        expectedResult:
          "The exit reader instantly parses the QR payload, reconciles payment, and opens the barrier.",
        actualResult:
          "A scanner timeout error occurred and the barrier stayed locked, requiring manual override.",
        status: "Verified & Resolved",
      },
    },
  },
  {
    id: "qa-workdesk-systems",
    title: "Workdesk Systems — Multi-Company QA & User Documentation",
    categoryTag: "Web & Mobile QA",
    description:
      "Manual testing, test case design, defect tracking, and wiki user manual creation for multi-company Workdesk systems covering employee management, payroll, reports, and timekeeping.",
    testingScope: [
      "Web application & mobile app functionality",
      "Employee management & payroll logic",
      "Reports & timekeeping shift calculation",
      "Sanity, spot, and regression testing",
      "Test case creation & execution",
      "User manuals, cheat sheets, and wikis",
    ],
    deliverables: [
      "Comprehensive test case suite (web & mobile)",
      "Defect & issue tracker with screenshots",
      "Client user manuals, cheat sheets, and wikis",
      "Sanity & spot testing checklists",
    ],
    metricsHighlights: [
      "Created structured wiki user manuals and cheat sheets for multi-company client deployment",
      "Documented 35+ payroll, timekeeping, and mobile flow discrepancies using Jira and Excel",
      "Achieved 100% coverage across employee mobile app user workflows",
    ],
    toolsUsed: ["Jira", "Excel", "Playwright", "Wikis", "iOS / Android"],
    sampleDocTitle: "Workdesk Enterprise Systems & Mobile App Execution Summary",
    sampleDocContent: {
      overview:
        "Full-scope manual QA covering payroll computations, employee shift reports, mobile timekeeping clock-in, and user documentation wikis.",
      totalTestCases: 145,
      passRate: "98.6%",
      criticalBugsFixed: 14,
      sampleBugReport: {
        bugId: "BUG-WD-027",
        title:
          "Timekeeping overtime calculation mismatch during night-differential shift transition",
        severity: "High",
        stepsToReproduce: [
          "Clock in an employee at a 10:00 PM shift start via the Workdesk mobile app.",
          "Log 2 hours of overtime past the 6:00 AM standard end time.",
          "Generate the employee payroll and timekeeping report.",
        ],
        expectedResult:
          "The payroll report applies the standard night differential multiplier plus the overtime rate accurately.",
        actualResult:
          "The system calculated the standard rate for the overtime period, ignoring the night differential overflow.",
        status: "Verified & Resolved",
      },
    },
  },
  {
    id: "qa-real-estate",
    title: "Real Estate Website End-to-End Testing & QA Suite",
    categoryTag: "E2E & Functional QA",
    description:
      "End-to-end, black box, smoke, sanity, and regression testing for real estate web applications.",
    testingScope: [
      "Property search & listing filter testing",
      "Black Box & Regression testing",
      "Smoke & Sanity executions",
      "Test case design & defect lifecycle",
      "Form boundary & mortgage calculator validation",
    ],
    deliverables: [
      "End-to-end real estate test case repository",
      "Defect log & severity tracker with screenshots",
      "Regression sanity checklist",
    ],
    metricsHighlights: [
      "Authored 80+ structured manual test cases covering search, filters, inquiry forms, and mortgage calculators",
      "Captured visual screenshot logs for bug triage in Jira and Excel",
      "Ensured zero P1 defect leakage into the production release",
    ],
    toolsUsed: ["Jira", "Excel", "Chrome DevTools", "Playwright", "Postman"],
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
          "Apply a property price filter between 5M and 15M PHP.",
          "Refresh the property search page.",
        ],
        expectedResult: "Price filter values persist in URL params and the UI range slider.",
        actualResult:
          "The slider range reset to the default 0–100M PHP while the URL parameter remained unchanged.",
        status: "Verified & Resolved",
      },
    },
  },
  {
    id: "qa-bitebalance",
    title: "BiteBalance PWA — End-to-End Testing & Security Audit",
    categoryTag: "Full Application QA",
    description:
      "End-to-end quality assurance, exploratory testing, UI/UX audit, and API validation for BiteBalance — a culturally tailored Filipino nutrition tracking progressive web app.",
    testingScope: [
      "Manual functional testing",
      "UI/UX usability auditing",
      "Postman API validation",
      "PWA offline & service worker audit",
      "Cross-browser mobile testing",
    ],
    deliverables: [
      "Structured test suite (100+ scenarios)",
      "Redacted bug severity matrix & issue logs",
      "Requirement traceability matrix (RTM)",
      "PWA Lighthouse & performance audit summary",
    ],
    metricsHighlights: [
      "Identified and documented 25+ functional, layout, and data validation bugs before launch",
      "Achieved a 100% test suite execution pass rate on the final release build v1.7",
      "Validated HTTP status codes and edge-case JSON payload error handling",
    ],
    toolsUsed: ["Postman", "Chrome DevTools", "GitHub Issues", "Playwright", "Lighthouse"],
    sampleDocTitle: "BiteBalance v1.7 Test Execution Summary & Bug Log",
    sampleDocContent: {
      overview:
        "Comprehensive end-to-end test execution covering meal logging workflows, Filipino food database search queries, caloric progress calculations, and offline storage caching.",
      totalTestCases: 105,
      passRate: "98.1%",
      criticalBugsFixed: 8,
      sampleBugReport: {
        bugId: "BUG-BB-042",
        title: "Calorie overflow error when logging portion sizes greater than 999g",
        severity: "High",
        stepsToReproduce: [
          "Navigate to the BiteBalance meal logger.",
          "Search for and select 'Adobo' from the localized database.",
          "Enter a portion weight of 1500 grams in the quantity field.",
          "Click 'Add Meal to Daily Log'.",
        ],
        expectedResult:
          "The system calculates the 1,500g metrics cleanly and updates the daily total without display overflow.",
        actualResult:
          "The UI container broke due to a missing integer boundary check, producing a NaN macro display.",
        status: "Verified & Resolved",
      },
    },
  },
  {
    id: "qa-ai-automation",
    title: "Automation Testing & AI Agent QA Methodologies",
    categoryTag: "Automation & AI QA",
    description:
      "Research and practical implementation of test automation, AI agent testing, AI-driven test case creation with Claude, and Playwright integrated with Gemini CLI.",
    testingScope: [
      "Automation tooling & workflow integration research",
      "AI agent testing & autonomous QA methodologies",
      "AI test case generation using Claude",
      "Automated testing with Playwright and Gemini CLI",
    ],
    deliverables: [
      "Automation workflow integration guides",
      "AI agent testing & prompt engineering matrix",
      "Playwright + Gemini CLI execution scripts",
      "Claude AI test case prompt repository",
    ],
    metricsHighlights: [
      "Used prompt workflows with Claude to draft structured test cases faster than writing them by hand",
      "Streamlined browser automation by combining Playwright with Gemini CLI",
      "Researched AI agent testing frameworks for autonomous bug discovery and suite maintenance",
    ],
    toolsUsed: ["Playwright", "Gemini CLI", "Claude AI", "Python", "Postman"],
    sampleDocTitle: "Automation & AI Agent Testing Framework Evaluation Report",
    sampleDocContent: {
      overview:
        "Practical research and implementation of automation testing tools, AI agent testing, prompt-based test generation with Claude, and Playwright with Gemini CLI.",
      totalTestCases: 65,
      passRate: "100%",
      criticalBugsFixed: 6,
      sampleBugReport: {
        bugId: "RESEARCH-AI-003",
        title: "Playwright with Gemini CLI DOM selector dynamic wait failure",
        severity: "Medium",
        stepsToReproduce: [
          "Generate an automated test script via a Claude AI prompt.",
          "Execute the script with Playwright and Gemini CLI against a dynamic React modal.",
        ],
        expectedResult: "Playwright auto-waits for element state before triggering the click.",
        actualResult:
          "An ElementHandle detached error was returned due to a missing explicit state guard.",
        status: "Verified & Resolved",
      },
    },
  },
  {
    id: "qa-physical-items",
    title: "Physical Items & Hardware Quality Inspection",
    categoryTag: "Physical Product QA",
    description:
      "Physical product quality inspection for BabyPlus alongside hardware testing for parking autotellers, entry barrier ticket dispensers, and handheld scanners.",
    testingScope: [
      "Physical product defect inspection (BabyPlus)",
      "Parking system hardware testing",
      "Material spec & packaging integrity checks",
      "Barcode & QR physical scanner readability",
    ],
    deliverables: [
      "Physical product quality inspection checklist",
      "Hardware sensor & reader verification logs",
      "Visual defect reports with high-resolution photos",
    ],
    metricsHighlights: [
      "Inspected product batches to ensure strict quality compliance and zero defect dispatches",
      "Verified autoteller payment printing, QR receipt readability, and barrier trigger sensors",
    ],
    toolsUsed: ["Inspection checklists", "Excel", "Barcode / QR scanners", "Jira"],
    sampleDocTitle: "Physical Item & Hardware Quality Assurance Summary",
    sampleDocContent: {
      overview:
        "Physical inspection procedures for BabyPlus product batches combined with stress testing of parking autoteller printers and handheld scanners.",
      totalTestCases: 55,
      passRate: "98.5%",
      criticalBugsFixed: 5,
      sampleBugReport: {
        bugId: "BUG-BABYPLUS-002",
        title: "Packaging seal integrity defect on physical item batch #408",
        severity: "High",
        stepsToReproduce: [
          "Inspect the physical product box seal under standard stress handling.",
          "Check adhesive bonding strength across a batch sample.",
        ],
        expectedResult: "The seal stays intact without peeling under light handling pressure.",
        actualResult:
          "Adhesive failed on 15% of the batch sample and was reported to the supplier for repackaging.",
        status: "Verified & Resolved",
      },
    },
  },
];

export default function QAShowcase(): React.JSX.Element {
  return (
    <Section
      id="qa-showcase"
      orbs={
        <>
          <Orb className="left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2" color="from-[#6ee7b7]/25" />
          <Orb className="-left-24 bottom-0 h-[24rem] w-[24rem]" color="from-accent/20" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Dedicated QA Showcase"
        eyebrowIcon={ShieldCheck}
        eyebrowTone="emerald"
        title="Projects"
        highlight="Tested & Quality Assured"
        lede="Software and physical hardware QA work — test suites, defect logs with screenshot evidence, and physical item quality inspections. Every project expands into its full test report."
      />

      <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { value: "450+", label: "Executed test cases", note: "Across web, mobile, and hardware", tone: "accent" as const },
          { value: "99.1%", label: "Average pass rate", note: "Weighted across all suites", tone: "emerald" as const },
          { value: "75+", label: "Bugs documented", note: "Severity-classified and verified", tone: "rust" as const },
          { value: "100%", label: "Defect traceability", note: "Every fix verified and signed off", tone: "accent" as const },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70}>
            <Stat {...stat} />
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {qaProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
            <QATestedProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
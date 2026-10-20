"use client";

import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutDetailed from "./components/AboutDetailed";
import InternshipExperience from "./components/InternshipExperience";
import SkillsMatrix from "./components/SkillsMatrix";
import DevProjects from "./components/DevProjects";
import QAShowcase from "./components/QAShowcase";
import TimelineAchievements from "./components/TimelineAchievements";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import ScrollFX from "./components/motion/ScrollFX";

export default function Home(): React.JSX.Element {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <ScrollFX />

      <Header onOpenResume={() => setIsResumeOpen(true)} />

      <main id="main">
        <Banner onOpenResume={() => setIsResumeOpen(true)} />
        <AboutDetailed />
        <InternshipExperience />
        <SkillsMatrix />
        <DevProjects />
        <QAShowcase />
        <TimelineAchievements />
        <ContactSection />
      </main>

      <Footer />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
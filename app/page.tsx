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

export default function Home(): React.JSX.Element {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <main className="min-h-screen bg-[#110720] text-white selection:bg-purple-600 selection:text-white">
      <Header onOpenResume={handleOpenResume} />
      <Banner onOpenResume={handleOpenResume} />
      <AboutDetailed />
      <InternshipExperience />
      <SkillsMatrix />
      <DevProjects />
      <QAShowcase />
      <TimelineAchievements />
      <ContactSection />
      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </main>
  );
}

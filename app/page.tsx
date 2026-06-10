"use client";
import { useState, useEffect, useRef } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import DefaultSection from "./components/DefaultSection";

const menuItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState<boolean | null>(null);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/bg-music.mp3");
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const handleToggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundEnabled) {
      audio.pause();
      setSoundEnabled(false);
    } else {
      try {
        await audio.play();
        setSoundEnabled(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEnter = () => {
    setHasEntered(true);
    if (soundEnabled === null) setSoundEnabled(false);
  };

  // Rendering the standalone Splash Screen
  if (!hasEntered) {
    return (
      <SplashScreen
        onEnter={handleEnter}
        onToggleSound={handleToggleSound}
        soundEnabled={soundEnabled}
      />
    );
  }

  // Rendering the Main Single Page Application Content
  return (
    <div className="relative min-h-screen bg-[#03080c] text-[#F5F2EC] scroll-smooth selection:bg-[#00e5ff]/30">
      
      {/* Background Ambience Layer */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-20 pointer-events-none mix-blend-screen">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <Navbar
        menuItems={menuItems}
        onToggleSound={handleToggleSound}
        soundEnabled={soundEnabled}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 pt-24 space-y-16 md:space-y-20">
        {menuItems.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="flex flex-col justify-center scroll-mt-28"
          >
            <SectionHeader label={item.label} />

            {item.id === "about" ? (
              <AboutSection />
            ) : item.id === "experience" ? (
              <ExperienceSection />
            ) : item.id === "skills" ? (
              <SkillsSection /> 
            ) : item.id === "projects" ? (
              <ProjectsSection />
            ) : item.id === "achievements" ? (
              <AchievementsSection />
            ) : item.id === "education" ? (
              <EducationSection />
            ) : item.id === "contact" ? (
              <ContactSection />
            ) : (
              <DefaultSection label={item.label} />
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

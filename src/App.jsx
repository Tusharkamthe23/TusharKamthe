import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeSection from "./components/HomeSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import Skillscards from "./components/Skillcards";
import AchievementsSection from "./components/AchievementsSection";
import { LoadingScreen } from "./components/LoadingScreen";
import BackgroundMusic from "./components/BackgroundMusic"; // 🔥 ADD

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />

      <Navbar />

      <BackgroundMusic /> {/* 🔥 ADD HERE (only once) */}

      <div className="pt-16">
        {isHomePage ? (
          <HomeSection />
        ) : (
          <Routes>
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/skills" element={<Skillscards />} />
            <Route path="/achievements" element={<AchievementsSection />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;

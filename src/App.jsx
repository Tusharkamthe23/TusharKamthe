import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeSection from "./components/HomeSection";
import Skills from "./components/Skillsection"
import ProjectSection from "./components/ProjectSection";
import TechSkills from "./components/Skillsection";
import AboutSection from "./components/AboutSection"
import Skillscards from "./components/Skillcards"
import { LoadingScreen } from "./components/LoadingScreen";
import { Suspense, useEffect, useState } from "react"; 
import AchievementsSection from "./components/AchievementsSection"
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const [started, setStarted] = useState(false);

  

  return (
    <>
      
      <LoadingScreen started={started} setStarted={setStarted} />
      <Navbar />
      
      
      <div className="pt-16">
        {isHomePage ? (
          <HomeSection />
        ) : (
          <Routes>
            <Route path="/about" element={< AboutSection/>} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/skills" element={<Skillscards />} />
            
            <Route path="/achievements" element={<AchievementsSection />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;

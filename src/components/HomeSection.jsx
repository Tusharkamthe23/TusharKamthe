// components/HomeSection.jsx
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Cursor } from "./Cursor";
import { Experience } from "./Experience";
import { Interface } from "./Interface";
import { Menu } from "./Menu";
import { ScrollManager } from "./ScrollManager";
import { framerMotionConfig } from "../config";
import { LoadingScreen } from "./LoadingScreen";
import ChatBot from './Chatbot';
const HomeSection = () => {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <div className="w-full h-screen overflow-hidden">
      <LoadingScreen started={started} setStarted={setStarted} />

      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && (
                  <Experience section={section} menuOpened={menuOpened} />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>

        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
        <Leva hidden />
      </MotionConfig>
      {/* Chatbot Component - This will render the floating chat icon */}
      <ChatBot />
      </div>
    </>
  );
};

export default HomeSection;

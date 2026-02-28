import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import React, { useEffect, useState } from 'react';

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />

      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Tushar Kamthe</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Passionate software engineer
        <br />
        with a deep focus on cutting-edge technologies
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};








const skills = [
  { title: "Machine Learning", x: 40, y: 60 },
  { title: "Deep Learning", x: 300, y: 10 },
  { title: "Neural Networks", x: 600, y: 70 },
  { title: "Computer Vision", x: 80, y: 140 },
  { title: "NLP", x: 480, y: 130 },
  { title: "Generative AI", x: 120, y: 250 },
  { title: "LLMs", x: 520, y: 270 },
  { title: "MLOps", x: 300, y: 120 },
];

// Neural network connections - creating a web-like structure
const connections = [
  [0, 1], [0, 3], [0, 7], [0, 5],
  [1, 2], [1, 4], [1, 7],
  [2, 4], [2, 6], [2, 7],
  [3, 5], [3, 7], [3, 4],
  [4, 5], [4, 6], [4, 7],
  [5, 6], [5, 7],
  [6, 7]
];

const SkillsSection  = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [pulsingConnections, setPulsingConnections] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomConnection = connections[Math.floor(Math.random() * connections.length)];
      setPulsingConnections(prev => [...prev, randomConnection]);
      
      setTimeout(() => {
        setPulsingConnections(prev => prev.filter(conn => conn !== randomConnection));
      }, 2000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (startIdx, endIdx) => {
    const start = skills[startIdx];
    const end = skills[endIdx];
    const midX = (start.x + end.x) / 2 + (Math.random() - 0.5) * 40;
    const midY = (start.y + end.y) / 2 + (Math.random() - 0.5) * 40;
    return `M ${start.x + 50} ${start.y + 20} Q ${midX} ${midY} ${end.x + 50} ${end.y + 20}`;
  };

  const isConnectionPulsing = (startIdx, endIdx) => {
    return pulsingConnections.some(conn => 
      (conn[0] === startIdx && conn[1] === endIdx) || 
      (conn[0] === endIdx && conn[1] === startIdx)
    );
  };

  const getConnectedNodes = (nodeIndex) => {
    return connections
      .filter(([start, end]) => start === nodeIndex || end === nodeIndex)
      .map(([start, end]) => start === nodeIndex ? end : start);
  };

  return (
    
    <div className="w-full">

      <div style={{ height: '200px', visibility: 'hidden' }}>

      </div>
      <motion.h2 
        className="text-3xl md:text-5xl font-bold text-white mb-8 text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ paddingLeft:300}}>
          <h1>Skills</h1>
        </div>
      </motion.h2>
      
      <div className="relative w-full h-80 overflow-hidden">
        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {connections.map(([startIdx, endIdx], connIdx) => {
            const isPulsing = isConnectionPulsing(startIdx, endIdx);
            const isConnectedToActive = activeNode !== null && 
              (startIdx === activeNode || endIdx === activeNode);
            
            return (
              <motion.path
                key={`${startIdx}-${endIdx}`}
                d={getConnectionPath(startIdx, endIdx)}
                stroke={isPulsing ? "url(#pulseGradient)" : 
                       isConnectedToActive ? "#8B5CF6" : "url(#connectionGradient)"}
                strokeWidth={isPulsing ? "3" : isConnectedToActive ? "2" : "1"}
                fill="none"
                opacity={isPulsing ? 1 : isConnectedToActive ? 0.8 : 0.4}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: isPulsing ? 1 : isConnectedToActive ? 0.8 : 0.4
                }}
                transition={{ 
                  pathLength: { duration: 2, delay: connIdx * 0.05 },
                  opacity: { duration: 0.3 }
                }}
              />
            );
          })}
        </svg>

        {/* Skill nodes */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="absolute cursor-pointer"
            style={{ left: skill.x, top: skill.y, zIndex: 2 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 150 
            }}
            onMouseEnter={() => setActiveNode(index)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Outer neural glow */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: activeNode === index ? 
                  "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)" :
                  "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                width: "140px",
                height: "70px",
                left: "-20px",
                top: "-10px",
              }}
              animate={{
                scale: activeNode === index ? 1.5 : 1,
                opacity: activeNode === index ? 1 : 0.6,
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Main neural node */}
            <motion.div
              className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full px-4 py-3 min-w-[100px] text-center group"
              animate={{
                scale: activeNode === index ? 1.15 : 1,
                boxShadow: activeNode === index ? 
                  "0 0 30px rgba(251, 191, 36, 0.8), 0 0 50px rgba(139, 92, 246, 0.4)" : 
                  "0 0 15px rgba(139, 92, 246, 0.4)",
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Synaptic firing effect */}
              <motion.div
                className="absolute inset-1 bg-white/10 rounded-full"
                animate={{
                  opacity: activeNode === index ? [0.1, 0.6, 0.1] : [0.1, 0.3, 0.1],
                  scale: activeNode === index ? [0.9, 1.1, 0.9] : [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: activeNode === index ? 1 : 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Neural branching patterns */}
              {activeNode === index && (
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-yellow-300 rounded-full"
                      style={{
                        left: `${30 + Math.cos(i * 45 * Math.PI / 180) * 25}px`,
                        top: `${15 + Math.sin(i * 45 * Math.PI / 180) * 10}px`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 1, 0],
                        x: Math.cos(i * 45 * Math.PI / 180) * 20,
                        y: Math.sin(i * 45 * Math.PI / 180) * 20,
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Skill text */}
              <motion.span
                className="relative z-10 text-white font-semibold text-xs md:text-sm whitespace-nowrap"
                animate={{
                  color: activeNode === index ? "#FBBF24" : "#FFFFFF",
                  textShadow: activeNode === index ? 
                    "0 0 10px rgba(251, 191, 36, 0.8)" : "none"
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.title}
              </motion.span>
            </motion.div>

            {/* Neural dendrites */}
            {activeNode === index && (
              <div className="absolute inset-0 pointer-events-none">
                {getConnectedNodes(index).map((connectedIdx, i) => (
                  <motion.div
                    key={connectedIdx}
                    className="absolute w-1 h-1 bg-orange-400 rounded-full"
                    style={{
                      left: "50px",
                      top: "20px",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.8, 0],
                      x: (skills[connectedIdx].x - skills[index].x) * 0.3,
                      y: (skills[connectedIdx].y - skills[index].y) * 0.3,
                    }}
                    transition={{
                      duration: 1.8,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* Neural activity particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`neural-particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-300/60 rounded-full pointer-events-none"
            style={{
              left: Math.random() * 450,
              top: Math.random() * 300,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 150],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Brain wave patterns */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute rounded-full border border-purple-400/10"
              style={{
                left: "200px",
                top: "150px",
                width: "40px",
                height: "40px",
                marginLeft: "-20px",
                marginTop: "-20px",
              }}
              animate={{
                scale: [1, 15],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};


const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div style={{ paddingTop:400}}></div>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mdkdabze");
  return (
    <Section >
      <div style={{ paddingTop:300}}></div>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-18 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};

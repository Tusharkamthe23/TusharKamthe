import React, { useState, useEffect, useRef } from 'react';
import { Brain, Bot, Zap, Eye, MessageSquare, Database, Code, Cpu, Network, GitBranch } from 'lucide-react';
import Skillscards from "./Skillcards"
const TechSkills = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [connectionPulse, setConnectionPulse] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionPulse(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: rect.width,
          height: 600
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const skills = [
    {
      id: 'gen-ai',
      name: 'Generative AI',
      icon: Zap,
      description: 'Building intelligent systems with LLMs, prompt engineering, and fine-tuning',
      technologies: ['GPT-4', 'Claude', 'LangChain', 'Ollama', 'Hugging Face'],
      color: 'from-violet-500 to-purple-600',
      position: { x: 50, y: 15 },
      connections: ['nlp', 'deep-learning', 'llm-ops']
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      icon: Brain,
      description: 'Advanced ML algorithms, ensemble methods, and predictive modeling',
      technologies: ['Scikit-learn', 'XGBoost', 'Random Forest', 'SVM', 'Gradient Boosting'],
      color: 'from-blue-500 to-cyan-600',
      position: { x: 20, y: 35 },
      connections: ['data-science', 'deep-learning', 'computer-vision']
    },
    {
      id: 'deep-learning',
      name: 'Deep Learning',
      icon: Network,
      description: 'Neural networks, transformers, and custom architecture design',
      technologies: ['PyTorch', 'TensorFlow', 'Keras', 'JAX', 'Lightning'],
      color: 'from-emerald-500 to-teal-600',
      position: { x: 70, y: 35 },
      connections: ['gen-ai', 'computer-vision', 'nlp']
    },
    {
      id: 'nlp',
      name: 'Natural Language Processing',
      icon: MessageSquare,
      description: 'Text analysis, sentiment mining, and conversational AI systems',
      technologies: ['spaCy', 'NLTK', 'Transformers', 'BERT', 'T5'],
      color: 'from-orange-500 to-red-600',
      position: { x: 65, y: 65 },
      connections: ['gen-ai', 'deep-learning', 'chatbots']
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      icon: Eye,
      description: 'Image processing, object detection, and real-time visual AI',
      technologies: ['OpenCV', 'YOLO', 'Detectron2', 'MediaPipe', 'PIL'],
      color: 'from-indigo-500 to-purple-600',
      position: { x: 25, y: 65 },
      connections: ['deep-learning', 'machine-learning', 'robotics']
    },
    {
      id: 'data-science',
      name: 'Data Science',
      icon: Database,
      description: 'Statistical analysis, data visualization, and feature engineering',
      technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
      color: 'from-yellow-500 to-orange-600',
      position: { x: 20, y: 15 },
      connections: ['machine-learning', 'analytics', 'visualization']
    },
    {
      id: 'llm-ops',
      name: 'LLM Operations',
      icon: Bot,
      description: 'Deploying and scaling large language models in production',
      technologies: ['vLLM', 'Ollama', 'LangServe', 'Docker', 'Kubernetes'],
      color: 'from-pink-500 to-rose-600',
      position: { x: 75, y: 15 },
      connections: ['gen-ai', 'mlops', 'deployment']
    },
    {
      id: 'mlops',
      name: 'MLOps',
      icon: GitBranch,
      description: 'ML pipeline automation, model monitoring, and CI/CD',
      technologies: ['MLflow', 'Kubeflow', 'DVC', 'Weights & Biases', 'Apache Airflow'],
      color: 'from-teal-500 to-cyan-600',
      position: { x: 45, y: 85 },
      connections: ['llm-ops', 'deployment', 'monitoring']
    }
  ];

  const getNodePosition = (skill) => {
    return {
      x: (skill.position.x / 100) * containerDimensions.width,
      y: (skill.position.y / 100) * containerDimensions.height
    };
  };

  const getConnectionPath = (start, end) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Create a smooth curve
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    
    // Add some curvature based on distance
    const curvature = Math.min(distance * 0.3, 100);
    const perpX = -dy / distance * curvature;
    const perpY = dx / distance * curvature;
    
    return `M ${start.x} ${start.y} Q ${midX + perpX} ${midY + perpY} ${end.x} ${end.y}`;
  };

  const getConnectionLength = (path) => {
    const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tempPath.setAttribute('d', path);
    return tempPath.getTotalLength ? tempPath.getTotalLength() : 200;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-3/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Mouse Follower */}
      <div 
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            AI Neural Network
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Explore my interconnected AI/ML expertise through an interactive neural network visualization
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2 text-blue-400">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm">Input Layer</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm">Hidden Layer</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-400">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm">Output Layer</span>
            </div>
          </div>
        </div>

        {/* Neural Network Visualization */}
        <div className="relative max-w-7xl mx-auto">
          {containerDimensions.width > 0 && (
            <svg 
              className="absolute inset-0 w-full pointer-events-none"
              width={containerDimensions.width}
              height={containerDimensions.height}
              style={{ height: '600px' }}
            >
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connections */}
              {skills.map(skill => 
                skill.connections.map(connectionId => {
                  const connectedSkill = skills.find(s => s.id === connectionId);
                  if (!connectedSkill) return null;
                  
                  const startPos = getNodePosition(skill);
                  const endPos = getNodePosition(connectedSkill);
                  const path = getConnectionPath(startPos, endPos);
                  
                  const isActive = activeNode === skill.id || activeNode === connectionId;
                  const bothActive = activeNode === skill.id && skill.connections.includes(connectionId);
                  
                  return (
                    <g key={`${skill.id}-${connectionId}`}>
                      {/* Base connection line */}
                      <path
                        d={path}
                        stroke={isActive ? 'url(#connectionGradient)' : '#334155'}
                        strokeWidth={isActive ? '2' : '1'}
                        fill="none"
                        className="transition-all duration-500"
                        opacity={isActive ? 0.8 : 0.3}
                        filter={isActive ? 'url(#glow)' : 'none'}
                      />
                      
                      {/* Animated pulse dots */}
                      {isActive && (
                        <>
                          <circle r="3" fill="#8b5cf6" opacity="0.9">
                            <animateMotion
                              dur="2s"
                              repeatCount="indefinite"
                              path={path}
                            />
                            <animate
                              attributeName="r"
                              values="3;5;3"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle r="2" fill="#06b6d4" opacity="0.7">
                            <animateMotion
                              dur="2.5s"
                              repeatCount="indefinite"
                              path={path}
                            />
                          </circle>
                          <circle r="1.5" fill="#ec4899" opacity="0.8">
                            <animateMotion
                              dur="1.8s"
                              repeatCount="indefinite"
                              path={path}
                            />
                          </circle>
                        </>
                      )}
                      
                      {/* Bidirectional flow for strong connections */}
                      {bothActive && (
                        <circle r="2" fill="#fbbf24" opacity="0.6">
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            path={path}
                            keyTimes="0;1"
                            keyPoints="1;0"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })
              )}
            </svg>
          )}

          {/* Skill Nodes */}
          <div className="relative" style={{ height: '600px' }}>
            {skills.map(skill => {
              const Icon = skill.icon;
              const isActive = activeNode === skill.id;
              
              return (
                <div
                  key={skill.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isActive ? 'scale-110 z-30' : 'scale-100 z-10'
                  }`}
                  style={{
                    left: `${skill.position.x}%`,
                    top: `${skill.position.y}%`,
                  }}
                  onMouseEnter={() => setActiveNode(skill.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Outer glow ring */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-md animate-pulse" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }} />
                      <div className="absolute inset-0 w-28 h-28 rounded-full border-2 border-purple-400/50 animate-ping" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }} />
                    </>
                  )}
                  
                  {/* Node Circle */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${skill.color} shadow-2xl cursor-pointer group ${
                    isActive ? 'shadow-purple-500/50' : ''
                  }`}>
                    <div className="absolute inset-2 rounded-full bg-slate-900/90 flex items-center justify-center backdrop-blur-sm">
                      <Icon className={`w-8 h-8 text-white transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                    </div>
                    
                    {/* Inner pulse */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent animate-pulse" />
                  </div>
                  
                  {/* Skill Details Card */}
                  {isActive && (
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-80 bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl animate-fadeIn z-40">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-l border-t border-slate-700/50" />
                      <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {skill.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Key Technologies</div>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs rounded-full bg-slate-800/80 text-slate-300 border border-slate-600/50 hover:border-purple-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Neural Network Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{skills.length}</div>
              <div className="text-slate-400 text-sm">Neural Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {skills.reduce((acc, skill) => acc + skill.connections.length, 0)}
              </div>
              <div className="text-slate-400 text-sm">Active Connections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">
                {skills.reduce((acc, skill) => acc + skill.technologies.length, 0)}
              </div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </div>
   
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        .neural-pulse {
          animation: neuralPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TechSkills;
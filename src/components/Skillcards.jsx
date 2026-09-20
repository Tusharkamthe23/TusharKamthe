import React, { useState } from 'react';
import { Code, Database, Globe, Palette, Brain, Server, Smartphone, GitBranch, Star, Award, Zap } from 'lucide-react';

const Skillscards = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Code, color: 'bg-purple-500' },
    { name: 'AI/ML', icon: Brain, color: 'bg-pink-500' },
    { name: 'Agentic AI', icon: Brain, color: 'bg-pink-500' },
    { name: 'Frontend', icon: Globe, color: 'bg-blue-500' },
    { name: 'Backend', icon: Server, color: 'bg-green-500' },
    
    { name: 'Tools', icon: GitBranch, color: 'bg-orange-500' }
  ];

  const skills = [
    // Frontend Skills
    {
      id: 1,
      name: 'React',
      category: 'Frontend',
      level: 'Expert',
      icon: '⚛️',
      description: 'Building modern, interactive user interfaces with hooks and state management',
      tags: ['Hooks', 'Context API', 'Redux', 'JSX'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 2,
      name: 'JavaScript',
      category: 'Frontend',
      level: 'Expert',
      icon: '🟨',
      description: 'ES6+, async programming, and modern JavaScript development',
      tags: ['ES6+', 'Async/Await', 'DOM', 'APIs'],
      levelColor: 'text-green-600 bg-green-100'
    },
    
    {
      id: 4,
      name: 'Next.js',
      category: 'Frontend',
      level: 'Advanced',
      icon: '▲',
      description: 'Full-stack React framework with SSR and API routes',
      tags: ['SSR', 'SSG', 'API Routes', 'Performance'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 5,
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'Advanced',
      icon: '🎨',
      description: 'Utility-first CSS framework for rapid UI development',
      tags: ['Responsive', 'Components', 'Utilities', 'Design'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    
    // Backend Skills
    {
      id: 7,
      name: 'javascript',
      category: 'Backend',
      level: 'Expert',
      icon: '🟢',
      description: 'Server-side JavaScript runtime with Express and REST APIs',
      tags: ['Express', 'REST API', 'NPM', 'Middleware'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 8,
      name: 'Python',
      category: 'Backend',
      level: 'Expert',
      icon: '🐍',
      description: 'Versatile programming language for web development and data science',
      tags: ['Django', 'Flask', 'FastAPI', 'Libraries'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 9,
      name: 'MongoDB',
      category: 'Backend',
      level: 'Advanced',
      icon: '🍃',
      description: 'NoSQL database with flexible schema and powerful queries',
      tags: ['NoSQL', 'Aggregation', 'Indexing', 'Mongoose'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 10,
      name: 'SQL Server',
      category: 'Backend',
      level: 'Advanced',
      icon: '🐘',
      description: 'Powerful relational database with advanced features',
      tags: ['SQL', 'Relations', 'Optimization', 'JSON'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 11,
      name: 'GraphQL',
      category: 'Backend',
      level: 'Intermediate',
      icon: '🔺',
      description: 'Query language for APIs with efficient data fetching',
      tags: ['Schema', 'Resolvers', 'Apollo', 'Subscriptions'],
      levelColor: 'text-yellow-600 bg-yellow-100'
    },
    {
      id: 12,
      name: 'Docker',
      category: 'Backend',
      level: 'Advanced',
      icon: '🐳',
      description: 'Containerization platform for consistent deployments',
      tags: ['Containers', 'Images', 'Compose', 'Deployment'],
      levelColor: 'text-blue-600 bg-blue-100'
    },

    // AI/ML Skills

    
    {
      id: 13,
      name: 'TensorFlow',
      category: 'AI/ML',
      level: 'Advanced',
      icon: '🧠',
      description: 'Deep learning framework for neural networks and AI models',
      tags: ['Neural Networks', 'Training', 'Models', 'Keras'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 14,
      name: 'PyTorch',
      category: 'AI/ML',
      level: 'Advanced',
      icon: '🔥',
      description: 'Dynamic neural network framework for research and production',
      tags: ['Dynamic Graphs', 'Research', 'Training', 'GPU'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 15,
      name: 'Scikit-learn',
      category: 'AI/ML',
      level: 'Expert',
      icon: '📊',
      description: 'Machine learning library with comprehensive algorithms',
      tags: ['Algorithms', 'Preprocessing', 'Evaluation', 'Pipeline'],
      levelColor: 'text-green-600 bg-green-100'
    },
    
    {
      id: 16,
      name: 'langchain',
      category: 'AI/ML',
      level: 'Expert',
      icon: '🤖',
      description: 'Framework for building LLM-powered applications',
      tags: ['GPT', 'Embeddings', 'Fine-tuning', 'Prompts'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 17,
      name: 'Pandas',
      category: 'AI/ML',
      level: 'Expert',
      icon: '🐼',
      description: 'Data manipulation and analysis library for Python',
      tags: ['DataFrames', 'Analysis', 'Cleaning', 'Visualization'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 18,
      name: 'NumPy',
      category: 'AI/ML',
      level: 'Expert',
      icon: '🔢',
      description: 'Numerical computing library with powerful array operations',
      tags: ['Arrays', 'Mathematics', 'Linear Algebra', 'Performance'],
      levelColor: 'text-green-600 bg-green-100'
    },

    // Tools
    {
      id: 19,
      name: 'Git',
      category: 'Tools',
      level: 'Expert',
      icon: '📋',
      description: 'Version control system for collaborative development',
      tags: ['Branching', 'Merging', 'Collaboration', 'Workflow'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 20,
      name: 'AWS',
      category: 'Tools',
      level: 'Advanced',
      icon: '☁️',
      description: 'Cloud computing platform with scalable services',
      tags: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 21,
      name: 'Figma',
      category: 'Tools',
      level: 'Intermediate',
      icon: '🎨',
      description: 'Design tool for UI/UX and collaborative prototyping',
      tags: ['Design', 'Prototyping', 'Collaboration', 'Components'],
      levelColor: 'text-yellow-600 bg-yellow-100'
    },
    {
      id: 22,
      name: 'VS Code',
      category: 'Tools',
      level: 'Expert',
      icon: '💻',
      description: 'Code editor with extensions and integrated development',
      tags: ['Extensions', 'Debugging', 'IntelliSense', 'Git'],
      levelColor: 'text-green-600 bg-green-100'
    },
    {
      id: 23,
      name: 'Postman',
      category: 'Tools',
      level: 'Advanced',
      icon: '📮',
      description: 'API development and testing platform',
      tags: ['Testing', 'Documentation', 'Automation', 'Collections'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 24,
      name: 'Webpack',
      category: 'Tools',
      level: 'Intermediate',
      icon: '📦',
      description: 'Module bundler for modern JavaScript applications',
      tags: ['Bundling', 'Optimization', 'Loaders', 'Plugins'],
      levelColor: 'text-yellow-600 bg-yellow-100'
    },

    {
      id: 25,
      name: 'LangGraph',
      category: 'Agentic AI',
      level: 'Advanced',
      icon: '🕸️',
      description: 'Framework for building stateful, multi-agent workflows with LLMs using graphs',
      tags: ['Agents', 'LLM Workflows', 'State Machines', 'LangChain'],
      levelColor: 'text-purple-600 bg-purple-100'
    },
    {
      id: 26,
      name: 'CrewAI',
      category: 'Agentic AI',
      level: 'Advanced',
      icon: '🤖',
      description: 'Framework for orchestrating role-based AI agents working together as a team',
      tags: ['Multi-Agent', 'Autonomous Agents', 'LLM Orchestration', 'Task Collaboration'],
      levelColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: 27,
      name: 'AutoGen',
      category: 'Agentic AI',
      level: 'Advanced',
      icon: '⚙️',
      description: 'Microsoft framework for building multi-agent AI systems that collaborate to solve tasks',
      tags: ['Agents', 'LLM Collaboration', 'Automation', 'AI Systems'],
      levelColor: 'text-indigo-600 bg-indigo-100'
    },
 
    {
      id: 29,
      name: 'n8n',
      category: 'Agentic AI',
      level: 'Advanced',
      icon: '🔗',
      description: 'Powerful workflow automation platform for integrating APIs, AI models, and services without heavy coding',
      tags: ['Automation', 'Integrations', 'AI Workflows', 'Webhooks'],
      levelColor: 'text-orange-600 bg-orange-100'
    }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelIcon = (level) => {
    switch(level) {
      case 'Expert': return <Star className="w-4 h-4" />;
      case 'Advanced': return <Award className="w-4 h-4" />;
      case 'Intermediate': return <Zap className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div 
    className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 pt-10 relative overflow-hidden"
     //className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden"
     >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-violet-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and experience levels
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.name
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/80 shadow-md'
                }`}
              >
                <IconComponent size={20} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/80 group border border-white/20"
            >
              <div className="p-6">
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${skill.levelColor} mt-1`}>
                        {getLevelIcon(skill.level)}
                        {skill.level}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${
                    skill.category === 'AI/ML' ? 'bg-pink-500/90' :
                    skill.category === 'Agentic AI' ? 'bg-pink-500/90' :
                    skill.category === 'Frontend' ? 'bg-blue-500/90' :
                    skill.category === 'Backend' ? 'bg-green-500/90' :
                    
                    'bg-orange-500/90'
                  }`}>
                    {skill.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100/80 text-gray-700 rounded-md text-xs font-medium backdrop-blur-sm hover:bg-gray-200/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Code size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">
              No skills found
            </h3>
            <p className="text-gray-400">
              Try selecting a different category to view skills.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skillscards;
import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Brain, Globe, Code } from 'lucide-react';

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Code, color: 'bg-purple-500' },
    { name: 'Gen AI', icon: Sparkles, color: 'bg-pink-500' },
    { name: 'ML', icon: Brain, color: 'bg-blue-500' },
    { name: 'Web', icon: Globe, color: 'bg-green-500' }
  ];

  const projects = [
    {
      id: 10,
      title: 'Crop AI',
      description: 'Create stunning AI-generated artwork using diffusion models and custom prompts.',
      category: 'Gen AI',
      image: 'https://tushar26.pythonanywhere.com/static/style/two1.jpg',
      technologies: ['Python', 'Stable Diffusion', 'Flask', 'tensorflow'],
      github: 'https://github.com',
      demo: 'https://tushar26.pythonanywhere.com/'
    },
    {
      id: 4,
      title: 'video AI Agent',
      description: 'Machine learning model that predicts stock prices using historical data and technical indicators.',
      category: 'Gen AI',
      image: 'data:image/jpeg;base64,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',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/Tusharkamthe23/Video-Ai-Agent',
      demo: 'https://multimodel-ai-agent.streamlit.app/'
    },
    {
      id: 3,
      title: 'Sentiment Analysis classification Tool',
      description: 'Fine-tuned the LLaMA 3.2 model for sentiment and feedback classification by analyzing customer reviews and social media data using advanced NLP techniques.',
      category: 'Gen AI',
      image: 'projects/FineTune.png',
      technologies: ['QLoRA', 'Lamma 3.2', 'LLM Fine Tuning'],
      github: 'https://github.com/Tusharkamthe23/LLaMA-3.2-Fine-Tuning-for-Sentiment-Analysis-on-Amazon-Reviews',
      demo: 'https://huggingface.co/Tushar1K/llama3.2-merged-sentiment'
    },
    {
      id: 1,
      title: 'AI Chat Assistant',
      description: 'Advanced conversational AI built with transformer models and natural language processing.',
      category: 'Gen AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
     {
    id: 11,
      title: 'Image Generation Studio',
      description: 'Create stunning AI-generated artwork using diffusion models and custom prompts.',
      category: 'Gen AI',
      image: 'projects/Diffusion_model.png',
      technologies: ['Python', 'Stable Diffusion', 'Flask', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
   
    {
      id: 0,
      title: 'Potato disease classification',
      description: 'Machine learning model that predicts potato disease using historical data and technical indicators.',
      category: 'ML',
      image: 'https://tushar26.pythonanywhere.com/static/style/three2.jpg',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/Tusharkamthe23/Potato-disease-classification',
      demo: 'https://demo.com'
    },
    
    {
      id: 3,
      title: 'Crop recommendation system',
      description: 'Machine learning model that recommend crop using historical data and technical indicators.',
      category: 'ML',
      image: 'https://tushar26.pythonanywhere.com/static/style/two1.jpg',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/Tusharkamthe23/Crop-recommendation-system',
      demo: 'https://demo.com'
    },
    {
    id: 5,
    title: 'AI README Generator',
    description: 'LLM-powered application that automatically generates high-quality GitHub README files from project source code and metadata.',
    category: 'AI',
    image: 'projects/ReadMe.jpg',
    technologies: ['Python', 'LLM (LLaMA 3.2)', 'FastAPI', 'LangChain', 'GitHub API'],
    github: 'https://github.com/Tusharkamthe23/README.AI',
    demo: 'https://readme--ai.streamlit.app/'
  },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Tusharkamthe23/E-Shop',
      demo: 'https://tusharkamthe23.github.io/E-Shop/'
    },
  
    {
      id: 4,
      title: 'Traveling Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      category: 'Web',
      image: 'https://tusharkamthe23.github.io/WebTravel/gimg-5.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Tusharkamthe23/WebTravel/',
      demo: 'https://tusharkamthe23.github.io/WebTravel/'
    },
    {
      id: 5,
      title: 'Food website',
      description: 'food ordering web.',
      category: 'Web',
      image: 'https://tusharkamthe23.github.io/CafeWeb/burger.jpg',
      technologies: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
    

    
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div id="project" 
    className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-20 relative overflow-hidden"
     //className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6"
     >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-2000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of innovative projects across AI, Machine Learning, and Web Development
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
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <IconComponent size={20} />
                {category.name} Projects
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:bg-white/90 group max-w-md mx-auto"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${
                    project.category === 'Gen AI' ? 'bg-pink-500/90' :
                    project.category === 'ML' ? 'bg-blue-500/90' :
                    'bg-green-500/90'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Code size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">
              Try selecting a different category to view projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
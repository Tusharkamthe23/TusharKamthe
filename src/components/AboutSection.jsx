import React from 'react';
import { Github, Linkedin, Building, Brain, Cloud, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    { icon: Brain, label: 'AI/ML', color: 'text-purple-500' },
    { icon: Sparkles, label: 'GenAI', color: 'text-blue-500' },
    { icon: Cloud, label: 'DevOps', color: 'text-green-500' }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-60 h-60 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                    TK
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Tusharkamthe23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white group-hover:text-blue-400" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/tushar-kamthe-1248a1280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRpC%2BxLIZTjaWFzCY6GDDYQ%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Hello, I'm Tushar Kamthe</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Passionate software engineer with a deep focus on cutting-edge technologies. 
                I love building innovative solutions that bridge the gap between complex technical 
                challenges and real-world applications. My journey in tech has been driven by 
                curiosity and a constant desire to learn and grow.
              </p>
            </div>

            {/* Current Company */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-400">Currently Working At</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-white">HCL Technologies</p>
                <p className="text-slate-300">Senior Software Engineer</p>
                <p className="text-sm text-slate-400">Building scalable AI-powered applications and cloud infrastructure</p>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-purple-400">Areas of Interest</h3>
              <div className="grid grid-cols-1 gap-4">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                    >
                      <IconComponent className={`w-6 h-6 ${interest.color} mr-4 group-hover:scale-110 transition-transform`} />
                      <span className="text-white font-medium">{interest.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React, { useState, useEffect } from 'react';
import { Award, FileText, ExternalLink, Calendar, Users, BookOpen, Star, ChevronRight, Download, Eye, Zap, Trophy, Target } from 'lucide-react';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [animateStats, setAnimateStats] = useState(false);

  // Sample data with enhanced interactivity
  const certifications = [
    {
      id: 1,
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWC-123456789",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop",
      description: "Advanced cloud architecture and solution design certification with hands-on labs and real-world scenarios.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"],
      level: "Expert",
      difficulty: 9,
      progress: 100,
      verified: true,
      category: "cloud"
    },
    {
      id: 2,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-987654321",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=100&h=100&fit=crop",
      description: "Comprehensive data engineering certification covering BigQuery, Dataflow, and ML pipelines.",
      skills: ["Data Engineering", "BigQuery", "ML", "Pipeline Design"],
      level: "Professional",
      difficulty: 8,
      progress: 95,
      verified: true,
      category: "data"
    },
    {
      id: 3,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-456789123",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop",
      description: "Hands-on certification for managing Kubernetes clusters in production environments.",
      skills: ["Kubernetes", "Docker", "DevOps", "Container Management"],
      level: "Professional",
      difficulty: 7,
      progress: 92,
      verified: true,
      category: "devops"
    }
  ];

  const researchPapers = [
    {
      id: 1,
      title: "Deep Learning Approaches for Real-Time Object Detection in Autonomous Vehicles",
      authors: ["John Doe", "Jane Smith", "Dr. Michael Johnson"],
      journal: "IEEE Transactions on Intelligent Transportation Systems",
      date: "2024",
      citations: 23,
      downloads: 1247,
      doi: "10.1109/TITS.2024.1234567",
      abstract: "This paper presents novel deep learning architectures optimized for real-time object detection in autonomous vehicle systems, achieving 98.7% accuracy with 15ms latency.",
      keywords: ["Deep Learning", "Computer Vision", "Autonomous Vehicles", "Object Detection"],
      status: "Published",
      impact: 8.5,
      category: "ai"
    },
    {
      id: 2,
      title: "Blockchain-Based Secure Data Sharing Framework for Healthcare Systems",
      authors: ["John Doe", "Dr. Sarah Wilson"],
      journal: "Journal of Medical Internet Research",
      date: "2023",
      citations: 45,
      downloads: 2156,
      doi: "10.2196/12345",
      abstract: "We propose a blockchain-based framework that enables secure and privacy-preserving data sharing among healthcare providers while maintaining HIPAA compliance.",
      keywords: ["Blockchain", "Healthcare", "Data Security", "Privacy"],
      status: "Published",
      impact: 9.2,
      category: "blockchain"
    },
    {
      id: 3,
      title: "Quantum-Classical Hybrid Algorithms for Portfolio Optimization",
      authors: ["John Doe", "Dr. Alex Chen", "Prof. Maria Rodriguez"],
      journal: "Quantum Information Processing",
      date: "2024",
      citations: 12,
      downloads: 456,
      doi: "10.1007/s11128-024-12345-6",
      abstract: "This work explores the application of quantum-classical hybrid algorithms to solve complex portfolio optimization problems, demonstrating 40% improvement in solution quality.",
      keywords: ["Quantum Computing", "Portfolio Optimization", "Hybrid Algorithms", "Finance"],
      status: "Under Review",
      impact: 7.8,
      category: "quantum"
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Deep Learning Approaches for Real-Time Object Detection in Autonomous Vehicles",
      authors: ["John Doe", "Jane Smith", "Dr. Michael Johnson"],
      journal: "IEEE Transactions on Intelligent Transportation Systems",
      date: "2024",
      citations: 23,
      downloads: 1247,
      doi: "10.1109/TITS.2024.1234567",
      abstract: "This paper presents novel deep learning architectures optimized for real-time object detection in autonomous vehicle systems, achieving 98.7% accuracy with 15ms latency.",
      keywords: ["Deep Learning", "Computer Vision", "Autonomous Vehicles", "Object Detection"],
      status: "Published",
      impact: 8.5,
      category: "ai"
    },
  ];
  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Filter functions
  const getFilteredCertifications = () => {
    let filtered = certifications;
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(cert => cert.category === selectedFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(cert => 
        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return filtered;
  };

  const getFilteredResearch = () => {
    let filtered = researchPapers;
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(paper => paper.category === selectedFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(paper => 
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return filtered;
  };

  const TabButton = ({ id, label, icon: Icon, isActive, onClick, count }) => (
    <button
      onClick={() => onClick(id)}
      className={`group relative flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 font-medium transform hover:scale-105 ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-600/30'
          : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl border border-gray-200'
      }`}
    >
      <Icon size={24} className={isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'} />
      <div className="flex flex-col items-start">
        <span className="text-lg">{label}</span>
        <span className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
          {count} items
        </span>
      </div>
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-bounce shadow-lg" />
      )}
    </button>
  );

  const FilterButton = ({ filter, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(filter)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const AnimatedProgressBar = ({ progress, delay = 0 }) => {
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, delay);
      return () => clearTimeout(timer);
    }, [progress, delay]);

    return (
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
          style={{ width: `${currentProgress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    );
  };

  const CertificationCard = ({ cert, index }) => (
    <div
      className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-105 ${
        hoveredItem === `cert-${cert.id}` ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
      }`}
      onMouseEnter={() => setHoveredItem(`cert-${cert.id}`)}
      onMouseLeave={() => setHoveredItem(null)}
      style={{
        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0">
          <img
            src={cert.image}
            alt={cert.issuer}
            className="w-20 h-20 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {cert.verified && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Star className="text-white" size={14} />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {cert.title}
            </h3>
            <div className="flex items-center space-x-2">
              <Trophy className="text-yellow-500 group-hover:animate-pulse" size={24} />
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                cert.level === 'Expert' ? 'bg-red-100 text-red-800' :
                cert.level === 'Professional' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {cert.level}
              </span>
            </div>
          </div>
          
          <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>
          
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">Mastery Level</span>
              <span className="font-bold text-blue-600">{cert.progress}%</span>
            </div>
            <AnimatedProgressBar progress={cert.progress} delay={index * 200} />
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{cert.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileText size={16} />
              <span>{cert.credentialId}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="text-orange-500" size={16} />
              <span>Difficulty: {cert.difficulty}/10</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
            <ExternalLink size={16} />
            <span>View Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );

  const ResearchPaperCard = ({ paper, index }) => (
    <div
      className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-105 ${
        hoveredItem === `paper-${paper.id}` ? 'ring-4 ring-purple-400 ring-opacity-50' : ''
      }`}
      onMouseEnter={() => setHoveredItem(`paper-${paper.id}`)}
      onMouseLeave={() => setHoveredItem(null)}
      style={{
        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex-1 mr-4 group-hover:text-purple-600 transition-colors">
          {paper.title}
        </h3>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              paper.status === 'Published'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {paper.status}
          </span>
          <ExternalLink className="text-purple-600 cursor-pointer hover:text-purple-800 hover:scale-110 transition-all" size={20} />
        </div>
      </div>

      <div className="flex items-center space-x-1 mb-3">
        <Users size={16} className="text-gray-400" />
        <p className="text-gray-600 text-sm">
          {paper.authors.join(', ')}
        </p>
      </div>

      <p className="text-purple-600 font-semibold text-sm mb-4">{paper.journal}</p>
      
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">
        {paper.abstract}
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
          <div className="text-2xl font-bold text-blue-600 mb-1">{paper.citations}</div>
          <div className="text-xs text-blue-700 font-medium">Citations</div>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl group-hover:from-green-100 group-hover:to-green-200 transition-colors">
          <div className="text-2xl font-bold text-green-600 mb-1">{paper.impact}</div>
          <div className="text-xs text-green-700 font-medium">Impact</div>
        </div>
        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl group-hover:from-purple-100 group-hover:to-purple-200 transition-colors">
          <div className="text-2xl font-bold text-purple-600 mb-1">{paper.downloads}</div>
          <div className="text-xs text-purple-700 font-medium">Downloads</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>{paper.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen size={16} />
            <span>DOI: {paper.doi.split('/').pop()}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {paper.keywords.map((keyword, keywordIndex) => (
          <span
            key={keywordIndex}
            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs rounded-full font-medium hover:from-purple-200 hover:to-pink-200 transition-colors cursor-pointer"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
          <Eye size={16} />
          <span>Read Paper</span>
        </button>
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
          <Download size={16} />
        </button>
      </div>
    </div>
  );

  const AnimatedCounter = ({ value, duration = 2000, delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateStats) return;
      
      const timer = setTimeout(() => {
        const increment = value / (duration / 50);
        let current = 0;
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 50);
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }, [value, duration, delay, animateStats]);

    return <span>{count}</span>;
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Achievements & Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Interactive showcase of professional certifications and published research contributions
              that demonstrate expertise and commitment to continuous learning.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 text-gray-700 bg-white/80 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <TabButton
              id="certifications"
              label="Certifications"
              icon={Award}
              isActive={activeTab === 'certifications'}
              onClick={setActiveTab}
              count={getFilteredCertifications().length}
            />
            <TabButton
              id="research"
              label="Research Papers"
              icon={FileText}
              isActive={activeTab === 'research'}
              onClick={setActiveTab}
              count={getFilteredResearch().length}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <FilterButton
              filter="all"
              label="All Categories"
              isActive={selectedFilter === 'all'}
              onClick={setSelectedFilter}
            />
            {activeTab === 'certifications' ? (
              <>
                <FilterButton filter="cloud" label="Cloud" isActive={selectedFilter === 'cloud'} onClick={setSelectedFilter} />
                <FilterButton filter="data" label="Data" isActive={selectedFilter === 'data'} onClick={setSelectedFilter} />
                <FilterButton filter="devops" label="DevOps" isActive={selectedFilter === 'devops'} onClick={setSelectedFilter} />
              </>
            ) : (
              <>
                <FilterButton filter="ai" label="AI/ML" isActive={selectedFilter === 'ai'} onClick={setSelectedFilter} />
                <FilterButton filter="blockchain" label="Blockchain" isActive={selectedFilter === 'blockchain'} onClick={setSelectedFilter} />
                <FilterButton filter="quantum" label="Quantum" isActive={selectedFilter === 'quantum'} onClick={setSelectedFilter} />
              </>
            )}
          </div>

          {/* Content */}
          <div className="transition-all duration-500">
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {getFilteredCertifications().map((cert, index) => (
                  <CertificationCard key={cert.id} cert={cert} index={index} />
                ))}
              </div>
            )}

            {activeTab === 'research' && (
              <div className="grid grid-cols-1 gap-8 mb-16">
                {getFilteredResearch().map((paper, index) => (
                  <ResearchPaperCard key={paper.id} paper={paper} index={index} />
                ))}
              </div>
            )}
          </div>

          {/* Interactive Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value={certifications.length} delay={0} />
                </div>
                <div className="text-blue-100 font-medium">Certifications</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value={researchPapers.length} delay={200} />
                </div>
                <div className="text-blue-100 font-medium">Research Papers</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value={researchPapers.reduce((total, paper) => total + paper.citations, 0)} delay={400} />
                </div>
                <div className="text-blue-100 font-medium">Total Citations</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value={researchPapers.filter(paper => paper.status === 'Published').length} delay={600} />
                </div>
                <div className="text-blue-100 font-medium">Published Works</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;
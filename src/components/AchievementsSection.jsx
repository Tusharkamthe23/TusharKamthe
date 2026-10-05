import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Award,
  FileText,
  Briefcase,
  Calendar,
  Users,
  BookOpen,
  BadgeCheck,
  Eye,
  ExternalLink,
  X,
  Search,
  ImageOff,
  MapPin,
  Hash,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/*  Put certificate images in:  public/certificates/                   */
/*  Then reference them as:     "/certificates/your-file.png"          */
/* ------------------------------------------------------------------ */

const certifications = [
  {
    id: 1,
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: '2026',
    credentialId: 'FA0884DE04A790ED',
    certificateImage: '/certificates/azure-ai-engineer.png',
    description:
      'Validates expertise in designing, building, and deploying AI solutions with Azure AI services, including NLP, computer vision, generative AI, and knowledge mining.',
    skills: ['Azure AI Services', 'Generative AI', 'NLP', 'Computer Vision', 'Azure OpenAI'],
    category: 'AI',
  },
  {
    id: 2,
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: '2026',
    credentialId: '',
    certificateImage: '/certificates/aws-ai-practitioner.png',
    description:
      'Validates foundational knowledge of AI, machine learning, and generative AI, and how to apply AWS AI services and responsible AI practices.',
    skills: ['Machine Learning', 'Generative AI', 'AWS AI Services', 'Amazon Bedrock', 'Responsible AI'],
    category: 'AI',
  },
  {
    id: 3,
    title: 'Microsoft Certified: Azure Data Fundamentals',
    issuer: 'Microsoft',
    date: '2026',
    credentialId: '',
    certificateImage: '/certificates/azure-data-fundamentals.png',
    description:
      'Validates knowledge of core data concepts, relational and non-relational data, analytics workloads, and Azure data services.',
    skills: ['Azure Data Services', 'Relational Data', 'Non-Relational Data', 'Data Analytics', 'Azure SQL'],
    category: 'Data',
  },
  {
    id: 4,
    title: 'Microsoft Certified: Azure Databricks Data Engineer Associate',
    issuer: 'Microsoft',
    date: '2026',
    credentialId: '',
    certificateImage: '/certificates/azure-databricks-data engineer-associate.png',
    description:
      'Validates skills in designing, implementing, and managing data engineering solutions using Azure Databricks, including data processing, transformation, orchestration, and analytics.',
    skills: [
      'Azure Databricks',
      'Data Engineering',
      'Apache Spark',
      'Data Transformation',
      'Data Pipelines',
      'SQL',
    ],
    category: 'Data',
  },
  {
    id: 4,
    title: 'Introduction to Natural Language Processing',
    issuer: 'Infosys Springboard',
    date: '2024',
    credentialId: '',
    certificateImage: '/certificates/infosys-nlp.png',
    description:
      'Introductory course on core NLP concepts, including text processing and sequence models such as RNNs and LSTMs.',
    skills: ['NLP', 'ML', 'AI', 'RNN', 'LSTM'],
    category: 'AI',
  },
  {
    id: 5,
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    date: '2024',
    credentialId: '',
    certificateImage: '/certificates/infosys-intro-ai.png',
    description:
      'Introductory course on AI fundamentals, covering machine learning, deep learning, and NLP basics.',
    skills: ['AI', 'ML', 'Deep Learning', 'NLP'],
    category: 'AI',
  },
  {
    id: 6,
    title: 'HTML, CSS, & JavaScript – Certification Course for Beginners',
    issuer: 'Udemy',
    date: '2022',
    credentialId: '',
    certificateImage: '/certificates/udemy-web.png',
    description: 'Beginner course on building web pages with HTML, CSS, and JavaScript.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web'],
    category: 'Web development',
  },
  {
    id: 7,
    title: 'Introduction to Deep Learning & Neural Networks with Keras',
    issuer: 'Coursera',
    date: '2024',
    credentialId: 'X6SUD5MKAMYN',
    certificateImage: '/certificates/coursera-keras.png',
    description: 'Course on deep learning fundamentals and building neural networks with Keras.',
    skills: ['Deep Learning', 'Neural Networks', 'Keras', 'Machine Learning'],
    category: 'AI',
  },
  {
    id: 8,
    title: 'What is Data Science',
    issuer: 'Coursera',
    date: '',
    credentialId: 'BGWYYG7FX3ZR',
    certificateImage: '/certificates/coursera-data-science.png',
    description:
      'Introductory course on what data science is, the data science workflow, and how it is applied.',
    skills: ['Data Science', 'ML', 'Statistics'],
    category: 'AI',
  },
  {
    id: 9,
    title: 'Computer Vision 101',
    issuer: 'Infosys Springboard',
    date: '2024',
    credentialId: '',
    certificateImage: '/certificates/infosys-computer-vision.png',
    description:
      'Introductory course on computer vision, covering image processing and convolutional neural networks.',
    skills: ['Computer Vision', 'CNN', 'ML', 'Image Processing'],
    category: 'AI',
  },
];

const researchPapers = [
  {
    id: 1,
    title: 'Identification of Medicinal Plants Using MobileNet V3',
    authors: ['Tushar Kamthe'],
    journal: 'International Journal of Research Publication and Reviews',
    date: '2024',
    citation: 'Vol. 5, Issue 4, April 2024, pp. 6617–6621',
    // TODO: replace with the real abstract from your paper
    abstract:
      'A deep learning approach that uses the MobileNet V3 architecture to identify medicinal plants from images.',
    keywords: ['Deep Learning', 'Computer Vision', 'MobileNet V3'],
    status: 'Published',
    category: 'AI',
    link: 'https://ijrpr.com/uploads/V5ISSUE4/IJRPR25579.pdf',
  },
];

const internships = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Infosys Springboard',
    project: 'Website chatbot development',
    duration: 'Mar 21, 2024 – Jun 10, 2024',
    location: 'Remote',
    status: 'Completed',
    certificateImage: '', // e.g. '/certificates/infosys-internship.png'. Leave empty to hide the button.
  },
];

/* ------------------------------------------------------------------ */
/*  COLORS                                                             */
/* ------------------------------------------------------------------ */

// Each category gets its own color: icon tile, top accent, chips, filter dot.
const CATEGORY_STYLES = {
  AI: {
    tile: 'from-indigo-500 to-violet-500',
    bar: 'border-t-indigo-500',
    chip: 'bg-indigo-50 text-indigo-700',
    dot: 'bg-indigo-500',
  },
  Data: {
    tile: 'from-emerald-500 to-teal-500',
    bar: 'border-t-emerald-500',
    chip: 'bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
  },
  'Web development': {
    tile: 'from-amber-500 to-orange-500',
    bar: 'border-t-amber-500',
    chip: 'bg-amber-50 text-amber-700',
    dot: 'bg-amber-500',
  },
};

const DEFAULT_CATEGORY = {
  tile: 'from-slate-500 to-slate-600',
  bar: 'border-t-slate-400',
  chip: 'bg-slate-100 text-slate-700',
  dot: 'bg-slate-400',
};

const RESEARCH_STYLE = {
  tile: 'from-fuchsia-500 to-pink-500',
  bar: 'border-t-fuchsia-500',
  chip: 'bg-fuchsia-50 text-fuchsia-700',
};

const INTERNSHIP_STYLE = {
  tile: 'from-sky-500 to-blue-600',
  bar: 'border-t-sky-500',
};

const STATUS_STYLES = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Published: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Ongoing: 'bg-amber-50 text-amber-700 ring-amber-600/20',
};

const catStyle = (category) => CATEGORY_STYLES[category] || DEFAULT_CATEGORY;

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2';

const btnClass = `inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:from-indigo-700 hover:to-violet-700 hover:shadow-md active:scale-95 ${focusRing}`;

const includes = (text, term) => (text || '').toLowerCase().includes(term);

/* ------------------------------------------------------------------ */
/*  ANIMATION                                                          */
/*  Cards rise in once when they appear; hovering a card does nothing. */
/* ------------------------------------------------------------------ */

const AnimationStyles = () => (
  <style>{`
    @keyframes ach-rise {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ach-fade {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes ach-pop {
      from { opacity: 0; transform: translateY(10px) scale(0.96); }
      to   { opacity: 1; transform: none; }
    }
    .ach-rise { animation: ach-rise 0.5s ease-out both; }
    .ach-fade { animation: ach-fade 0.2s ease-out both; }
    .ach-pop  { animation: ach-pop 0.25s ease-out both; }
    @media (prefers-reduced-motion: reduce) {
      .ach-rise, .ach-fade, .ach-pop { animation: none; }
    }
  `}</style>
);

const CountUp = ({ value, duration = 900 }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setN(value);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3)))); // ease-out
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <>{n}</>;
};

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
      STATUS_STYLES[status] || 'bg-slate-50 text-slate-700 ring-slate-600/20'
    }`}
  >
    {status}
  </span>
);

const Chip = ({ children, className = 'bg-slate-100 text-slate-700' }) => (
  <span className={`rounded-md px-2 py-1 text-xs font-medium ${className}`}>{children}</span>
);

const IconTile = ({ gradient, children }) => (
  <div
    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ${gradient}`}
  >
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/*  CERTIFICATE VIEWER (opens the local image)                         */
/* ------------------------------------------------------------------ */

const CertificateModal = ({ item, onClose }) => {
  const [failed, setFailed] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="ach-fade fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} certificate`}
    >
      <div
        className="ach-pop flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.issuer}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 ${focusRing}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-auto bg-slate-50 p-4">
          {failed ? (
            <div className="flex flex-col items-center gap-2 py-16 text-center text-slate-500">
              <ImageOff size={32} />
              <p className="text-sm font-medium text-slate-700">Certificate image not found</p>
               <p className="text-sm">
                {/*Add the file to{' '}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  public{item.certificateImage}
                </code>*/}
              </p>
            </div>
          ) : (
            <img
              src={item.certificateImage}
              alt={`${item.title} certificate`}
              onError={() => setFailed(true)}
              className="max-h-[75vh] w-auto max-w-full rounded-md object-contain shadow-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  CARDS  (no hover movement, scaling, or transitions)                */
/* ------------------------------------------------------------------ */

const cardBase =
  'ach-rise flex h-full flex-col rounded-xl border border-slate-200 border-t-4 bg-white p-6 shadow-sm hover:shadow-md';

const stagger = (index) => ({ animationDelay: `${Math.min(index, 8) * 80}ms` });

const CertificationCard = ({ cert, index, onView }) => {
  const style = catStyle(cert.category);
  return (
    <article className={`${cardBase} ${style.bar}`} style={stagger(index)}>
      <div className="flex items-start gap-4">
        <IconTile gradient={style.tile}>
          <Award size={24} />
        </IconTile>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug text-slate-900">{cert.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-slate-600">
            {cert.issuer}
            <BadgeCheck size={16} className="text-sky-500" aria-label="Verified" />
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{cert.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-500">
        {cert.date && (
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={15} className="text-indigo-400" /> {cert.date}
          </span>
        )}
        {cert.credentialId && (
          <span className="inline-flex items-center gap-1.5">
            <Hash size={15} className="text-indigo-400" /> {cert.credentialId}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <Chip key={skill} className={style.chip}>
            {skill}
          </Chip>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <button type="button" onClick={() => onView(cert)} className={btnClass}>
          <Eye size={16} /> View certificate
        </button>
      </div>
    </article>
  );
};

const ResearchPaperCard = ({ paper, index }) => (
  <article className={`${cardBase} ${RESEARCH_STYLE.bar}`} style={stagger(index)}>
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <IconTile gradient={RESEARCH_STYLE.tile}>
          <FileText size={24} />
        </IconTile>
        <h3 className="text-lg font-semibold leading-snug text-slate-900">{paper.title}</h3>
      </div>
      <StatusBadge status={paper.status} />
    </div>

    <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-600">
      <Users size={15} className="text-fuchsia-400" />
      {paper.authors.join(', ')}
    </p>
    <p className="mt-1 text-sm font-medium text-fuchsia-700">{paper.journal}</p>

    <p className="mt-4 text-sm leading-relaxed text-slate-600">{paper.abstract}</p>

    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-500">
      <span className="inline-flex items-center gap-1.5">
        <Calendar size={15} className="text-fuchsia-400" /> {paper.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <BookOpen size={15} className="text-fuchsia-400" /> {paper.citation}
      </span>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {paper.keywords.map((keyword) => (
        <Chip key={keyword} className={RESEARCH_STYLE.chip}>
          {keyword}
        </Chip>
      ))}
    </div>

    <div className="mt-auto pt-6">
      <a href={paper.link} target="_blank" rel="noopener noreferrer" className={btnClass}>
        <ExternalLink size={16} /> Read paper
      </a>
    </div>
  </article>
);

const InternshipCard = ({ internship, index, onView }) => (
  <article className={`${cardBase} ${INTERNSHIP_STYLE.bar}`} style={stagger(index)}>
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <IconTile gradient={INTERNSHIP_STYLE.tile}>
          <Briefcase size={24} />
        </IconTile>
        <div>
          <h3 className="text-lg font-semibold leading-snug text-slate-900">{internship.role}</h3>
          <p className="mt-1 text-sm font-medium text-sky-700">{internship.company}</p>
        </div>
      </div>
      <StatusBadge status={internship.status} />
    </div>

    <dl className="mt-5 space-y-2 text-sm">
      <div className="flex gap-2">
        <dt className="w-20 shrink-0 text-slate-500">Project</dt>
        <dd className="text-slate-800">{internship.project}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-20 shrink-0 text-slate-500">Duration</dt>
        <dd className="text-slate-800">{internship.duration}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-20 shrink-0 text-slate-500">Location</dt>
        <dd className="inline-flex items-center gap-1.5 text-slate-800">
          <MapPin size={14} className="text-sky-400" /> {internship.location}
        </dd>
      </div>
    </dl>

    {internship.certificateImage && (
      <div className="mt-auto pt-6">
        <button
          type="button"
          className={btnClass}
          onClick={() =>
            onView({
              title: `${internship.role} – ${internship.company}`,
              issuer: internship.company,
              certificateImage: internship.certificateImage,
            })
          }
        >
          <Eye size={16} /> View certificate
        </button>
      </div>
    )}
  </article>
);

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */

const TABS = [
  { id: 'certifications', label: 'Certifications', icon: Award, count: certifications.length },
  { id: 'research', label: 'Research papers', icon: FileText, count: researchPapers.length },
  { id: 'internships', label: 'Internships', icon: Briefcase, count: internships.length },
];

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewing, setViewing] = useState(null);

  const closeViewer = useCallback(() => setViewing(null), []);

  const changeTab = (id) => {
    setActiveTab(id);
    setSelectedFilter('all');
  };

  const term = searchTerm.trim().toLowerCase();

  const filteredCerts = useMemo(
    () =>
      certifications.filter(
        (c) =>
          (selectedFilter === 'all' || c.category === selectedFilter) &&
          (!term ||
            includes(c.title, term) ||
            includes(c.issuer, term) ||
            c.skills.some((s) => includes(s, term)))
      ),
    [selectedFilter, term]
  );

  const filteredPapers = useMemo(
    () =>
      researchPapers.filter(
        (p) =>
          (selectedFilter === 'all' || p.category === selectedFilter) &&
          (!term || includes(p.title, term) || p.keywords.some((k) => includes(k, term)))
      ),
    [selectedFilter, term]
  );

  const filteredInternships = useMemo(
    () =>
      internships.filter(
        (i) =>
          !term || includes(i.role, term) || includes(i.company, term) || includes(i.project, term)
      ),
    [term]
  );

  const categories = useMemo(() => {
    if (activeTab === 'certifications') return [...new Set(certifications.map((c) => c.category))];
    if (activeTab === 'research') return [...new Set(researchPapers.map((p) => p.category))];
    return [];
  }, [activeTab]);

  const visibleCount =
    activeTab === 'certifications'
      ? filteredCerts.length
      : activeTab === 'research'
      ? filteredPapers.length
      : filteredInternships.length;

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-16">
      <AnimationStyles />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="ach-rise mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Achievements &amp; Research
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
          <p className="mt-5 text-lg text-slate-600">
            Certifications, published research, and internship experience in AI, data, and cloud.
          </p>
        </header>

        {/* Summary numbers */}
        <dl
          className="ach-rise mx-auto mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/20 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 py-6 text-center shadow-lg shadow-indigo-500/20"
          style={{ animationDelay: '100ms' }}
        >
          {[
            ['Certifications', certifications.length],
            ['Research papers', researchPapers.length],
            ['Internships', internships.length],
          ].map(([label, value]) => (
            <div key={label} className="px-4">
              <dd className="text-3xl font-bold text-white sm:text-4xl">
                <CountUp value={value} />
              </dd>
              <dt className="mt-1 text-sm text-indigo-100">{label}</dt>
            </div>
          ))}
        </dl>

        {/* Controls */}
        <div
          className="ach-rise mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          style={{ animationDelay: '200ms' }}
        >
          <div
            role="tablist"
            aria-label="Achievement type"
            className="inline-flex w-full flex-wrap gap-1 rounded-xl bg-indigo-100/60 p-1 sm:w-auto"
          >
            {TABS.map(({ id, label, icon: Icon, count }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => changeTab(id)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 sm:flex-none ${focusRing} ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                      : 'text-slate-600 hover:bg-white/70 hover:text-slate-900'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs transition-colors duration-200 ${
                      isActive ? 'bg-white/25 text-white' : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or skill"
              aria-label="Search achievements"
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 shadow-sm transition-shadow duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        {/* Category filters */}
        {categories.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {['all', ...categories].map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${focusRing} ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
                  }`}
                >
                  {filter !== 'all' && (
                    <span className={`h-2 w-2 rounded-full ${catStyle(filter).dot}`} />
                  )}
                  {filter === 'all' ? 'All' : filter}
                </button>
              );
            })}
          </div>
        )}

        {/* Content */}
        <div className="mt-8">
          {visibleCount === 0 ? (
            <div className="ach-fade rounded-xl border border-dashed border-indigo-200 bg-white px-6 py-16 text-center">
              <p className="font-medium text-slate-800">No results found</p>
              <p className="mt-1 text-sm text-slate-500">
                Try a different search term or category.
              </p>
              {(searchTerm || selectedFilter !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFilter('all');
                  }}
                  className={`mt-4 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-50 ${focusRing}`}
                >
                  Clear search and filters
                </button>
              )}
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                activeTab === 'research' ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
              }`}
            >
              {activeTab === 'certifications' &&
                filteredCerts.map((cert, i) => (
                  <CertificationCard key={cert.id} cert={cert} index={i} onView={setViewing} />
                ))}
              {activeTab === 'research' &&
                filteredPapers.map((paper, i) => (
                  <ResearchPaperCard key={paper.id} paper={paper} index={i} />
                ))}
              {activeTab === 'internships' &&
                filteredInternships.map((internship, i) => (
                  <InternshipCard
                    key={internship.id}
                    internship={internship}
                    index={i}
                    onView={setViewing}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      {viewing && <CertificateModal item={viewing} onClose={closeViewer} />}
    </section>
  );
};

export default AchievementsSection;
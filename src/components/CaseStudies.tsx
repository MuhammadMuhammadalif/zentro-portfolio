'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle } from 'react-icons/fi';
import { projectImages, techIcons } from '@/lib/assets';
import { useEffect, useState } from 'react';
import { scrollToSection } from '@/lib/utils';

interface Project {
  id: string;
  name: string;
  duration: string;
  status: 'ongoing' | 'completed';
  image: string;
  description: string;
  techs: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'easybuy',
    name: 'EasyBuy — Full-Stack E-Commerce Platform',
    duration: '8 weeks · Completed',
    status: 'completed',
    image: projectImages.ecommerce,
    description:
      'A full-stack e-commerce application that provides a complete shopping experience with secure authentication and product management features.',
    techs: ['react', 'nodejs', 'sql', 'restapi'],
    features: [
      'User authentication and authorization using JWT',
      'Admin dashboard for product management',
      'Product CRUD operations with image upload',
      'RESTful API architecture',
    ],
    githubUrl: 'https://github.com/MuhammadMuhammadalif',
  },
  {
    id: 'aiResearch',
    name: 'AI-Powered Research Knowledge Management System',
    duration: '10 weeks · Completed',
    status: 'completed',
    image: projectImages.ai,
    description:
      'An intelligent system designed to organize, analyze, and manage research papers using AI techniques and natural language processing.',
    techs: ['python', 'sql', 'restapi', 'iot'],
    features: [
      'Document processing and analysis',
      'Semantic search capabilities',
      'NLP-based text analysis',
      'Research knowledge organization',
    ],
  },
  {
    id: 'chessEngine',
    name: 'Chess Engine Using AI Algorithms',
    duration: '6 weeks · Completed',
    status: 'completed',
    image: projectImages.chess,
    description:
      'A chess engine implementing classical artificial intelligence search techniques for decision-making and game optimization.',
    techs: ['python', 'cpp', 'restapi', 'iot'],
    features: [
      'Minimax-based move prediction',
      'Alpha-beta pruning optimization',
      'Efficient board state evaluation',
      'Zobrist hashing for position tracking',
    ],
    githubUrl: 'https://github.com/MuhammadMuhammadalif',
  },
  {
    id: 'schoolManagement',
    name: 'School Management Backend System',
    duration: '12 weeks · Completed',
    status: 'completed',
    image: projectImages.school,
    description:
      'A scalable backend system developed using enterprise-level software architecture principles with clean architecture implementation.',
    techs: ['dotnet', 'sql', 'restapi', 'git'],
    features: [
      'Clean Architecture implementation',
      'REST API development',
      'Database design and management',
      'Modular and maintainable code structure',
    ],
  },
  {
    id: 'waf',
    name: 'Web Application Firewall (WAF)',
    duration: '8 weeks · Ongoing',
    status: 'ongoing',
    image: projectImages.security,
    description:
      'A security-focused project designed to analyze and protect web applications against malicious requests and common web attacks.',
    techs: ['python', 'nodejs', 'restapi', 'git'],
    features: [
      'Request filtering and validation',
      'Security rule implementation',
      'Web attack pattern analysis',
      'Application security concepts',
    ],
  },
];

export function CaseStudies() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    // Check if there's a hash in the URL and highlight that project
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const project = projects.find(proj => proj.id === id);
      if (project) {
        setHighlightedId(id);
        // Remove highlight after 3 seconds
        setTimeout(() => setHighlightedId(null), 3000);
      }
    }

    // Listen for hash changes (when user clicks skill buttons)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const project = projects.find(proj => proj.id === id);
        if (project) {
          setHighlightedId(id);
          setTimeout(() => setHighlightedId(null), 3000);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            Featured Projects
          </h2>
          <p className="text-text-secondary">Real-world applications I&apos;ve built</p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              id={project.id}
              className={`rounded-xl border p-8 transition-all duration-500 ${
                highlightedId === project.id
                  ? 'border-accent-primary bg-dark-card shadow-lg shadow-accent-primary/20'
                  : 'border-dark-border bg-dark-card hover:border-accent-primary'
              }`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              animate={
                highlightedId === project.id
                  ? { scale: [1, 1.02, 1], transition: { duration: 0.5 } }
                  : {}
              }
            >
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full rounded-lg object-cover sm:h-56 md:h-64"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  <span
                    className={`mb-3 inline-block rounded px-3 py-1 text-xs font-bold ${
                      project.status === 'ongoing'
                        ? 'bg-accent-success/20 text-accent-success'
                        : 'bg-accent-primary/20 text-accent-primary'
                    }`}
                  >
                    {project.status.toUpperCase()}
                  </span>

                  <h3 className="mb-2 text-xl font-bold text-text-primary sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-sm text-text-secondary sm:text-base">{project.duration}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <img
                        key={tech}
                        src={techIcons[tech]}
                        alt={tech}
                        className="h-6 w-6"
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>

                  <p className="mb-6 text-sm text-text-secondary sm:text-base">{project.description}</p>

                  <ul className="mb-6 space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-text-secondary sm:text-base"
                      >
                        <FiCheckCircle className="mt-1 flex-shrink-0 text-accent-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded border border-accent-primary px-6 py-3 text-sm font-bold text-accent-primary transition hover:bg-accent-primary hover:text-dark-bg"
                      >
                        View on GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-accent-primary px-6 py-3 text-sm font-bold text-dark-bg transition hover:bg-accent-secondary"
                      >
                        Live Demo
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <button
                        onClick={() => scrollToSection('#contact')}
                        className="rounded bg-accent-primary px-6 py-3 text-sm font-bold text-dark-bg transition hover:bg-accent-secondary"
                      >
                        Get In Touch
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
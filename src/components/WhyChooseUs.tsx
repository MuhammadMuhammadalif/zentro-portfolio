'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiTarget,
  FiBookOpen,
  FiZap,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface Strength {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const strengths: Strength[] = [
  {
    id: 1,
    icon: FiCode,
    title: 'Full-Stack Expertise',
    description:
      'Proficient in both frontend and backend development with hands-on experience in React, Node.js, ASP.NET Core, and modern web technologies.',
  },
  {
    id: 2,
    icon: FiLayers,
    title: 'Clean Architecture',
    description:
      'Strong understanding of software design principles, clean architecture, and building maintainable, scalable applications.',
  },
  {
    id: 3,
    icon: FiTrendingUp,
    title: 'Problem Solver',
    description:
      'Skilled in algorithms and data structures with experience solving complex problems through efficient, optimized solutions.',
  },
  {
    id: 4,
    icon: FiTarget,
    title: 'AI & Machine Learning',
    description:
      'Experience in NLP, machine learning algorithms, and building intelligent systems for real-world applications.',
  },
  {
    id: 5,
    icon: FiBookOpen,
    title: 'Continuous Learner',
    description:
      'Passionate about staying updated with the latest technologies, frameworks, and best practices in software development.',
  },
  {
    id: 6,
    icon: FiZap,
    title: 'Fast Execution',
    description:
      'Ability to quickly learn new technologies and deliver working solutions with a focus on quality and efficiency.',
  },
];

export function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="strengths" ref={ref} className="bg-dark-card px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            What I Bring to the Table
          </h2>
          <p className="text-text-secondary">
            Core strengths and technical capabilities
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.id}
              variants={itemVariants}
              className="rounded-xl border border-dark-border bg-dark-bg p-8 text-center"
              whileHover={{ scale: 1.03, borderColor: '#00d4ff' }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent-primary/10 p-4">
                <strength.icon className="text-3xl text-accent-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                {strength.title}
              </h3>
              <p className="text-text-secondary">{strength.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
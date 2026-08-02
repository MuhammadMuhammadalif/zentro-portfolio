'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiCpu, FiTool } from 'react-icons/fi';
import { techIcons } from '@/lib/assets';
import type { IconType } from 'react-icons';

interface SkillCategory {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  techs: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'Building responsive, modern, and interactive user interfaces with the latest web technologies and best practices in UI/UX design.',
    techs: ['react', 'html', 'css', 'tailwind'],
  },
  {
    id: 2,
    icon: FiServer,
    title: 'Backend Development',
    description:
      'Designing and implementing scalable RESTful APIs, authentication systems, and server-side applications with robust architecture.',
    techs: ['nodejs', 'dotnet', 'python', 'restapi'],
  },
  {
    id: 3,
    icon: FiCpu,
    title: 'AI & Machine Learning',
    description:
      'Developing intelligent systems using NLP, machine learning algorithms, and data analysis to solve complex problems.',
    techs: ['python', 'cpp', 'sql', 'iot'],
  },
  {
    id: 4,
    icon: FiTool,
    title: 'Tools & Technologies',
    description:
      'Proficient in version control, containerization, database management, and modern development tools for efficient workflows.',
    techs: ['git', 'docker', 'sql', 'restapi'],
  },
];

export function Solutions() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            Skills & Expertise
          </h2>
          <p className="text-text-secondary">
            Technical proficiencies across the full development stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-dark-border bg-dark-card p-8 transition-colors hover:border-accent-primary/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 transition group-hover:opacity-10" />

              <category.icon className="mb-4 text-3xl text-accent-primary sm:text-4xl" />

              <h3 className="mb-3 text-lg font-bold text-text-primary sm:text-xl">
                {category.title}
              </h3>
              <p className="mb-6 text-sm text-text-secondary sm:text-base">{category.description}</p>

              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded border border-dark-border bg-dark-bg px-3 py-1"
                  >
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="h-4 w-4"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-xs capitalize text-text-secondary">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiPhone, FiZap, FiCode, FiShield } from 'react-icons/fi';
import { techIcons } from '@/lib/assets';
import { scrollToSection } from '@/lib/utils';
import type { IconType } from 'react-icons';

interface Solution {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  techs: string[];
  relatedCaseStudy: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    icon: FiPhone,
    title: 'Communication Automation',
    description:
      'Stop sending messages manually. We connect Twilio to your existing systems to automate SMS onboarding, payment reminders, and win-back campaigns that run 24/7.',
    techs: ['twilio', 'dotnet', 'react', 'webhook'],
    relatedCaseStudy: '#smsAutomation',
  },
  {
    id: 2,
    icon: FiZap,
    title: 'Workflow & Integration Automation',
    description:
      'Eliminate repetitive tasks with custom Zapier, n8n, and Systeme.io workflows. We connect your tools so data flows automatically between platforms.',
    techs: ['zapier', 'n8n', 'systeme', 'webhook'],
    relatedCaseStudy: '#workflowAutomation',
  },
  {
    id: 3,
    icon: FiCode,
    title: 'Custom Software Development',
    description:
      'Full-stack web applications built with React, Node.js, and .NET. From membership platforms to institute management systems, we build software tailored to your business.',
    techs: ['react', 'nodejs', 'dotnet', 'sql'],
    relatedCaseStudy: '#instituteManagement',
  },
  {
    id: 4,
    icon: FiShield,
    title: 'AI & Security Systems',
    description:
      'Computer vision, face recognition, and IoT security solutions powered by Python and OpenCV. Protect your premises with intelligent, real-time monitoring.',
    techs: ['python', 'opencv', 'iot', 'restapi'],
    relatedCaseStudy: '#faceRecognition',
  },
];

export function Solutions() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="solutions" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            What We Build
          </h2>
          <p className="text-text-secondary">
            Four Things We&apos;re Very Good At
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-xl border border-dark-border bg-dark-card p-8"
              onMouseEnter={() => setHovered(solution.id)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.02 }}
              style={{
                transform:
                  hovered === solution.id
                    ? 'perspective(1000px) rotateX(2deg) rotateY(2deg)'
                    : 'none',
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 transition group-hover:opacity-10" />

              <solution.icon className="mb-4 text-4xl text-accent-primary" />

              <h3 className="mb-3 text-xl font-bold text-text-primary">
                {solution.title}
              </h3>
              <p className="mb-6 text-text-secondary">{solution.description}</p>

              <div className="mb-6 flex flex-wrap gap-3">
                {solution.techs.map((tech) => (
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

              <a
                href={solution.relatedCaseStudy}
                className="inline-flex items-center gap-2 text-accent-primary transition hover:text-accent-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(solution.relatedCaseStudy);
                }}
              >
                View Examples <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

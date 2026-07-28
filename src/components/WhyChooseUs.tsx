'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCheckCircle,
  FiClock,
  FiUsers,
  FiCode,
  FiShield,
  FiZap,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface Benefit {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: FiCheckCircle,
    title: 'Results-Driven Solutions',
    description:
      'Every project is designed to deliver measurable outcomes. We focus on ROI and business impact, not just technical implementation.',
  },
  {
    id: 2,
    icon: FiClock,
    title: 'Fast Turnaround',
    description:
      'Our agile methodology ensures rapid prototyping and delivery. Most projects see initial results within 2-4 weeks.',
  },
  {
    id: 3,
    icon: FiUsers,
    title: 'Dedicated Support',
    description:
      'We provide ongoing support, maintenance, and updates. Your success is our priority long after project completion.',
  },
  {
    id: 4,
    icon: FiCode,
    title: 'Clean, Scalable Code',
    description:
      'We write maintainable, well-documented code that scales with your business. Future-proof your investment.',
  },
  {
    id: 5,
    icon: FiShield,
    title: 'Security First',
    description:
      'Enterprise-grade security practices including encryption, authentication, and regular security audits.',
  },
  {
    id: 6,
    icon: FiZap,
    title: 'Automation Expertise',
    description:
      'Specialized in workflow automation that eliminates repetitive tasks, saving you time and reducing errors.',
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
    <section id="whyChooseUs" ref={ref} className="bg-dark-card px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            Why Choose Us
          </h2>
          <p className="text-text-secondary">
            What Sets Us Apart From The Rest
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="rounded-xl border border-dark-border bg-dark-bg p-8 text-center"
              whileHover={{ scale: 1.03, borderColor: '#00d4ff' }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent-primary/10 p-4">
                <benefit.icon className="text-3xl text-accent-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                {benefit.title}
              </h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
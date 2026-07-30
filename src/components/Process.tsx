'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMessageCircle, FiLayout, FiCode, FiCheckCircle, FiSend } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import dynamic from 'next/dynamic';

// Dynamically import 3D scene to avoid SSR issues
const ProcessScene = dynamic(
  () => import('./3D/ProcessScene').then((mod) => mod.ProcessScene),
  { ssr: false }
);

interface ProcessStep {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  duration: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: FiMessageCircle,
    title: 'Discovery & Planning',
    description:
      'We start by understanding your business, pain points, and goals. Together, we define project scope, success metrics, and technical requirements.',
    duration: '1-2 days',
  },
  {
    id: 2,
    icon: FiLayout,
    title: 'Design & Architecture',
    description:
      'We create wireframes, system architecture, and technical specifications. You\'ll see exactly what we\'re building before we write a single line of code.',
    duration: '3-5 days',
  },
  {
    id: 3,
    icon: FiCode,
    title: 'Development & Integration',
    description:
      'Our team builds your solution using modern tech stacks. Regular updates keep you in the loop, and you can request changes anytime.',
    duration: '2-6 weeks',
  },
  {
    id: 4,
    icon: FiCheckCircle,
    title: 'Testing & Refinement',
    description:
      'Rigorous testing ensures everything works flawlessly. We fix bugs, optimize performance, and refine features based on your feedback.',
    duration: '3-5 days',
  },
  {
    id: 5,
    icon: FiSend,
    title: 'Launch & Support',
    description:
      'We deploy your solution and provide comprehensive documentation. Ongoing support ensures your system runs smoothly long-term.',
    duration: 'Ongoing',
  },
];

export function Process() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" ref={ref} className="relative bg-dark-card px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            From idea to launch, here's how we turn your vision into reality
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* 3D Visualization - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[300px] overflow-hidden rounded-xl border border-dark-border bg-dark-bg/50 sm:h-[400px] lg:h-[600px]">
              <ProcessScene />
            </div>
            
            {/* Info Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 rounded-xl border border-dark-border bg-dark-bg p-4 text-center sm:mt-6 sm:p-6"
            >
              <p className="mb-2 text-xs font-bold text-accent-primary sm:text-sm">
                INTERACTIVE WORKFLOW
              </p>
              <p className="text-xs text-text-secondary sm:text-sm">
                Our seamless process ensures every step connects perfectly to deliver exceptional results.
              </p>
            </motion.div>
          </motion.div>

          {/* Process Steps - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary md:block" />

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0">
                        <motion.div
                          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-dark-card bg-gradient-to-br from-accent-primary to-accent-secondary"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <step.icon className="text-2xl text-dark-bg" />
                        </motion.div>
                        
                        {/* Pulse Animation */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-accent-primary"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </div>

                      {/* Content */}
                      <motion.div
                        className="flex-1 rounded-xl border border-dark-border bg-dark-bg p-4 md:p-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="text-xs font-bold text-accent-primary">
                              STEP {step.id}
                            </span>
                            <h3 className="text-lg font-bold text-text-primary md:text-xl">
                              {step.title}
                            </h3>
                          </div>
                          <span className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs font-bold text-accent-primary">
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-sm text-text-secondary">
                          {step.description}
                        </p>

                        {/* Progress Bar */}
                        <motion.div
                          className="mt-3 h-1 overflow-hidden rounded-full bg-dark-border"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-base text-text-secondary sm:text-lg">
            Ready to get started? Let's build something amazing together.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full rounded-full bg-accent-primary px-6 py-3 text-sm font-bold text-dark-bg transition hover:bg-accent-secondary sm:w-auto sm:px-8 sm:py-4"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const caseStudiesSection = document.querySelector('#caseStudies');
                caseStudiesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full rounded-full border border-accent-primary px-6 py-3 text-sm font-bold text-accent-primary transition hover:bg-accent-primary/10 sm:w-auto sm:px-8 sm:py-4"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

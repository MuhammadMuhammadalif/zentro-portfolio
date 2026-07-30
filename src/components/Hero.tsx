'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import { scrollToSection } from '@/lib/utils';


const HeroScene = dynamic(() => import('./3D/HeroScene').then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-dark-card rounded-lg animate-pulse" />
})

const headlines = [
  ['We Build', 'Software That', 'Scales.'],
  ['Automation', 'That Saves', 'Time.'],
  ['AI Solutions', 'That', 'Deliver.'],
];

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-dark-bg pt-20"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="relative h-48 md:h-56 lg:h-64 mb-10 z-20">
          {headlines.map((headlineLines, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: index === headlineIndex ? 1 : 0,
                y: index === headlineIndex ? 0 : 30 
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
                <span className="text-gradient block">{headlineLines[0]}</span>
                <span className="text-gradient block">{headlineLines[1]}</span>
                <span className="text-gradient block">{headlineLines[2]}</span>
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 mb-10 max-w-2xl px-4 text-base text-text-secondary sm:px-0 sm:text-lg md:text-xl"
        >
          Enterprise-grade software development, automation, AI & security
          solutions for businesses ready to scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex w-full max-w-lg flex-col gap-4 px-4 sm:flex-row sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-primary px-6 py-3 text-sm font-bold text-dark-bg transition hover:bg-accent-primary/90 sm:w-auto sm:px-8 sm:py-4"
          >
            Start Your Project <FiArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#caseStudies')}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-accent-secondary px-6 py-3 text-sm font-bold text-accent-secondary transition hover:bg-accent-secondary/10 sm:w-auto sm:px-8 sm:py-4"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        onClick={() => scrollToSection('#intro')}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-secondary transition hover:text-accent-primary"
        aria-label="Scroll to intro section"
      >
        <FiChevronDown size={32} />
      </motion.button>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Intro() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="bg-dark-bg px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-text-primary md:text-4xl">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary">
            I am a BS Computer Science student at the{' '}
            <span className="text-accent-primary font-semibold">
              University of Engineering and Technology (UET), Lahore
            </span>
            , passionate about building scalable software solutions and AI-powered applications. 
            I specialize in full-stack development with experience in modern web technologies, 
            backend systems, databases, and software engineering practices. I enjoy solving complex 
            problems through algorithms, clean architecture, and innovative technology solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

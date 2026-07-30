'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiTarget } from 'react-icons/fi';
import { getCompanyName } from '@/lib/utils';

const points = [
  'We specialize in turning complex business problems into elegant software solutions.',
  'Our team combines technical expertise with deep understanding of business automation.',
  'We believe in transparent communication and collaborative development.',
  'Every project is an opportunity to build lasting partnerships.',
];

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const companyName = getCompanyName();

  return (
    <section id="about" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-4xl font-bold text-text-primary">
            About {companyName}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-lg leading-relaxed text-text-secondary"
          >
            {companyName} is a premium software development studio specializing
            in automation, AI solutions, and enterprise-grade web applications.
            With years of experience across industries, we help businesses
            streamline operations, enhance customer experiences, and drive
            growth through custom software solutions.
          </motion.p>

          <div className="mb-10">
            <h3 className="mb-6 text-2xl font-bold text-text-primary">
              Why Work With Us
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="mt-1 flex-shrink-0 text-accent-success" />
                  <p className="text-text-secondary">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="rounded-xl border border-dark-border bg-dark-card p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-accent-primary/10 p-3">
                <FiTarget className="text-2xl text-accent-primary" />
              </div>
              <h4 className="text-xl font-bold text-text-primary">
                Our Philosophy
              </h4>
            </div>
            <p className="text-text-secondary">
              We don&apos;t just write code—we solve problems. Every line of code
              we write is designed to make your business more efficient, your
              team more productive, and your customers happier. Whether it&apos;s
              automating a tedious process or building a complex AI system,
              we&apos;re here to deliver solutions that make a real difference.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
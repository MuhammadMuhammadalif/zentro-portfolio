'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiZap, FiClock, FiTrendingUp, FiRepeat } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface AutomationFeature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  stats: string;
}

const automationFeatures: AutomationFeature[] = [
  {
    id: 1,
    icon: FiZap,
    title: 'Instant Execution',
    description:
      'Triggers fire instantly when conditions are met. No delays, no manual intervention, just seamless automation.',
    stats: '< 1 sec response time',
  },
  {
    id: 2,
    icon: FiClock,
    title: '24/7 Operation',
    description:
      'Your automations work around the clock, handling tasks while you sleep. Never miss an opportunity or deadline.',
    stats: '100% uptime guaranteed',
  },
  {
    id: 3,
    icon: FiTrendingUp,
    title: 'Scalable Workflows',
    description:
      'Handle 10 or 10,000 operations with the same efficiency. Our automations scale with your business growth.',
    stats: 'Unlimited scalability',
  },
  {
    id: 4,
    icon: FiRepeat,
    title: 'Zero Human Error',
    description:
      'Eliminate mistakes from repetitive tasks. Consistent, accurate execution every single time.',
    stats: '99.9% accuracy rate',
  },
];

export function Automation() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="automation" ref={ref} className="relative overflow-hidden bg-dark-bg px-4 py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-accent-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent-secondary/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center justify-center"
          >
            <div className="rounded-full bg-accent-primary/10 p-4">
              <FiZap className="text-5xl text-accent-primary" />
            </div>
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Automation That Works While You Don't
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg">
            Stop wasting time on repetitive tasks. Our automation solutions handle the mundane 
            so you can focus on what matters—growing your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-xl border border-dark-border bg-dark-card p-8"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 via-accent-primary/5 to-accent-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-accent-primary/10 p-3">
                    <feature.icon className="text-3xl text-accent-primary" />
                  </div>
                  <span className="rounded-full bg-accent-success/10 px-3 py-1 text-xs font-bold text-accent-success">
                    {feature.stats}
                  </span>
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-text-primary">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary">
                  {feature.description}
                </p>

                {/* Animated Line */}
                <motion.div
                  className="mt-6 h-1 w-full rounded bg-gradient-to-r from-accent-primary to-accent-secondary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="rounded-xl border border-dark-border bg-dark-card p-6 sm:p-10">
            <h3 className="mb-4 text-xl font-bold text-text-primary sm:text-2xl">
              Ready to Automate Your Workflow?
            </h3>
            <p className="mb-6 text-sm text-text-secondary sm:text-base">
              Let's discuss how automation can transform your business operations and save you countless hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full rounded-full bg-accent-primary px-6 py-3 text-sm font-bold text-dark-bg transition hover:bg-accent-secondary sm:w-auto sm:px-8 sm:py-4"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

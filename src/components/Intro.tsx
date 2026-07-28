'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Intro() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="intro" ref={ref} className="bg-dark-bg px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-lg leading-relaxed text-text-secondary"
        >
          With years of experience developing robust web applications, we turn
          complex requirements into seamless, automated systems. From
          Twilio-powered communication tools to end-to-end Zapier and Systeme.io
          automations, we deliver solutions that save time and increase revenue.
        </motion.p>
      </div>
    </section>
  );
}

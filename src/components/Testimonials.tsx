'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi';
import { getAvatar } from '@/lib/assets';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Their Twilio automation system transformed our customer communication. What used to take hours now runs automatically, and our engagement rates have skyrocketed. The team's attention to detail and understanding of our business needs was exceptional.",
    author: 'Sarah Johnson',
    company: 'Fitness Pro Network',
    role: 'Operations Director',
  },
  {
    id: 2,
    quote:
      'The workflow automation solution they built connecting our Shopify store with QuickBooks eliminated countless hours of manual data entry. The system runs flawlessly, and their ongoing support has been invaluable as our business grows.',
    author: 'Michael Chen',
    company: 'EcoStyle Retail',
    role: 'Founder & CEO',
  },
  {
    id: 3,
    quote:
      "Working with them on our institute management system was a game-changer. They took the time to understand our unique requirements and delivered a solution that perfectly fits our workflow. The parent portal has significantly improved communication with our students' families.",
    author: 'Dr. Amina Rahman',
    company: 'Elite Learning Academy',
    role: 'Principal',
  },
  {
    id: 4,
    quote:
      "Their AI security system implementation was professional and thorough. The face recognition accuracy is impressive, and the real-time alerts give us peace of mind. They handled the IoT integration seamlessly and provided excellent training for our team.",
    author: 'Robert Williams',
    company: 'SecureTech Facilities',
    role: 'Security Director',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={ref} className="bg-dark-card px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            What Our Clients Say
          </h2>
          <p className="text-text-secondary">Real Feedback From Real Clients</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4">
            <FiMessageCircle className="text-6xl text-accent-primary/20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-dark-border bg-dark-bg p-8"
            >
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex-shrink-0">
                  <img
                    src={getAvatar(currentTestimonial.author)}
                    alt={currentTestimonial.author}
                    className="h-24 w-24 rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div>
                  <p className="mb-6 text-lg italic text-text-secondary">
                    "{currentTestimonial.quote}"
                  </p>

                  <div>
                    <h4 className="text-xl font-bold text-text-primary">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-text-secondary">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-accent-primary">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full border border-dark-border p-3 text-text-secondary transition hover:border-accent-primary hover:text-accent-primary"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    index === currentIndex
                      ? 'bg-accent-primary'
                      : 'bg-dark-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="rounded-full border border-dark-border p-3 text-text-secondary transition hover:border-accent-primary hover:text-accent-primary"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
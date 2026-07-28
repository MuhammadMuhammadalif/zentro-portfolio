'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiCalendar } from 'react-icons/fi';
import { getCompanyEmail, getCalendlyUrl } from '@/lib/utils';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // In a real application, this would be an API call
    console.log('Form submitted:', formData);
    console.log('Would send email to:', getCompanyEmail());

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text-primary">
            Ready to Automate and Scale Your Business?
          </h2>
          <p className="text-text-secondary">
            Let&apos;s discuss your project and find the perfect solution.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Your Name *
            </label>
            <input
              key="name-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className={`w-full rounded border px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition ${
                errors.name
                  ? 'border-accent-secondary focus:border-accent-secondary'
                  : 'border-dark-border bg-dark-card focus:border-accent-primary'
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              suppressHydrationWarning
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-accent-secondary">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Email Address *
            </label>
            <input
              key="email-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full rounded border px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition ${
                errors.email
                  ? 'border-accent-secondary focus:border-accent-secondary'
                  : 'border-dark-border bg-dark-card focus:border-accent-primary'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              suppressHydrationWarning
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-accent-secondary">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Project Description *
            </label>
            <textarea
              key="message-input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, timeline, and goals..."
              rows={5}
              className={`w-full resize-none rounded border px-4 py-3 text-text-primary placeholder-text-secondary outline-none transition ${
                errors.message
                  ? 'border-accent-secondary focus:border-accent-secondary'
                  : 'border-dark-border bg-dark-card focus:border-accent-primary'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              suppressHydrationWarning
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-2 text-sm text-accent-secondary"
              >
                {errors.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
            whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
            className={`w-full rounded py-3 font-bold transition ${
              status === 'loading'
                ? 'cursor-not-allowed bg-accent-primary/50'
                : 'bg-accent-primary hover:bg-accent-secondary'
            } text-dark-bg`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-accent-success/10 p-4 text-center"
            >
              <p className="text-accent-success">
                Message sent! We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-accent-secondary/10 p-4 text-center"
            >
              <p className="text-accent-secondary">
                Please fill in all fields correctly.
              </p>
            </motion.div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-dark-border pt-8 text-center"
        >
          <p className="mb-4 text-text-secondary">Or reach out directly:</p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${getCompanyEmail()}`}
              className="inline-flex items-center gap-2 text-accent-primary transition hover:text-accent-secondary"
            >
              <FiMail /> {getCompanyEmail()}
            </a>

            <span className="text-text-secondary">|</span>

            <a
              href={getCalendlyUrl()}
              className="inline-flex items-center gap-2 text-accent-primary transition hover:text-accent-secondary"
            >
              <FiCalendar /> Schedule a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
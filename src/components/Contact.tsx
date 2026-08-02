'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

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

    // Create mailto link with form data
    const mailtoLink = `mailto:itsabubakar103@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 500);
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
          <h2 className="mb-4 text-2xl font-bold text-text-primary sm:text-3xl">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm text-text-secondary sm:text-base">
            Have a project in mind? I&apos;d love to hear about it and see how I can help.
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
              Message *
            </label>
            <textarea
              key="message-input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
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
            {status === 'loading' ? 'Opening Email...' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-accent-success/10 p-4 text-center"
            >
              <p className="text-accent-success">
                Email client opened! Your message is ready to send.
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
          <p className="mb-6 text-text-secondary">Connect with me:</p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="mailto:itsabubakar103@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-accent-primary transition hover:text-accent-secondary sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="text-xl" /> itsabubakar103@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/abubakarvibe/"
              className="inline-flex items-center gap-2 text-sm text-accent-primary transition hover:text-accent-secondary sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="text-xl" /> LinkedIn
            </a>

            <a
              href="https://github.com/MuhammadMuhammadalif"
              className="inline-flex items-center gap-2 text-sm text-accent-primary transition hover:text-accent-secondary sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="text-xl" /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { getCompanyName, getCompanyEmail } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';
import { logo } from '@/lib/assets';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = getCompanyName();
  const companyEmail = getCompanyEmail();

  const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#solutions' },
    { label: 'Automation', href: '#automation' },
    { label: 'Work', href: '#caseStudies' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#whyChooseUs' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { label: 'Communication Automation', href: '#smsAutomation' },
    { label: 'Workflow & Integration Automation', href: '#workflowAutomation' },
    { label: 'Custom Software Development', href: '#instituteManagement' },
    { label: 'AI & Security Systems', href: '#faceRecognition' },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-[#0077B5]',
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-[#1DA1F2]',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-text-primary',
    },
  ];

  return (
    <footer className="border-t border-dark-border bg-dark-bg px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt={companyName} className="mb-4 h-8" />
            <p className="text-sm uppercase tracking-wider text-text-secondary">
              Automation that moves business forward.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-text-secondary transition hover:text-text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              Services
            </h3>
            <nav className="space-y-3">
              {servicesLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-text-secondary transition hover:text-text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                <a
                  href={`mailto:${companyEmail}`}
                  className="transition hover:text-text-primary"
                >
                  {companyEmail}
                </a>
              </p>
              <p>
                <a
                  href="tel:+11234567890"
                  className="transition hover:text-text-primary"
                >
                  +1 (234) 567-890
                </a>
              </p>
              <p className="leading-relaxed">
                123 Automation Way
                <br />
                Tech District, NY 10001
              </p>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-text-secondary transition ${social.color}`}
                    aria-label={`Visit our ${social.label}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-8 text-xs text-text-secondary md:flex-row"
        >
          <p>
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-text-primary"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition hover:text-text-primary"
              onClick={(e) => e.preventDefault()}
            >
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { getCompanyName } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = getCompanyName();

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#solutions' },
    { label: 'Portfolio', href: '#caseStudies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: FiTwitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-[#1DA1F2]',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-[#0077B5]',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-text-primary',
    },
  ];

  return (
    <footer className="border-t border-dark-border bg-dark-bg px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-text-secondary"
            >
              © {currentYear} {companyName}. All Rights Reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-xs text-text-secondary"
            >
              Premium software development & automation solutions
            </motion.p>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              aria-label="Footer navigation"
            >
              <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-text-secondary transition hover:text-text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
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
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t border-dark-border pt-8 text-center"
        >
          <p className="text-xs text-text-secondary">
            This website is built with Next.js, React Three Fiber, and
            Framer Motion. All icons and images are loaded from CDN.
          </p>
          <p className="mt-2 text-xs text-text-secondary">
            <a
              href="#"
              className="text-accent-primary transition hover:text-accent-secondary"
            >
              Privacy Policy
            </a>{' '}
            ·{' '}
            <a
              href="#"
              className="text-accent-primary transition hover:text-accent-secondary"
            >
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { scrollToSection } from '@/lib/utils';
import { logo } from '@/lib/assets';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const projectLinks = [
    { label: 'EasyBuy E-Commerce', href: '#easybuy' },
    { label: 'AI Research System', href: '#aiResearch' },
    { label: 'Chess Engine', href: '#chessEngine' },
    { label: 'School Management', href: '#schoolManagement' },
    { label: 'Web Application Firewall', href: '#waf' },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abubakarvibe/',
      color: 'hover:text-[#0077B5]',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/MuhammadMuhammadalif',
      color: 'hover:text-text-primary',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:itsabubakar103@gmail.com',
      color: 'hover:text-accent-primary',
    },
  ];

  return (
    <footer className="border-t border-dark-border bg-dark-bg px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Personal Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Muhammad Abubakar" className="mb-4 h-8" />
            <p className="text-sm uppercase tracking-wider text-text-secondary">
              Building scalable solutions with modern technology.
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

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              Featured Projects
            </h3>
            <nav className="space-y-3">
              {projectLinks.map((link) => (
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

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              Connect
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                <a
                  href="mailto:itsabubakar103@gmail.com"
                  className="transition hover:text-text-primary"
                >
                  itsabubakar103@gmail.com
                </a>
              </p>
              <p className="leading-relaxed">
                BS Computer Science
                <br />
                UET Lahore, Pakistan
              </p>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-text-secondary transition ${social.color}`}
                    aria-label={`Visit my ${social.label}`}
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
            © {currentYear} Muhammad Abubakar. Built with Next.js, React & Three.js.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/MuhammadMuhammadalif"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-text-primary"
            >
              View Source
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
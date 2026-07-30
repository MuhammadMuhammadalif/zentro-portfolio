'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { logo } from '@/lib/assets';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { label: 'Services', href: '#solutions' },
  { label: 'Automation', href: '#automation' },
  { label: 'Work', href: '#caseStudies' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', ...navItems.map((item) => item.href.slice(1))];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-dark-border bg-dark-bg/95 backdrop-blur"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavClick('#hero')}
          className="cursor-pointer border-none bg-transparent p-0"
          aria-label="Go to home"
        >
          <img src={logo} alt="Logo" className="h-8" />
        </motion.button>

        <div className="hidden flex-1 justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                activeSection === item.href.slice(1)
                  ? 'text-accent-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('#contact')}
          className="hidden rounded-full bg-accent-primary px-6 py-2 text-sm font-medium text-dark-bg transition hover:bg-accent-primary/90 md:block"
        >
          Schedule a Consultation
        </motion.button>

        <button
          className="ml-auto text-text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 border-t border-dark-border p-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block transition ${
                activeSection === item.href.slice(1)
                  ? 'text-accent-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#contact')}
            className="w-full rounded-full bg-accent-primary px-6 py-2 text-sm font-medium text-dark-bg transition hover:bg-accent-primary/90"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}

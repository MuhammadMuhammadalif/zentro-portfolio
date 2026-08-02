'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBook, FiAward } from 'react-icons/fi';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold text-text-primary">
            Experience & Education
          </h2>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent-primary/10 p-3">
                <FiBook className="text-2xl text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Education</h3>
            </div>

            <div className="rounded-xl border border-dark-border bg-dark-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h4 className="text-lg font-bold text-text-primary sm:text-xl">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-accent-primary">
                    University of Engineering and Technology (UET), Lahore
                  </p>
                </div>
                <span className="text-sm text-text-secondary">2023 – Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Focused on Software Engineering, AI, and Data Structures & Algorithms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Relevant coursework: Object-Oriented Programming, Database Systems, Web Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Active in coding clubs and technical workshops
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-accent-secondary/10 p-3">
                <FiBriefcase className="text-2xl text-accent-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Work Experience</h3>
            </div>

            <div className="rounded-xl border border-dark-border bg-dark-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <h4 className="text-lg font-bold text-text-primary sm:text-xl">
                    Independent Software Developer
                  </h4>
                  <p className="text-accent-secondary">Freelance / Personal Projects</p>
                </div>
                <span className="text-sm text-text-secondary">2024 – Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Developed full-stack web applications using MERN stack and modern frontend technologies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Designed and implemented REST APIs, authentication systems, and database solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Built academic and personal projects involving AI, software engineering, and cybersecurity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-success">•</span>
                  Applied software development principles including clean architecture, version control, and scalable design
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-xl border border-dark-border bg-dark-card p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-accent-success/10 p-3">
                <FiAward className="text-2xl text-accent-success" />
              </div>
              <h4 className="text-xl font-bold text-text-primary">Key Competencies</h4>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h5 className="mb-2 font-semibold text-accent-primary">Languages</h5>
                <p className="text-sm text-text-secondary">
                  C++, Python, C#, JavaScript, Go
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-semibold text-accent-primary">Frameworks</h5>
                <p className="text-sm text-text-secondary">
                  React.js, Node.js, Express.js, ASP.NET Core, FastAPI
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-semibold text-accent-primary">Databases</h5>
                <p className="text-sm text-text-secondary">
                  MongoDB, PostgreSQL, MySQL, Redis
                </p>
              </div>
              <div>
                <h5 className="mb-2 font-semibold text-accent-primary">Tools</h5>
                <p className="text-sm text-text-secondary">
                  Git, Docker, Linux, VS Code, Postman
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
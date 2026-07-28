'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle } from 'react-icons/fi';
import { projectImages, techIcons } from '@/lib/assets';

interface CaseStudy {
  id: string;
  name: string;
  duration: string;
  status: 'ongoing' | 'completed';
  image: string;
  description: string;
  techs: string[];
  outcomes: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'smsAutomation',
    name: 'SMS Automation for Membership Platform',
    duration: '4 weeks · Ongoing',
    status: 'ongoing',
    image: projectImages.sms,
    description:
      'Automated SMS onboarding, payment reminders, and win-back campaigns for a fitness membership platform using Twilio and Systeme.io integrations.',
    techs: ['systeme', 'zapier', 'twilio', 'dotnet'],
    outcomes: [
      'Zero manual follow-ups required',
      'Onboarding completion improved by 45%',
      'Running live in production',
    ],
  },
  {
    id: 'workflowAutomation',
    name: 'Workflow Automation for E-commerce',
    duration: '6 weeks · Completed',
    status: 'completed',
    image: projectImages.workflow,
    description:
      'Custom n8n workflows connecting Shopify, QuickBooks, and shipping APIs to automate order processing, inventory sync, and accounting.',
    techs: ['n8n', 'zapier', 'restapi', 'webhook'],
    outcomes: [
      'Reduced manual data entry by 90%',
      'Order processing time cut from hours to minutes',
      'Implemented real-time inventory tracking',
    ],
  },
  {
    id: 'twilioDashboard',
    name: 'Twilio-Powered Customer Service Dashboard',
    duration: '8 weeks · Completed',
    status: 'completed',
    image: projectImages.twilio,
    description:
      'Custom dashboard for managing SMS, voice, and WhatsApp communications with analytics, automation rules, and real-time monitoring.',
    techs: ['twilio', 'react', 'nodejs', 'sql'],
    outcomes: [
      'Customer response time reduced by 70%',
      '24/7 automated support coverage',
      'Integration with existing CRM system',
    ],
  },
  {
    id: 'instituteManagement',
    name: 'Institute Management System',
    duration: '12 weeks · Completed',
    status: 'completed',
    image: projectImages.institute,
    description:
      'Comprehensive platform for student enrollment, course management, attendance tracking, and payment processing with parent portals.',
    techs: ['react', 'dotnet', 'sql', 'restapi'],
    outcomes: [
      'Digitalized entire institute operations',
      'Parent engagement increased by 60%',
      'Automated fee collection and reminders',
    ],
  },
  {
    id: 'faceRecognition',
    name: 'Face Recognition Security System',
    duration: '10 weeks · Ongoing',
    status: 'ongoing',
    image: projectImages.faceRecognition,
    description:
      'IoT-based security system using OpenCV for face recognition, real-time alerts, and access control with mobile app integration.',
    techs: ['python', 'opencv', 'iot', 'restapi'],
    outcomes: [
      '99.8% accurate face detection',
      'Real-time intruder alerts via mobile',
      'Access logs with timestamped images',
    ],
  },
];

export function CaseStudies() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="caseStudies" ref={ref} className="bg-dark-bg px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-text-primary">
            Case Studies
          </h2>
          <p className="text-text-secondary">Real Projects. Real Outcomes.</p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              id={study.id}
              className="rounded-xl border border-dark-border bg-dark-card p-8 transition hover:border-accent-primary"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <img
                  src={study.image}
                  alt={study.name}
                  className="h-64 w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  <span
                    className={`mb-3 inline-block rounded px-3 py-1 text-xs font-bold ${
                      study.status === 'ongoing'
                        ? 'bg-accent-success/20 text-accent-success'
                        : 'bg-accent-primary/20 text-accent-primary'
                    }`}
                  >
                    {study.status.toUpperCase()}
                  </span>

                  <h3 className="mb-2 text-2xl font-bold text-text-primary">
                    {study.name}
                  </h3>
                  <p className="mb-4 text-text-secondary">{study.duration}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {study.techs.map((tech) => (
                      <img
                        key={tech}
                        src={techIcons[tech]}
                        alt={tech}
                        className="h-6 w-6"
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>

                  <p className="mb-6 text-text-secondary">{study.description}</p>

                  <ul className="mb-6 space-y-2">
                    {study.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <FiCheckCircle className="mt-1 flex-shrink-0 text-accent-success" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      (window.location.href = `mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'hello@example.com'}?subject=Inquiry: ${study.name}`)
                    }
                    className="rounded bg-accent-primary px-6 py-3 font-bold text-dark-bg transition hover:bg-accent-secondary"
                  >
                    Build Something Similar
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
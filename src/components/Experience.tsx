// src/components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Systems Consultant & Software Engineer',
    company: 'Syokinet (ISP)',
    period: 'Dec 2025 - Present',
    details: [
      'Architecting a Java-based network management engine to automate ISP subscriber lifecycles and resource allocation.',
      'Developing a companion Android diagnostic tool (Kotlin/Jetpack Compose) for field engineers, utilizing background services for real-time signal monitoring.',
      'Optimizing backend-to-network-node communication protocols to reduce latency in bandwidth throttling tasks.'
    ]
  },
  {
    role: 'Backend Systems Engineer',
    company: 'Broadshare Softwares',
    period: 'Jun 2023 - Nov 2025',
    details: [
      'Engineered high-concurrency microservices using Python (FastAPI) and Node.js to handle complex fintech transactions.',
      'Integrated Stripe API for multi-directional financial flows, ensuring atomic operations and data integrity.',
      'Optimized database indexing and caching strategies, resulting in a significant reduction in CPU overhead during peak loads.'
    ]
  },
  {
    role: 'Software Engineer (Platform & Tooling)',
    company: 'Streetworthy Studios',
    period: 'Mar 2020 - Jun 2023',
    details: [
      'Developed and maintained cross-platform feature sets with a focus on CI/CD automation and environment stability.',
      'Implemented automated testing suites that reduced regression bugs by 40% across mobile and web deployments.',
      'Managed state-heavy application logic, prioritizing UI thread responsiveness and resource cleanup.'
    ]
  },
  {
    role: 'Junior Software Developer',
    company: 'Andela',
    period: 'May 2018 - Sept 2018',
    details: [
      'Performed deep-dive refactoring of legacy codebases to align with modern architectural patterns (SOLID/DRY).',
      'Collaborated on system-level design documents for scalable web applications.',
      'Executed performance profiling to identify and resolve memory leaks in frontend modules.'
    ]
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0a0a0a] px-4 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center tracking-tight"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // CHANGE: amount: 0.1 ensures it triggers as soon as 10% of the section is visible
          viewport={{ once: true, amount: 0.1 }} 
          className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0 space-y-12 pb-12"
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#0a0a0a]" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                </div>
                <p className="text-sm font-mono text-gray-500 mt-1 md:mt-0">{job.period}</p>
              </div>

              <ul className="space-y-3">
                {job.details.map((point, i) => (
                  <li key={i} className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

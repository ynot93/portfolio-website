// src/components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const experience = [
  {
    role: 'Backend Engineer',
    company: 'Broadshare Softwares',
    period: 'Jun 2023 - Present',
    details: 'Built high-performance microservices using Node.js, Express.js, and Python, handling multiple daily transactions for fintech/edtech clients.'
  },
  {
    role: 'Full Stack Engineer',
    company: 'Streetworthy Studios',
    period: 'Mar 2020 - Jun 2023',
    details: 'Developed full-stack features using React and Node.js. Implemented CI/CD pipelines and testing.'
  },
  {
    role: 'Software Developer',
    company: 'Andela',
    period: 'May 2018 - Sept 2018',
    details: 'Assisted in refactoring legacy code and contributed to fullstack design projects.'
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 px-4 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="hover:scale-[1.01] transition-transform"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{job.role} — <span className="text-blue-500">{job.company}</span></h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.period}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{job.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

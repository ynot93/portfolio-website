// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Stone Carpet Solutions',
    description: 'A sleek, responsive power washing business site built with React and TailwindCSS.',
    link: 'https://stonecarpetsolutions.co.ke'
  },
  {
    title: 'Edu Adapt',
    description: 'A full-stack education application leveraging AI solutions built in React, Node.js, and MongoDB.',
    link: 'https://github.com/millyanne93/EduAdapt/tree/development'
  },
  {
    title: 'Tele Thrive',
    description: 'A telemedicine platform that offers virtual therapy services, connecting users with licensed therapists.',
    link: 'https://github.com/ynot93/tele-thrive.git'
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

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950 px-4 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="hover:scale-[1.02] transition-transform"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Visit Site
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
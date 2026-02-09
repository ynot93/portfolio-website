// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'ISP Infrastructure & Mobile Ecosystem (Syokinet)',
    subtitle: 'Java Spring Boot | Kotlin (Android) | High-Throughput Networking',
    description: 'Engineered a mission-critical backend for a regional ISP to automate subscriber lifecycle and network resource allocation. Currently architecting the companion Android client using Kotlin and Jetpack Compose, focusing on low-level network diagnostic tools and background polling services.',
    techHighlights: [
      'Implemented asynchronous task execution for real-time bandwidth throttling.',
      'Designed a robust API layer for seamless JNI-adjacent integration with mobile clients.',
      'Optimized database queries to handle concurrent requests from 10k+ active network nodes.'
    ],
    link: '#' // Add link if available
  },
  {
    title: 'Fantasy Fusion: Real-Time Data Engine',
    subtitle: 'Python (FastAPI) | React | Async Data Pipelines',
    description: 'A high-performance fantasy football platform that synchronizes multi-source API data. Focused on building a non-blocking data ingestion engine that processes thousands of player statistics updates per minute with minimal latency.',
    techHighlights: [
      'Utilized FastAPI’s Asynchronous Server Gateway Interface (ASGI) for high-concurrency handling.',
      'Developed a custom caching layer to reduce external API overhead by 60%.',
      'Engineered a reactive state-management system to ensure UI-consistency across data-heavy dashboards.'
    ],
    link: '#' 
  },
  {
    title: 'EduAdapt: Intelligent System Architecture',
    subtitle: 'Node.js | React | AI Model Integration',
    description: 'An adaptive learning management system that utilizes AI to tailor educational paths. Shifted the focus from standard CRUD operations to building a modular integration layer for LLMs, prioritizing system responsiveness and data integrity.',
    techHighlights: [
      'Architected a modular service-oriented structure for easy swapping of AI inference engines.',
      'Managed complex state transitions for individualized learning paths.',
      'Focused on payload optimization to ensure low-latency responses in resource-constrained environments.'
    ],
    link: 'https://github.com/millyanne93/EduAdapt/tree/development'
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
              <Card className="flex flex-col h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header Section */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold tracking-tight mb-1">{project.title}</h3>
                    <code className="text-xs text-blue-600 dark:text-blue-400 font-mono">
                      {project.subtitle}
                    </code>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technical Highlights - The "Engineer Appeal" Section */}
                  <div className="flex-grow">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-500 mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {project.techHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <span className="mr-2 text-blue-500 font-bold">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Source Code & Documentation 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
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
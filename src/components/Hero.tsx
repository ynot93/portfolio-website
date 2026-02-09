// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tony Mputhia</span>
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
            Software Engineer specializing in <span className="font-semibold text-gray-900 dark:text-white">Native Web, Mobile</span> and 
            <span className="font-semibold text-gray-900 dark:text-white"> Systems</span> development. 
            I bridge the gap between high-level architecture and low-level performance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono border border-gray-200 dark:border-gray-700">
              Multithreading & Concurrency
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono border border-gray-200 dark:border-gray-700">
              Optimization
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono border border-gray-200 dark:border-gray-700">
              Architecture
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white py-4 px-8 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Technical Deep Dives
            </a>
            <a
              href="#skills"
              className="inline-block bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-4 px-8 rounded-lg text-sm font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Core Competencies
            </a>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default Hero;
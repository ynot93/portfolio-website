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
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-blue-500">Tony Mputhia</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          I build elegant, performant, and scalable web applications. Welcome to my digital space.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
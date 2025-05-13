// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-relaxed text-center"
        >
          I'm a software engineer with a passion for creating intuitive, performant, and delightful digital experiences.
          With a strong foundation in JavaScript, React, and backend technologies like Node.js and Python, I enjoy building
          everything from small business websites to rich interactive web apps. I'm always learning and always curious.
        </motion.p>
      </div>
    </section>
  );
};

export default About;

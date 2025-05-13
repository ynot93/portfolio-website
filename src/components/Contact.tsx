// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 px-4 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          Get in Touch
        </motion.h2>

        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Whether you're interested in working together or just want to say hi, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <a
            href="mailto:you@example.com"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <Mail className="w-4 h-4" /> you@example.com
          </a>
          <a
            href="https://linkedin.com/in/tony-mputhia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/ynot93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

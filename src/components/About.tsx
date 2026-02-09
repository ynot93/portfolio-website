// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center tracking-tight"
        >
          Engineering Philosophy
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-400"
        >
          <p>
            I am a Software Engineer driven by the "how" behind the software. My specialty is in the <b>intersection of high-level abstractions and low-level execution</b>. 
            My work centers on building performance-focused applications for mobile and web platforms, 
            where memory efficiency and execution speed are not just features, but requirements.
          </p>

          <p>
            With a deep technical foundation across the stack—from architecting scalable backends, in Kotlin or Node to crafting reactive interfaces, I bring a systems-level mindset to every project. I aim to write 
            code that not just works but that respects the operating system's lifecycle, manages 
            concurrency safely, and scales without compromising on stability.
          </p>

          <p className="border-l-4 border-blue-500 pl-6 italic">
            "I believe that great engineering isn't found in the number of features, but in the 
            elegance of the underlying architecture and the efficiency of the machine code it produces."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

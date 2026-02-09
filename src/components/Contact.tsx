// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] px-4 text-gray-900 dark:text-white border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Call to Action */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold mb-6 tracking-tight"
            >
              Let’s Discuss <br />
              <span className="text-blue-600 dark:text-blue-400">Technical Challenges.</span>
            </motion.h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I am currently open to discussing high-performance software roles, 
              native Android/Windows systems work, or architectural consulting. 
              Expect a response within 24 hours.
            </p>

            <div className="flex items-center gap-3 text-sm font-mono text-gray-500 dark:text-gray-500">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Nairobi, Kenya • East Africa Time (GMT+3)</span>
            </div>
          </div>

          {/* Right Side: Professional Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800"
          >
            <div className="space-y-6">
              <a
                href="mailto:tonymmputhia@gmail.com"
                className="group flex items-center justify-between p-4 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm">Email Me</span>
                </div>
                <span className="text-xs font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">tonymmputhia@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/tony-mputhia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm">LinkedIn Professional Profile</span>
                </div>
              </a>

              <a
                href="https://github.com/ynot93"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm">Systems Research & Code</span>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
// src/components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Tony's Portfolio. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/ynot93" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/tony-mputhia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:tonymmputhia@gmail.com" className="hover:text-blue-500">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

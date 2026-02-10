// src/components/Navbar.tsx
import React, { useState } from 'react';
import { useTheme } from '../themeContext';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navLinks = (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-700 dark:text-gray-300">
      <li><a href="#hero" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="#about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#projects" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="#experience" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Experience</a></li>
      <li><a href="#contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</a></li>
    </ul>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tony Mputhia</h1>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks}
          <button
            onClick={toggleTheme}
            className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks}
          <button
            onClick={toggleTheme}
            className="mt-4 w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;

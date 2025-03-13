import { useState } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Navigator from './common/Navigator';

function App() {
  return (
    <>
      <Navigator />
      <motion.div
        id="sections"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;

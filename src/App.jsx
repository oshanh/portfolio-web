import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Navigator from './common/Navigator';
import CustomCursor from './common/CustomCursor';
import ProjectDetail from './Pages/ProjectDetail';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      // Wait for framer-motion AnimatePresence exit transition (0.4s)
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else if (location.pathname === '/' && !location.hash && !location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <CustomCursor />
      <Navigator />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <main className="sectionsContainer">
                <section id="hero"><Hero /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
                <Footer />
              </main>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

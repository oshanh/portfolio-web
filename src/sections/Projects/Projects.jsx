import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import projects from '../../data/ProjectData';

const categories = ['All', 'Web', 'Desktop', 'Mobile'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="sectionTitle">Featured Projects</h2>

      {/* Filter tabs */}
      <div className={styles.filters}>
        {categories.map(cat => (
          <motion.button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
            {activeCategory === cat && (
              <motion.span
                className={styles.filterIndicator}
                layoutId="filterIndicator"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div className={styles.grid} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsStyles.module.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Java', icon: '☕' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'C', icon: '⚙️' },
      { name: 'PHP', icon: '🐘' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Laravel', icon: '🔺' },
      { name: 'JavaFX', icon: '🖥️' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'MySQL', icon: '🗄️' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function Skills() {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true, margin: '-50px' }}
    >
      <h2 className="sectionTitle">Skills & Technologies</h2>

      <div className={styles.categories}>
        {skillCategories.map((cat, i) => (
          <motion.div key={i} className={styles.categoryCard} variants={cardVariants}>
            <h3 className={styles.categoryTitle}>{cat.title}</h3>
            <motion.div
              className={styles.pills}
              variants={containerVariants}
            >
              {cat.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className={styles.pill}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className={styles.pillIcon}>{skill.icon}</span>
                  <span className={styles.pillName}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

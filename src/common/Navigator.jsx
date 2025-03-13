import React from 'react';
import { Link } from 'react-scroll';
import styles from './NavigatorStyles.module.css';

function Navigator() {
  return (
    <div className={styles.container}>
      <Link to="hero" smooth={true} duration={800} title="Home">
        <div className={styles.sections}>
          <img src="home_ico.svg" alt="Home" />
        </div>
      </Link>
      <Link to="projects" smooth={true} duration={800} title="Projects">
        <div className={styles.sections}>
          <img src="Project_ico.png" alt="Projects" />
        </div>
      </Link>
      <Link to="skills" smooth={true} duration={800} title="Skills">
        <div className={styles.sections}>
          <img src="skill_ico.png" alt="Skills" />
        </div>
      </Link>
      <Link to="contact" smooth={true} duration={800} title="Contact">
        <div className={styles.sections}>
          <img src="contact_ico.png" alt="Contact" />
        </div>
      </Link>
    </div>
  );
}

export default Navigator;

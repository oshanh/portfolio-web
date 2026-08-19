import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>OH</span>
          <p className={styles.copy}>&copy; {year} Oshan Harshad. All rights reserved.</p>
        </div>
        <p className={styles.made}>
          Made with <span className={styles.heart}>❤️</span> using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
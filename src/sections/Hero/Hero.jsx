import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/hero-img.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import xIconLight from '../../assets/twitter-light.svg';
import githubIconLight from '../../assets/github-light.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import xIconDark from '../../assets/twitter-dark.svg';
import githubIconDark from '../../assets/github-dark.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const xIcon = theme === 'light' ? xIconLight : xIconDark;
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;

    return (
        <motion.section
            id="hero"
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className={styles.colorModeContainer}>

                {/* Funny Hero Image Flip on Hover */}
                <motion.img
                    className={styles.hero}
                    src={HeroImg}
                    alt="hero-img"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Theme Toggle Icon */}
                <motion.img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="theme"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                />
            </div>

            <motion.div
                className={styles.info}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h1>Oshan <br /> Harshad</h1>
                <h2>Developer</h2>

                <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.a href="https://x.com/OshanHarshad1" target="_blank" whileHover={{ scale: 1.1 }}>
                        <img src={xIcon} alt="x_icon" />
                    </motion.a>
                    <motion.a href="https://github.com/oshanh" target="_blank" whileHover={{ scale: 1.1 }}>
                        <img src={githubIcon} alt="github_icon" />
                    </motion.a>
                    <motion.a href="https://lk.linkedin.com/in/oshan-harshad-580a39258" target="_blank" whileHover={{ scale: 1.1 }}>
                        <img src={linkedinIcon} alt="linkedin_icon" />
                    </motion.a>
                </motion.span>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    Tech enthusiast with a passion for making software solutions for easyness.
                </motion.p>

                <motion.a href={CV} target="_blank">
                    <motion.button
                        className="hover"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Resume
                    </motion.button>
                </motion.a>
            </motion.div>
        </motion.section>
    );
}

export default Hero;

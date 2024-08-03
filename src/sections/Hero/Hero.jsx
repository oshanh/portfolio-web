import React from 'react';
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
    const {theme,toggleTheme}=useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const xIcon = theme === 'light' ? xIconLight  : xIconDark;
    const githubIcon = theme === 'light' ? githubIconLight :githubIconDark ;
    const linkedinIcon = theme === 'light' ? linkedinIconLight :linkedinIconDark ;




  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}> 

        <img className={styles.hero} src={HeroImg} alt='hero-img'/>

        <img className={styles.colorMode} src={themeIcon} alt='' onClick={toggleTheme}/>

    </div>

    <div className={styles.info}>
        <h1>     
        Oshan 
        <br />
        Harshad
        </h1>
        <h2>
             Developer
        </h2>

        <span>
            <a href='https://x.com/OshanHarshad1' target='_blank' >
                <img src={xIcon} alt='x_icon'/>
            </a>
            <a href='https://github.com/oshanh' target='_blank' >
                <img src={githubIcon} alt='github_icon'/>
            </a>
            <a href='https://lk.linkedin.com/in/oshan-harshad-580a39258' target='_blank' >
                <img src={linkedinIcon} alt='linkedin_icon'/>
            </a>
            
        </span>
        <p className={styles.description}>
            Tech enthusiast with a passion for making software solutions for easyness.
        </p>
        {/* <a href={CV} download>
            <button className='hover'>
                Resume
            </button>    
        </a> */}
    </div>
    </section>
  )
}
export default Hero;
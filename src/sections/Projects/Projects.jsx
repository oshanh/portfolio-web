import React from "react";
import styles from "./ProjectStyles.module.css";
import ExploreWild from "../../assets/Projects/ExploreWild.png";
import ProjectCard from "../../common/ProjectCard";
import TradeManager from '../../assets/Projects/TradeMnager.png';
import YouHeal from '../../assets/Projects/YouHeal.png';
import RTC from '../../assets/Projects/RTC.png';
import RuhSchedulEase from '../../assets/Projects/RuhSchedulEase.png';

function Projects() {


    
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle" >Projects</h1>

      <div className={styles.projectsContainer}>
        

        <ProjectCard  icon={ExploreWild} link="https://github.com/oshanh/explorewild_JavaFX" title="ExploreWild" des="Zoo Management Application using JAVAFX"/>
        <ProjectCard  icon={TradeManager} link="https://github.com/oshanh/TradeManager" title="TradeManager" des="USD buy & sell using Java"/>
        <ProjectCard  icon={YouHeal} link="https://github.com/oshanh/Hospital-website" title="YouHeal Website" des="Website for a Hospital using pure HTML,CSS & JS"/>
        <ProjectCard  icon={RTC} link="https://github.com/SPradeepIndie/MOSAD" title="RTC" des="A E-Business web application for Rashmi Tyre Center"/>
        <ProjectCard  icon={RuhSchedulEase} link="https://github.com/gimhanadeshan/Group-Project-CSC2233" title="RuhSchedulEase" des="A web application for TimeTable Academic Management"/>



      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import styles from "./ProjectStyles.module.css";
import ExploreWild from "../../assets/Projects/ExploreWild.png";
import ProjectCard from "../../common/ProjectCard";
import TradeManager from '../../assets/Projects/TradeMnager.png';
import YouHeal from '../../assets/Projects/YouHeal.png';

function Projects() {


    
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle" >Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard  icon={ExploreWild} link="https://github.com/oshanh/explorewild_JavaFX" title="ExploreWild" des="Zoo Management Application"/>
        <ProjectCard  icon={TradeManager} link="https://github.com/oshanh/TradeManager" title="TradeManager" des="USD buy & sell"/>
        <ProjectCard  icon={YouHeal} link="https://github.com/oshanh/Hospital-website" title="YouHeal Web" des="Website for a Hospital"/>
      </div>
    </section>
  );
}

export default Projects;

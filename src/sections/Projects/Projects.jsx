import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectStyles.module.css";
import ExploreWild from "../../assets/Projects/ExploreWild.png";
import ProjectCard from "../../common/ProjectCard";
import TradeManager from "../../assets/Projects/TradeMnager.png";
import YouHeal from "../../assets/Projects/YouHeal.png";
import RTC from "../../assets/Projects/RTC.png";
import RuhSchedulEase from "../../assets/Projects/RuhSchedulEase.png";
import DebitManager from "../../assets/Projects/DebitManager.png";


function Projects() {
  // Animation Variants for Staggered Scaling
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3 // Delay between each card animation
      } 
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className={styles.container}
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <motion.h1 
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <motion.div className={styles.projectsContainer} variants={containerVariants}>
        {/* Project Cards with Staggered Scaling Animation */}
        <motion.div variants={cardVariants}>
          <ProjectCard icon={ExploreWild} link="https://github.com/oshanh/explorewild_JavaFX" title="ExploreWild" des="Zoo Management Application using JAVAFX" />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard icon={TradeManager} link="https://github.com/oshanh/TradeManager" title="TradeManager" des="USD buy & sell using Java" />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard icon={YouHeal} link="https://github.com/oshanh/Hospital-website" title="YouHeal Website" des="Website for a Hospital using pure HTML, CSS & JS" />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard icon={RTC} link="https://github.com/SPradeepIndie/MOSAD" title="RTC" des="An E-Business web application for Rashmi Tyre Center" />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ProjectCard icon={RuhSchedulEase} link="https://github.com/gimhanadeshan/Group-Project-CSC2233" title="RuhSchedulEase" des="A web application for TimeTable Academic Management" />
        </motion.div>
        <motion.div variants={cardVariants}>
          <ProjectCard icon={DebitManager} link="https://github.com/oshanh/DebitManager" title="Debit Manager" des="Track progress of your debtors, mark repayments. " />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;

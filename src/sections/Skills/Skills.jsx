import { motion } from "framer-motion";
import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  // Container animation for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each skill animation
      },
    },
  };

  // Individual skill animation
  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      id="skills"
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
        Skills
      </motion.h1>

      {/* Skill Sections with Staggered Animation */}
      <motion.div className={styles.skillList} variants={containerVariants}>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="HTML" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="CSS" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="JavaScript" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="JAVA" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="C" />
        </motion.div>
      </motion.div>

      <hr />

      <motion.div className={styles.skillList} variants={containerVariants}>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="React" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </motion.div>
      </motion.div>

      <hr />

      <motion.div className={styles.skillList} variants={containerVariants}>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="Git" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="Laravel" />
        </motion.div>
        <motion.div variants={skillVariants}>
          <SkillList src={checkMarkIcon} skill="Node" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Skills;

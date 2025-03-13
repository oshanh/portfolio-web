import React from "react";
import { motion } from "framer-motion";
import styles from "./ContactStyles.module.css";
import whatsapp from "../../assets/whatsapp_logo.svg";

function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1 
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h1>

      <motion.a 
        href="https://wa.me/94759503445?text=Hello%20!%20Oshan'" 
        target="_blank"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.img 
          src={whatsapp} 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.a>
    </motion.section>
  );
}

export default Contact;

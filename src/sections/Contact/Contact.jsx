import React from 'react'
import styles from './ContactStyles.module.css';
import whatsapp from '../../assets/whatsapp_logo.svg';
function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>

        <a href="https://wa.me/94759503445?text=Hello%20!%20Oshan'" target='_blank' >
        <img src={whatsapp}/>
        </a>
      
    </section>
  )
}

export default Contact

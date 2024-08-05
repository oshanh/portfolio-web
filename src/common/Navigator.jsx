import React from 'react';
import styles from  './NavigatorStyles.module.css';

function Navigator() {
  return (

    <div >
      <div class={styles.container}>
      <a href='#hero' title='Home'>
        <div className={styles.sections}>
            <img src='home_ico.svg'/>
        </div>
        </a>
        <a href='#projects' title='Projects'>
        <div className={styles.sections}>
        <img src='Project_ico.png'/>

        </div>
        </a>
        <a href='#skills' title='Skills'>
        <div className={styles.sections}>
        <img src='skill_ico.png'/>
        </div>
        </a>
        <a href='#contact' title='Contact'>
        <div className={styles.sections}>
        <img src='contact_ico.png'/>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Navigator

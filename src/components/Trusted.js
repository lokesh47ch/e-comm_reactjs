import React from 'react';
import styles from '../stylesModules/trusted.module.css'
import { SiAmazonluna, SiAdobe, SiTcs } from "react-icons/si";
import { FaInvision } from "react-icons/fa6";

import { RiAppStoreLine } from "react-icons/ri";




const Trusted = () => {
  return (
    <div className={styles.container}>
      <h3>Trusted by 1000+ Companies</h3>
      <div className={styles.innerContainer}>
        <div className={styles.comp_logo}>
          <SiAmazonluna /><h5>Amijen</h5>
        </div>
        <div className={styles.comp_logo}>
          <SiTcs /><h5>Chikawo</h5>
        </div>
        <div className={styles.comp_logo}><SiAdobe />
          <h5>Adobe</h5>
        </div>
        <div className={styles.comp_logo}>
          <RiAppStoreLine />
          <h5>Ristara</h5>

        </div>
        <div className={styles.comp_logo}>
          <FaInvision />
          <h5>Nicolus</h5>

        </div>
      </div>
    </div>
  )
}

export default Trusted
// Footer.js

import React from 'react';
import styles from '../stylesModules/footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";





const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.get_started}>
            <h6 style={{color:'black'}}>Ready to get started? <br /> Talk to us today.</h6>
            <NavLink to="/contact"><button>GET STARTED</button></NavLink>
        </div>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>Lokesh Chauhan</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Subscribe for more updates</h4>
          <form className={styles.form} action="">
            <input  type="Email" placeholder='Your Email'  />
            <input type="submit" value='subscribe' />
          </form>
         
        </div>
        <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.iconTray}>
            <FaFacebook className={styles.icon} />
            
            <FaYoutube className={styles.icon} />
            <FaSquareInstagram className={styles.icon} />




            </div>


        </div>

      </div>
      <hr />
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Your eCommerce App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

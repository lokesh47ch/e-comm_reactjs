import React from "react";
import styles from './stylesModules/contact.module.css'


const Contact = () => {
   
 return <>

 <div className={styles.container}>
 
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022927323!2d76.82493483041476!3d28.423160293840827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1701589086031!5m2!1sen!2sin"
  width="100%" 
  height="450"
   style={{border:0}}
   allowFullScreen="" 
  loading="lazy"
     referrerpolicy="no-referrer-when-downgrade">

     </iframe>
     <h3 className={styles.heading}>Contact Form</h3>
     <form   action="https://formspree.io/f/xpzggeoa" method="POST" className={styles.contact_form}>
        <div className={styles.contact_inputs}>
        <input  type="text" placeholder="Username" name="Username" required autoComplete="off" />
        <input  type="email" placeholder="Email" name="Email" required autoComplete="off" />
        <textarea  placeholder="Place your massege here" name="massege" id="" cols="30" rows="10"></textarea>
        <input type='submit' value='SEND' />
        </div>
     </form>
 </div>
 

 </>
  
};

export default Contact;

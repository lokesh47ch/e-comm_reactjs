import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

import styles from '../stylesModules/services.module.css';

const Services = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.service}>
          <TbTruckDelivery className={styles.icon} /> 
          <h5>Free and Fast Delivery</h5>
            
        </div>
        <div className={`  ${styles.mid_box}` }>
          <div className={` ${styles.mid_child}` }>
          <MdSecurity className={styles.icon} />
          <h5>Non-contact Delivery</h5>
          </div>

          <div className={`${styles.mid_child}` }>
          <GiReceiveMoney className={styles.icon} />
          <h5>Money back Guaranteed</h5>
          </div>
        </div>
        <div className={styles.service}>
        <RiSecurePaymentLine className={styles.icon} />
        <h5>Super Secure Payment</h5>

        </div>
    </div>
    </>
  )
}

export default Services
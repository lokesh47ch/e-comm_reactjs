import React from 'react';
import Styles from '../stylesModules/hero.module.css';
import { NavLink } from 'react-router-dom';


const HeroSection = () => {
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.left}>
                    <p>WELCOME TO</p>
                    <h1>BRAND STORE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
                         iure dignissimos dolorum, veniam hic perferendis fuga debitis quas
                          amet, dolore in pariatur tempore blanditiis. Molestias expedita 
                         </p>
                          <NavLink>
                          <button className={Styles.shop_btn}>Shop Now</button>
                          </NavLink>
                         



                </div>
                <div className={Styles.right}>
                    <div className={Styles.img}>             
                         <img src="images/hero.jpg" alt="heropic" />
                         </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection
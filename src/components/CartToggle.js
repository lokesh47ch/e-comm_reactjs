import React from 'react';
import styles from '../stylesModules/addToCart.module.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const CartToggle = ({amount, setIncrease, setDecrease}) => {
  return (  <div className={styles.toggle_section}>
    <button onClick={() =>setIncrease()}> <FaPlus  /></button>
     <p>{amount}</p>
    <button onClick={() =>setDecrease()}> <FaMinus /></button>
  </div>
        
  )
}

export default CartToggle
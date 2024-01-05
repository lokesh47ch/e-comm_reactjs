import React from "react";
import styles from '../stylesModules/cartItem.module.css';
import FormatPrice from "../Helpers/FormatPrice";
import CartToggle from "./CartToggle";
import { IoBagRemove } from "react-icons/io5";
import { useCartContext } from "../context/cart_context";







const CartItem = ({id, name, image, color, price, amount }) => {

    const {removeItem,  setIncrement, setDecrement } = useCartContext();

   
  
  return (
    <div className={styles.container}>
     <div className={`${styles.item_info} ${styles.innerBoxes}` }>
        <figure >
            <img src={image} alt={name} />
        </figure>
        <div style={{ marginLeft: '-2rem'}}    >
            <p>{name}</p>
           <span ><p className={styles.color} style={{backgroundColor: color}} ></p></span>
        </div>
        </div>
        <div className={styles.innerBoxes}>
            <FormatPrice price={price}></FormatPrice>
            </div>
       
        <div className={styles.innerBoxes} >
            <CartToggle  amount={amount} setIncrease={ () => setIncrement(id)} setDecrease={() => setDecrement(id)}></CartToggle>
        </div>

        <div className={styles.innerBoxes}>
        <FormatPrice price={price * amount}></FormatPrice>
        </div>


        <button  onClick={() =>removeItem(id)}  className={`${styles.remove_btn} ${styles.innerBoxes}`}><IoBagRemove /></button>

       

    
        
    </div>
  
  )
}

export default CartItem
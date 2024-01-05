import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import styles from '../stylesModules/addToCart.module.css'
import CartToggle from './CartToggle';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { useCartContext } from '../context/cart_context';


const AddToCart = ({ product }) => {
    const{addToCart} = useCartContext();
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1)

    const setIncrease = () => {
     amount < stock ? setAmount(amount + 1) : setAmount(stock);
    
    }
    const setDecrease = () => {

        amount > 1 ? setAmount(amount - 1) : setAmount(1);
        console.log(amount);
        
    }



    return (<div className={styles.addCart_container}>
        <div className={styles.colors}>
            Color:
            {
                colors.map((clr, i) => {
                    return (
                        <button

                            key={i}
                            className={color === clr ? `${styles.btn} ${styles.activeBtn}` : `${styles.btn}`}
                            style={{ backgroundColor: clr }}
                            onClick={() => setColor(clr)}>{color === clr ? <FaCheck className={styles.check} /> : null}
                        </button>
                    )
                })
            }
        </div>
             <CartToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />

             <NavLink to="/cart" onClick= {() =>addToCart(id, color, amount, product)}>
        <Button  text = {"Add To Cart"}>Add To Cart</Button>
      </NavLink>
    </div>
    )
}

export default AddToCart
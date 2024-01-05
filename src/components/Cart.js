
import { useCartContext } from "../context/cart_context";
import styles from '../stylesModules/cart.module.css'
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {cart, clearCart, totalAmount} = useCartContext();
  // console.log(cart)

  if(!cart.length) {
    return <h2 >No Cart Item</h2>
  }
  return <div className={styles.container}>

  <div className={styles.cart_heading}>
    <p className={styles.headings}>Item</p>
    <p className={styles.headings}>Price</p>
    <p className={styles.headings}>Quantity</p>
    <p className={styles.headings}>Subtotal</p>
    <p className={styles.headings}>Remove</p>
  </div>
  <hr />

  <div className={styles.cart_item}>

  {
    cart.map((currItem) => {
      return <CartItem key={currItem.id} {...currItem}></CartItem>
    })
  }

  </div>
  <hr />
  <div className={styles.bottom_buttons}>
    <NavLink to='/'>
      <button className={styles.cont_shop_btn}>Continue Shopping</button>
    </NavLink>
    <button onClick={clearCart} className={styles.clearcart_btn}>Clear all</button>
  </div>

  <div className={styles.summary} >
    <div  ><span>Subtotal</span>  <span>{totalAmount}</span></div>
  </div>
  </div>;
};







export default Cart;

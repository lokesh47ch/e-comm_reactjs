import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../stylesModules/nav.module.css'
import { LuShoppingCart } from "react-icons/lu";
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from "@auth0/auth0-react";


const Nav = ({btnState, toggleState}) => {

  const {totalItem} = useCartContext();

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleClick = () =>
  {
    return toggleState();
  }


  return <>
  <div className={btnState ? styles.navbar: styles.ShowNavbar}> 
  <NavLink onClick={handleClick} activeClassName= {styles.activeLink} className={styles.links} to="/">HOME</NavLink>
  <NavLink onClick={handleClick} activeClassName= {styles.activeLink} className={styles.links} to="/about">ABOUT</NavLink>
  <NavLink onClick={handleClick} activeClassName= {styles.activeLink} className={styles.links} to={"/products"}>PRODUCT</NavLink>
  <NavLink onClick={handleClick} activeClassName= {styles.activeLink} className={styles.links} to={"/contact"}>CONTACT</NavLink>
  <NavLink onClick={handleClick} activeClassName= {styles.activeLink} className={styles.links} to={"/cart"}>
    <div style={{position: 'relative'}}><LuShoppingCart /><p className={styles.item_number} >{totalItem}</p> </div></NavLink>

  {isAuthenticated ? <button onClick={loginWithRedirect} className={styles.loginBtn}>Login</button>
 : <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={styles.loginBtn}>
      Log Out
    </button>}
  </div>
 </>
    
  
}

export default Nav;
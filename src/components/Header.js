import React, { useState } from 'react'
// import styled from 'styled-components';
import { NavLink  } from 'react-router-dom';
import Nav from './Nav';
import styles from '../stylesModules/header.module.css';
import { TiThMenu } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [btnState, SetbtnState]= useState(false)
  return  <>
  <div className={styles.header}> <NavLink to="/">
    
    <div className={styles.logo}>
      <img src="./images/logo.png" alt="logo" />
      </div>
    
   </NavLink>
  
< Nav toggleState= {()=>SetbtnState(true)} btnState = {btnState}/>
  
   </div>
   <div>
   <TiThMenu onClick={()=> SetbtnState(!btnState)} className={`${ btnState ?  styles.mobileview_btn: styles.hideBtn} ${styles.mobileview}`} /> 
  <MdOutlineClose onClick={()=> SetbtnState(!btnState)} className={`${ btnState? styles.hideBtn:styles.mobileview_btn} ${styles.mobileview}`} />
   </div>
   </>


 

  
};

// const MainHeader = styled.header`
// height: 10rem;
// background-color: ${({theme}) => theme.colors.bg};
// display: flex;
// justify-content: space-between;
// align-items: center;
// position: relative;

// .logo{
//     height: 5rem;
// }
// `;

export default Header
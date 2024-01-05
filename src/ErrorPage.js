import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './stylesModules/errorPage.module.css'
import Button from './components/Button'


const ErrorPage = () => {
  return (
    <div className={styles.container}>
        
            <h2>404</h2>
            <h2>UH OH! You'are lost</h2>
            <p>The page you are looking for does not exists. Click  to return to the homepage</p>
      <NavLink to="/"><Button text= "GO TO HOME" /></NavLink>
         
      
    </div>
  )
}

export default ErrorPage
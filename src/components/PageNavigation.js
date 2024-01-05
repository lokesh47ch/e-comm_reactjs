import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../stylesModules/pageNavigation.module.css'

const PageNavigation = ({title}) => {
  return (<>
  <div className={styles.container}>
    <NavLink>Home</NavLink>/{title}

    </div>

    </>
  )
}

export default PageNavigation
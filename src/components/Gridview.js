import React from 'react'
import Product from './Product'
import styles from '../stylesModules/gridview.module.css';

const Gridview = ({productArray}) => {
    // console.log(`gridview ${productArray}`);
   

    
    
  return ( <div className={styles.container}> 
   
        {

          
         productArray.map((product) => { return <div className={styles.inner}>
          <Product key= {product.id} {...product} /> </div> })
        }
        
        </div>
  )
}

export default Gridview
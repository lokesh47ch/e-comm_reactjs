import React  from 'react'
import { useProductContext } from './context/ProductContext'
import styles from './stylesModules/featureproduct.module.css'
import Product from './components/Product';

const FeatureProducts = () => {
    
      
        const{isLoading, featuredProducts} = useProductContext();
     

    
    
  

 
       if(isLoading) {
  return <div>...Loading</div>
       }

       return <>
       <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.intro_data}>Check Now!</div>
           <div className={styles.common_heading}>Our Feature Services</div>
           <div className={styles.comp_box}>
            {
              featuredProducts.map(product => <Product key={product.id} {...product}/>)
            }
           </div>
            </div>
       </div>
       </>
  
}

export default FeatureProducts;
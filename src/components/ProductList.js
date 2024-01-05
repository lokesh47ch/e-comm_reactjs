import React from 'react';
import Product from './Product';
import styles from '../stylesModules/productList.module.css';
import { useFilterContext } from '../context/Filter_context';
import Gridview from './Gridview';
import Listview from './Listview';

const ProductList = () => {
    const { gridview, filter_products} = useFilterContext();
    

    


    if(gridview) {
      return   <Gridview  productArray ={filter_products} />
         
      
      
    }

if(!gridview){
    return ( <Listview productArray={filter_products}  />)
  }
    

   



    // return (<>
    // <div>productList</div></>
    // )



  // return (
  // <>  
  // <div className={styles.container}>

  // {

  //  filter_products.map((product) => {
       
  //   return <div className={styles.productss}>
  //     <Product  key={product.id} {...product} />
  //   </div>
      
  //   })
  // }
  // </div>
  
  // </>

    
  // )
}

export default ProductList
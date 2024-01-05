import React from "react";
import FilterSection from "./components/FilterSection";
import styles from './stylesModules/products.module.css';
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/Filter_context";



const Products = () => {

   const {filter_products} = useFilterContext();

  
  return <div className={styles.container} >
    <div className={styles.left_box}>
    <FilterSection />
   </div >

   <section className={styles.right_box}>
    <div className={styles.sort}>
      <Sort />
    </div>
    <div className={styles.productlist}>
      <ProductList  />
    </div>
   </section>
 

  </div>
  // <Wrapper></Wrapper>;
};

// const Wrapper = styled.section`
//   .grid-filter-column {
//     grid-template-columns: 0.2fr 1fr;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default Products;

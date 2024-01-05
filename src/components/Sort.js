import React, { useEffect } from 'react';
import styles from '../stylesModules/sort.module.css';
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterContext } from '../context/Filter_context';


const Sort = () => {
   const {gridview, setGridView, setListView, sortProduct, filter_products} = useFilterContext();
 
   

 

  return (<div className={styles.container}>
      <div >
        <button className={ gridview ? `${styles.sort_btn} ${styles.active}` : `${styles.sort_btn}` }onClick = {setGridView} ><BsFillGridFill /></button>
        <button className={ !gridview ? `${styles.sort_btn} ${styles.active}` : `${styles.sort_btn}` } onClick = {setListView} ><BsList /></button>
      </div>
   
      <div className={styles.product_data}>
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
<div>
<form action="#">
  <label htmlFor="sort"></label>
<select   className={styles.sort_selection_style} onClick={sortProduct} name="sort" id="sort">
<option value="highest">Highest</option>
<option value="lowest">Lowest</option>
<option value="a-z">A-Z</option>
<option value="z-a">Z-A</option>
</select>
</form>
</div>
     

    </div>
    
  )
}

export default Sort
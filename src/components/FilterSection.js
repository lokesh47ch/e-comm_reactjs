import React, { useEffect } from 'react'
import styles from '../stylesModules/fiterSection.module.css';
import { useFilterContext } from '../context/Filter_context';
import FormatPrice from '../Helpers/FormatPrice';

const FilterSection = () => {

  const {updateFilterValue,
      category,
      allProducts,
      text,
      colors,
      filters:{price,minPrice,maxPrice},
      clearFilters
      } = useFilterContext();

  const getUnique  = (data, property) => {

    let propertyName = data.map((element) => {
      return element[property]
    });

    if(property === 'colors'){
      propertyName = ['All', ...new Set([].concat(...propertyName))]
      // propertyName = propertyName.flat();
    }
    else{
      propertyName = ["All", ...new Set(propertyName)]
      }
    return propertyName
}



  const catorerywiseData = getUnique(allProducts, "category");

  //comany wise data 

  const companyData = getUnique(allProducts, "company");
  const colorsData = getUnique(allProducts, "colors");

  //  console.log(colorsData)


  return ( <div  className={styles.container}>
   <div className={styles.filter_search}>
    <form action="" onSubmit={(e) => e.preventDefault()}>
<input placeholder='Search'
 type="text"
  name="text"
   value={text} 
onChange={updateFilterValue} />
 </form >
 </div>


   
    {catorerywiseData.map((elem, i) => {
      return <button key={i} 
      value={elem}
       type='button'
        name='category'
        onClick={updateFilterValue}
         >{elem}</button>
    })}

 
   

   
  <div className={styles.filter_company}>
    <h3>Company</h3>
    <form action="#">

    <select
     className={styles.filter_company_select} name="company"  onClick={updateFilterValue}>

      {
        companyData.map((elem, i) => {
           return   <option 
              key={i}
           
               name='company' value={elem}>{elem.toUpperCase()}</option>
        })
      }

      
    </select>

    </form>
    </div>

    {/* colors filter */}

    <div className={`${styles.filter_colors} ${styles.colors}`}>
        <h3>Colors</h3>

        <div className={styles.filter_color_style}>
          {colorsData.map((curColor, index) => {
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="colors"
                style={{ backgroundColor: curColor }}
                className={styles.btnStyle}
                onClick={updateFilterValue}>
                {colors === curColor ? "" : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.filter_price}>
        <h3>Price</h3>
        <p>
        
          <FormatPrice price={price}/>
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
          step='500000'
        />
      </div>

      <div className={styles.filter_clear}>
        <button className={styles.btn} onClick={clearFilters}>Clear Filters</button>
      </div>

      


   
   </div>
  
   
  )
}

export default FilterSection

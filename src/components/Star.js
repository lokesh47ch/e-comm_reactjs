import React from 'react'
import { FaRegStar, FaRegStarHalf, FaStar} from "react-icons/fa";
import styles from '../stylesModules/stars.module.css'


const Star = ({stars, reviews}) => {

 const ratingStar =    Array.from({length:5}, (elem, index) => {
        let number = index +0.5;
    return (<span key={index}> 
        {
            stars>= index + 1 ?( <FaStar className={styles.icon} />) : 
            stars >= number ? ( <FaRegStarHalf className={styles.icon} />)
            : ( <FaRegStar className={styles.icon} />)
        } </span>
       
    )

    })
  return ( <>
    <div className={styles.icon_style}> {ratingStar}</div>
    <p>{reviews} customer reviews</p>
    </>
   
  )
}

export default Star
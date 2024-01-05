import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../stylesModules/product.module.css'
import FormatPrice from '../Helpers/FormatPrice'

const Product = ({id, name, image, price, category}) => {
    // console.log(name)
  return (
    <NavLink to={`/singleProduct/${id}`}>
        <div className={styles.card}> 
            <figure>
                <img src={image} alt={name} />
                <figcaption className={styles.caption}>
                    {category}
                </figcaption>

            </figure>
            <div className={styles.card_data}>
                <div className={styles.card_data_flex}>
                    <h3>{name}</h3>
                    <p className={styles.card_data_price}>< FormatPrice price = {price} /></p>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product
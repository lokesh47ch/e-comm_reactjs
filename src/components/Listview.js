import React from 'react'
import styles from '../stylesModules/listview.module.css'
import FormatPrice from '../Helpers/FormatPrice'
import { NavLink } from 'react-router-dom';
import Button from './Button'

const Listview = ({ productArray }) => {
    // const { id, name, description, price, image } = productArray;
    return (<div className={styles.container}>
        {productArray.map((product) => { 
            return <>
            <div className={styles.box}>
                <NavLink to={`/singleProduct/${product.id}`}>
            <figure  key={product.id}>
                <img src={product.image} alt={product.name} />
            </figure>
            </NavLink>

            <div className={styles.card_data} >
                <h3>{product.name}</h3>
                <p className={styles.card_data_price}>< FormatPrice price = {product.price} /></p>

                <p>{product.description.slice(0,90)}</p>
                <NavLink to={`/singleProduct/${product.id}`}><Button text={'Read more'} /></NavLink>
            </div>
            </div>
            </>

        })
        }


    </div>

    )
}

export default Listview
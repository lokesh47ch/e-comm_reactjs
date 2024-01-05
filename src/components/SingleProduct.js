import React, { useEffect } from 'react'
import { useProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';
import PageNavigation from './PageNavigation';
import ImageSlides from './ImageSlides';
import styles from '../stylesModules/singleProduct.module.css'
import FormatPrice from '../Helpers/FormatPrice';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { TbReplace } from "react-icons/tb";
import Star from './Star';
import AddToCart from './AddToCart';





const SingleProduct = () => {

    const {isSingleLoading, singleProduct,getSingleProduct} =useProductContext();
    const API = "https://api.pujakaitem.com/api/products";
    const {id} = useParams();
    const endpoint = `${API}?id=${id}`
    // alert(endpoint)


    const {
        id: key, 
        name,
        company,
        price,
        description,
        image,
        category,
        stock,
        stars,
        reviews,
    } = singleProduct;

    useEffect(()=> {
        getSingleProduct(endpoint);
        // alert(name)

    },[])


    if(isSingleLoading){
      return <h3>loading</h3>
    }


  return <> 

<PageNavigation title= {name}  />

    <div className={styles.container}>
    <div className={styles.product_images}>
   <ImageSlides img = {image}  />
  </div>

   <div  className={styles.product_detail}>
    <h2>{name}</h2>
    <Star stars = {stars} reviews = {reviews} />
   
    <div className={styles.product_price}>
      MRP: 
      <del><FormatPrice price = {price+200000}  />
      </del >
      <p className={styles.product_price}>
        Deal of the day: <FormatPrice price = {price}  />
      </p>
      <p>{description}</p>
      <div className={styles.product_detail_warranty}>
        <div className={styles.product_warranty_details}>
          <TbTruckDelivery className={styles.icon} />
          <p>Free Delivery</p>
        </div>

        <div className={styles.product_warranty_details}>
          <MdSecurity className={styles.icon} />
          <p>Free Delivery</p>
        </div>

        <div className={styles.product_warranty_details}>
          <TbReplace className={styles.icon} />
          <p>10 Day Replacement</p>
        </div>

        <div className={styles.product_warranty_details}>
          <TbTruckDelivery className={styles.icon} />
          <p> secura assured</p>
        </div>
        
      </div>
      <div className={styles.product_data_info}>
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product = {singleProduct} />}

    </div>
   </div>
   </div>

    </> 
  
}

export default SingleProduct;
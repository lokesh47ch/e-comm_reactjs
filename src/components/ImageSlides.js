import React, {useState} from 'react'
import styles from '../stylesModules/imgSlide.module.css'

const ImageSlides = ({img = [{url: " "}]}) => {

    const [previewImg , setPreviewImg] = useState(img[0])

    
  return (
    <div className={styles.container}>
     <div className={styles.image_rack}>
       {
        img.map(( imageElement, index) => {
            return (
               <div>
                <figure>
                <img   key={index} onClick={() =>setPreviewImg(img[index])} src={imageElement.url} alt={imageElement.name} />
                </figure>
                </div>
            )
        })
       }
     </div>
     <div className={styles.img_preview}>
          <img src={previewImg.url} alt='preview_image' />
     </div>


    </div>
  )
}

export default ImageSlides;
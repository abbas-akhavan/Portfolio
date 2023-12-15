import React from 'react'
import styles from './ProductDetails.module.scss'
import IncredibleOfferLabel from './IncredibleOfferLabel';

const ProductDetails = ({product}) => {
    let priceText = "";
    if(product.priceWithDiscount > 0){
        let off =100 - ((product.priceWithDiscount / product.price) * 100);
        priceText = <div className={`${styles.price} , ${styles.withDiscount}`}>
            <span>{`${product.priceWithDiscount} تومان`}</span>
            <span>{`${off.toFixed() }% تخفیف`}</span>
            <span>{`${product.price} تومان`}</span>
        </div>
    }
    else{
        priceText = <div className={`${styles.price}`}>
            <span>{`${product.price} تومان`}</span>   
        </div>
    }
  return (
    <div className={`${styles.productDetails}`} >
        {product.incredibleOffers === true ? <IncredibleOfferLabel/> : ''}
        <div className={`${styles.productImg}`}>
            <img src={product.img} alt="" />
        </div>
        <div className={`${styles.info}`}>
            {priceText}
            <p>{product.description}</p>
            <div className={`${styles.moreDetail}`}>
                <span>{` تعداد موجود در انبار : ${product.stock}`}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
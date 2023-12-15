import React from 'react'
import styles from './ProductItem.module.scss'

const ProductItem = ({product , showActiveProduct , activeProduct}) => {
    const showMe = () =>{
        showActiveProduct(product.id)
    }
  return (
    <div className={`${styles.productItem} , ${activeProduct.id === product.id ? styles.active : ''}`} onClick={showMe}>
        <div>
            <img src={product.img} alt="" />
        </div>
        <span>{product.name}</span>
    </div>
  )
}

export default ProductItem
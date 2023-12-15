import React from 'react'
import styles from './ItemsContainer.module.scss'
const ItemsContainer = (props) => {
  return (
    <div className={`${styles.itemContainer}`}>
        {props.children}
    </div>
  )
}

export default ItemsContainer
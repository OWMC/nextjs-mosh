import React from 'react';
import AddToCart from '../AddToCart';
import styles from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h2 className='mb-2 font-bold'>Product card</h2>
      <AddToCart />
    </div>
  )
}

export default ProductCard;
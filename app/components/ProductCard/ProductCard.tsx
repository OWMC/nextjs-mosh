import React from 'react';
import AddToCart from '../AddToCart';
import styles from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h2 className='mb-2 font-bold'>Product card</h2>
      <p className='mb-2'>The card is server rendered, but the button is clent rendered.</p>
      <AddToCart />
    </div>
  )
}

export default ProductCard;
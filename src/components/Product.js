import React from 'react';
import { formatUSD, titleCase, capitalize } from '../utils';

import styles from './Product.css';

export default function Product({ product, onAddToCart }) {
  return (
    <article
      className={styles.product}
      data-test-name="product"
    >
      <h2 className={styles.name}>
        {titleCase(product.type)}
      </h2>
      <p className={styles.description}>
        {capitalize(product.description)}
      </p>
      <p className={styles.price}>
        {formatUSD(product.price)}
      </p>
      <button
        className={styles.button}
        onClick={() => onAddToCart(product)}
        data-test-name="add-to-cart"
      >
        Add to Cart
      </button>
    </article>
  )
}

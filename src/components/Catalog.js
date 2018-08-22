import React from 'react';
import Product from './Product';

import styles from './Catalog.css';

export default function Catalog({ inventory = [], onAddProductToCart }) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {inventory.map(product =>
          <li key={product.id}>
            <Product product={product} onAddToCart={onAddProductToCart} />
          </li>
        )}
      </ul>
    </div>
  );
}

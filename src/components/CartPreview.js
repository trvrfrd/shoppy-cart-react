import React from 'react';

import styles from './CartPreview.css';

export default function CartPreview({ items = [], onView }) {
  const totalCount = items.reduce((total, item) => total + item.quantity, 0);
  const word = totalCount === 1 ? 'item' : 'items';

  return (
    <div
      className={styles.wrapper}
      data-test-name="cart-preview"
    >
      <button
        className={styles.button}
        onClick={onView}
        data-test-name="view-cart"
      >
        View Cart
      </button>
      <p>({totalCount} {word})</p>
    </div>
  )
}

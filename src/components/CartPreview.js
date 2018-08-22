import React from 'react';

import styles from './CartPreview.css';

export default function CartPreview({ items = [], onView }) {
  const totalCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className={styles.wrapper}>
      <button onClick={onView}>View Cart</button>
      <p>({totalCount} items)</p>
    </div>
  )
}

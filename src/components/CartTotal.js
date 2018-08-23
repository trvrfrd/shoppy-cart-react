import React from 'react';
import { formatUSD } from '../utils';

import styles from './CartTotal.css';

export default function CartTotal({ items = [] }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <p className={styles.total}>
      Total: {formatUSD(total)}
    </p>
  );
}

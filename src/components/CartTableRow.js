import React from 'react';
import { formatUSD, titleCase } from '../utils';

import styles from './CartTable.css';

export default function CartTableRow({
  item: { type, price, quantity },
  onRemoveItem
}) {
  return (
    <tr>
      <td className={styles.cell}>{titleCase(type)}</td>
      <td className={styles.cell}>{formatUSD(price)}</td>
      <td className={styles.cell}>{quantity}</td>
      <td className={styles.cell}>
        <button
          className={styles.button}
          onClick={onRemoveItem}
          data-test-name='remove-item'
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

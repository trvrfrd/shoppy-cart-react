import React from 'react';
import CartTableRow from './CartTableRow';

import styles from './CartTable.css';

export default function CartTable({ items = [], onRemoveItem }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.call}>Item</th>
          <th className={styles.call}>Price</th>
          <th className={styles.call}>Qty</th>
          <th className={styles.call}></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) =>
          <CartTableRow
            key={item.id}
            item={item}
            onRemoveItem={() => onRemoveItem(idx)}
          />)
        }
      </tbody>
    </table>
  );
}

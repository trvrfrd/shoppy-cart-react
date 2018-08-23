import React from 'react';
import CartTableRow from './CartTableRow';

import styles from './CartTable.css';

export default function CartTable({ items = [], onRemoveItem }) {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.cell}>Item</th>
          <th className={styles.cell}>Price</th>
          <th className={styles.cell}>Qty</th>
          <th className={styles.cell}></th>
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

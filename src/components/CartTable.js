import React from 'react';
import CartTableRow from './CartTableRow';

export default function CartTable({ items = [], onRemoveItem }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) =>
          <CartTableRow
            key={item.type}
            item={item}
            onRemoveItem={() => onRemoveItem(idx)}
          />)
        }
      </tbody>
    </table>
  );
}

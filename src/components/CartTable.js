import React from 'react';
import CartTableRow from './CartTableRow';

export default function CartTable({ items = [] }) {
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
        {items.map(item => <CartTableRow key={item.type} item={item} />)}
      </tbody>
    </table>
  );
}

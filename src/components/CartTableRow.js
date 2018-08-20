import React from 'react';
import { formatUSD } from '../utils';

export default function CartTableRow({
  item: { type, price, quantity },
  onRemoveItem
}) {
  return (
    <tr>
      <td>{type}</td>
      <td>{formatUSD(price)}</td>
      <td>{quantity}</td>
      <td>
        <button onClick={onRemoveItem}>Remove</button>
      </td>
    </tr>
  );
}

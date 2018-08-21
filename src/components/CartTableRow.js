import React from 'react';
import { formatUSD, titleCase } from '../utils';

export default function CartTableRow({
  item: { type, price, quantity },
  onRemoveItem
}) {
  return (
    <tr>
      <td>{titleCase(type)}</td>
      <td>{formatUSD(price)}</td>
      <td>{quantity}</td>
      <td>
        <button onClick={onRemoveItem} data-test-name='remove-item'>Remove</button>
      </td>
    </tr>
  );
}

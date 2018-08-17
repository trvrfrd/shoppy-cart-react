import React from 'react';

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

function formatUSD(float) {
  return `$${float.toFixed(2)}`;
}

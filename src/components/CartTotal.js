import React from 'react';
import { formatUSD } from '../utils';

export default function CartTotal({ items = [] }) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <p>
      Total: {formatUSD(total)}
    </p>
  );
}

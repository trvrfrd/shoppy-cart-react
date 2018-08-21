import React from 'react';

export default function CartPreview({ items = [], onView }) {
  const totalCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <button onClick={onView}>View Cart</button>
      <p>({totalCount} items)</p>
    </div>
  )
}

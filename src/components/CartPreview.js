import React from 'react';

export default function CartPreview({ items = [], onView }) {
  return (
    <div>
      <button onClick={onView}>View Cart</button>
      <p>({items.length} items)</p>
    </div>
  )
}

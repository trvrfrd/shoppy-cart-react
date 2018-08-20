import React from 'react';

export default function CartControls({ onClear, onClose }) {
  return (
    <div>
      <button onClick={onClear}>Clear</button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

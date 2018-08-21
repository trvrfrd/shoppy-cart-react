import React, { Fragment } from 'react';
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import CartControls from './CartControls';

export default function Cart({ items = [], onClear, onClose, onRemoveItem }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {items.length ?
        <Fragment>
          <CartTable
            items={items}
            onRemoveItem={onRemoveItem}
          />
          <CartTotal items={items} />
        </Fragment>
        : <p>Your cart is empty.</p>
      }
      <CartControls
        onClear={onClear}
        onClose={onClose}
      />
    </div>
  )
}

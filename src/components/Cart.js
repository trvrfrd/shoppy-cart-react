import React, { Fragment } from 'react';
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import CartControls from './CartControls';

import styles from './Cart.css';

export default function Cart({ items = [], onClear, onClose, onRemoveItem }) {
  return (
    <div className={styles.cart}>
      <h1 className={styles.headline}>Your Cart</h1>
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

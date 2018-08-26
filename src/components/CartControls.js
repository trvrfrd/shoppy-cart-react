import React from 'react';

import styles from './CartControls.css';

export default function CartControls({ onClear, onClose }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={onClear}
        data-test-name="clear-cart"
      >
        Clear
      </button>
      <button
        className={styles.button}
        onClick={onClose}
        data-test-name="close-cart"
      >
        Close
      </button>
    </div>
  )
}

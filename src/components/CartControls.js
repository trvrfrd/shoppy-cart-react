import React from 'react';

import styles from './CartControls.css';

export default function CartControls({ onClear, onClose }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClear}>Clear</button>
      <button className={styles.button} onClick={onClose}>Close</button>
    </div>
  )
}

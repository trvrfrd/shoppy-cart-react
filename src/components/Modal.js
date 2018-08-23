import React from 'react';

import styles from './Modal.css'

export default function Modal({ show, children }) {
  return (
    show ?
      <div className={styles.modal}>
        {children}
      </div>
      : null
  );
}

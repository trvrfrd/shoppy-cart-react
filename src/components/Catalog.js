import React from 'react';
import Product from './Product';

export default function Catalog({ inventory, onAddProductToCart }) {
  return (
    <ul>
      {inventory.map(product =>
        <li key={product.id}>
          <Product product={product} onAddToCart={onAddProductToCart} />
        </li>
      )}
    </ul>
  );
}

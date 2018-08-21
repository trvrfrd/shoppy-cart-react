import React from 'react';
import { formatUSD, titleCase, capitalize } from '../utils';

export default function Product({ product, onAddToCart }) {
  return (
    <article>
      <h2>{titleCase(product.type)}</h2>
      <p>{capitalize(product.description)}</p>
      <p>{formatUSD(product.price)}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </article>
  )
}

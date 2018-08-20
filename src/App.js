import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Cart from './components/Cart';

class App extends Component {
  state = {
    cart: [
      {
        type: 'a',
        quantity: 1,
        price: 1.00
      },
      {
        type: 'b',
        quantity: 2,
        price: 1.50
      },
      {
        type: 'c',
        quantity: 3,
        price: 2.00
      }
    ],
    inventory: []
  }

  addItemToCart = newItem => {
    this.setState(({ cart }) => {
      const existingIdx = cart.findIndex(item => item.type === newItem.type);
      if (existingIdx !== -1) {
        cart = [...cart];
        cart[existingIdx].quantity += 1;
      } else {
        newItem = Object.assign({ quantity: 1 }, newItem);
        cart.push(newItem);
      }

      return { cart };
    });
  }

  removeItemFromCartAt = idx => {
    this.setState(({ cart }) => {
      cart = [...cart];
      cart.splice(idx, 1);
      return { cart };
    });
  }

  clearCart = () => this.setState({ items: [] });

  addRandomItem = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const randomChar = letters[Math.floor(Math.random() * 26)];
    const item = {
      type: randomChar,
      price: Number((Math.random() * 10).toFixed(2))
    }
    this.addItemToCart(item);
  }

  render() {
    return (
      <div>
        <Cart
          items={this.state.cart}
          onClear={this.clearCart}
          onRemoveItem={this.removeItemFromCartAt}
        />
        <button onClick={this.addRandomItem}>add random</button>
      </div>
    )
  }
}

export default hot(module)(App);

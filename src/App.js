import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import CartTable from './components/CartTable';
import CartTotal from './components/CartTotal';
import CartControls from './components/CartControls';

class App extends Component {
  state = {
    items: [
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
    ]
  }

  removeItemAt = (idx) => {
    let { items } = this.state;
    items = [
      ...items.slice(0, idx),
      ...items.slice(idx + 1)
    ]
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <CartTable
          items={this.state.items}
          onRemoveItem={this.removeItemAt}
        />
        <CartTotal items={this.state.items} />
        <CartControls
          onClear={() => this.setState({ items: [] })}
          onClose={() => console.log('close')}
        />
      </div>
    )
  }
}

export default hot(module)(App);

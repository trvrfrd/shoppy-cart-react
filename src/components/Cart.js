import React, { Component } from 'react';
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import CartControls from './CartControls';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items ? [...props.items] : []
    };
  }

  addItem = newItem => {
    this.setState(({ items }) => {
      const existingIdx = items.findIndex(item => item.type === newItem.type);
      if (existingIdx !== -1) {
        items = [...items];
        items[existingIdx].quantity += 1;
      } else {
        newItem = Object.assign({ quantity: 1 }, newItem);
        items.push(newItem);
      }

      return { items };
    });
  }

  removeItemAt = idx => {
    this.setState(({ items }) => {
      items = [...items];
      items.splice(idx, 1);
      return { items };
    });
  }

  clearItems = () => this.setState({ items: [] });

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Your Cart</h1>
        <CartTable items={items} />
        <CartTotal items={items} />
        <CartControls
          onClear={this.clearItems}
          onClose={this.props.onClose}
        />
      </div>
    )
  }
}

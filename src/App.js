import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Catalog from './components/Catalog';
import Cart from './components/Cart';
import CartPreview from './components/CartPreview';
import Modal from './components/Modal';

import './App.css';

class App extends Component {
  state = {
    cart: [],
    inventory: [],
    showCart: false
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      // escape! close modal!
      if (e.keyCode === 27) this.setState({ showCart: false });
    });

    import('./inventory.json')
      .then(inventory => this.setState({ inventory: inventory.cakes }));
  }

  addItemToCart = newItem => {
    this.setState(({ cart }) => {
      const existingIdx = cart.findIndex(item => item.type === newItem.type);
      if (existingIdx !== -1) {
        cart = [...cart];
        cart[existingIdx].quantity += 1;
      } else {
        newItem = Object.assign({}, newItem, { quantity: 1 });
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

  clearCart = () => this.setState({ cart: [] });

  showCart = () => this.setState({ showCart: true });
  hideCart = () => this.setState({ showCart: false });

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
      <Fragment>
        <header>
          <h1>Let Them Eat Cake</h1>
        </header>
        <main>
          <Catalog
            className="catalog"
            inventory={this.state.inventory}
            onAddProductToCart={this.addItemToCart}
          />
          <aside>
            <CartPreview
              items={this.state.cart}
              onView={this.showCart}
            />
          </aside>
        </main>
        <Modal show={this.state.showCart}>
          <Cart
            items={this.state.cart}
            onClear={() => this.clearCart() || this.hideCart()}
            onRemoveItem={this.removeItemFromCartAt}
            onClose={this.hideCart}
          />
        </Modal>
      </Fragment>
    )
  }
}

export default hot(module)(App);

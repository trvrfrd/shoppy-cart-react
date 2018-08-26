import React from 'react';
import { mount} from 'enzyme';
import TestRenderer from 'react-test-renderer';
import App from './App';

import { formatUSD, capitalize, titleCase } from './utils';

import { findByTestName } from '../test/helpers';

import { fakeItems } from '../test/mocks';
const fakeInventory = {
  // App expects array under the key cakes: which is probably dumb
  cakes: fakeItems
}

const fakeLoader = () => Promise.resolve(fakeInventory);


it('matches snapshot', async () => {
  let wrapper = await TestRenderer.create(<App loadInventory={fakeLoader} />)
  expect(wrapper).toMatchSnapshot();
});

describe('scenarios', () => {
  let wrapper;
  // I am throwing in a million async/awaits because I don't know what I"m doing
  beforeEach(async () => {
    wrapper = await mount(<App loadInventory={fakeLoader} />);
    await wrapper.update();
  });
  afterEach(async () => await wrapper.unmount());

  test('Catalog shows inventory of Products', async () => {
    const products = findByTestName(wrapper, 'product');
    expect(products.length).toBe(fakeItems.length);

    const product = products.at(0);
    expect(product.text()).toMatch(titleCase(fakeItems[0].type));
    expect(product.text()).toMatch(capitalize(fakeItems[0].description));
    expect(product.text()).toMatch(formatUSD(fakeItems[0].price));
  });

  test('Cart can be viewed and closed and starts out empty', async () => {
    const cartPreview = findByTestName(wrapper, 'cart-preview');
    expect(cartPreview.text()).toMatch('0 items');

    const viewCart = findByTestName(wrapper, 'view-cart');
    viewCart.simulate('click');

    const cart = findByTestName(wrapper, 'cart');
    expect(cart.length).toBe(1);
    expect(cart.text()).toMatch('Your cart is empty.');

    const closeCart = findByTestName(cart, 'close-cart');
    closeCart.simulate('click');
    expect(findByTestName(wrapper, 'cart').length).toBe(0);
  });

  // this is doing too much but oh well
  test('add various combinations of items to cart', async () => {
    const addToCartButtons = findByTestName(wrapper, 'add-to-cart');
    expect(addToCartButtons.length).toBe(fakeItems.length);
    addToCartButtons.at(0).simulate('click');

    const cartPreview = findByTestName(wrapper, 'cart-preview');
    expect(cartPreview.text()).toMatch('1 items');

    const viewCart = findByTestName(wrapper, 'view-cart');
    viewCart.simulate('click');

    const cart = findByTestName(wrapper, 'cart');
    expect(cart.text()).toMatch(titleCase(fakeItems[0].type));

    // this kind of covers both quantity and price table columns so fuck it
    let expectedTotal = fakeItems[0].price;
    expect(cart.text()).toMatch(`Total: ${formatUSD(expectedTotal)}`);

    addToCartButtons.at(0).simulate('click');

    expect(cartPreview.text()).toMatch('2 items');
    expectedTotal = fakeItems[0].price * 2;
    expect(cart.text()).toMatch(`Total: ${formatUSD(expectedTotal)}`);

    addToCartButtons.at(1).simulate('click');

    expect(cartPreview.text()).toMatch('3 items');
    expect(cart.text()).toMatch(titleCase(fakeItems[1].type));

    expectedTotal = fakeItems[0].price * 2 + fakeItems[1].price;
    expect(cart.text()).toMatch(`Total: ${formatUSD(expectedTotal)}`);

    addToCartButtons.at(2).simulate('click');

    expect(cartPreview.text()).toMatch('4 items');
    expect(cart.text()).toMatch(titleCase(fakeItems[2].type));

    expectedTotal = fakeItems[0].price * 2 + fakeItems[1].price + fakeItems[2].price;
    expect(cart.text()).toMatch(`Total: ${formatUSD(expectedTotal)}`);
  });

  test('remove an item from cart', async () => {
    findByTestName(wrapper, 'add-to-cart').at(0).simulate('click');

    const cartPreview = findByTestName(wrapper, 'cart-preview')
    expect(cartPreview.text()).toMatch('1 items');

    findByTestName(wrapper, 'view-cart').simulate('click');

    const cart = findByTestName(wrapper, 'cart');
    findByTestName(cart, 'remove-item').simulate('click');

    expect(cart.text()).toMatch('Your cart is empty');
    expect(cartPreview.text()).toMatch('0 items');
  });

  test('clear all items from cart (also closes cart', async () => {
    findByTestName(wrapper, 'add-to-cart').at(0).simulate('click');
    findByTestName(wrapper, 'add-to-cart').at(1).simulate('click');

    const cartPreview = findByTestName(wrapper, 'cart-preview')
    expect(cartPreview.text()).toMatch('2 items');

    findByTestName(cartPreview, 'view-cart').simulate('click');

    const cart = findByTestName(wrapper, 'cart');
    findByTestName(cart, 'clear-cart').simulate('click');

    expect(cartPreview.text()).toMatch('0 items');
    expect(findByTestName(wrapper, 'cart').length).toBe(0);
  });
});

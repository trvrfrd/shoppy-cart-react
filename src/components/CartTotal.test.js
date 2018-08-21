import React from 'react';
import { shallow } from 'enzyme';
import CartTotal from './CartTotal';

it('displays properly formatted total for cart', () => {
  const items = [
    { price: 1.50, quantity: 2 },
    { price: 6.66, quantity: 1 },
    { price: .50, quantity: 10 }
  ];
  const total = 1.50 * 2 + 6.66 * 1 + .50 * 10;
  const formattedTotal = `Total: $${total.toFixed(2)}`;
  const wrapper = shallow(<CartTotal items={items} />);

  expect(wrapper.text()).toMatch(formattedTotal);
});

it('displays total of $0.00 for an empty items list', () => {
  const items = [];
  const wrapper = shallow(<CartTotal items={items} />);

  expect(wrapper.text()).toMatch('Total: $0.00');
});

if('defaults to total of $0.00 when no items provided', () => {
  const wrapper = shallow(<CartTotal />);
  expect(wrapper.text()).toMatch('Total: $0.00');
});

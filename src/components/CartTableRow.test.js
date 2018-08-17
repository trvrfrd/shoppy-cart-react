import React from 'react';
import { mount } from 'enzyme';
import CartTableRow from './CartTableRow';

const item = {
  type: 'a thing',
  price: 1.50,
  quantity: 2
};

it('displays item type, price, and quantity', () => {
  const wrapper = mount(<CartTableRow item={item} />);
  const text = wrapper.text();

  expect(text).toMatch(item.type);
  expect(text).toMatch(item.price.toString());
  expect(text).toMatch(item.quantity.toString());
});

it('formats price properly, with leading $ and 2 decimal places', () => {
  const wrapper = mount(<CartTableRow item={item} />);
  expect(wrapper.text()).toMatch(`$${item.price.toFixed(2)}`);
});

it('has a button to remove the item', () => {
  const wrapper = mount(<CartTableRow item={item} />);
  const button = wrapper.find('button');

  expect(button.length).toBe(1);
  expect(button.text()).toMatch('Remove');
});

it('calls onRemoveItem prop when remove button clicked', () => {
  const handler = jest.fn();
  const wrapper = mount(<CartTableRow item={item} onRemoveItem={handler} />);

  wrapper.find('button').simulate('click');

  expect(handler).toHaveBeenCalledTimes(1);
});

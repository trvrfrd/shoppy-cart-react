import React from 'react';
import { mount } from 'enzyme';
import CartTableRow from './CartTableRow';

import { fakeItems } from '../../test/mocks';
const item = fakeItems[0];

it('displays item quantity', () => {
  const wrapper = mount(<CartTableRow item={item} />);
  expect(wrapper.text()).toMatch(item.quantity.toString());
});

it('displays properly formatted price', () => {
  const wrapper = mount(<CartTableRow item={item} />);
  expect(wrapper.text()).toMatch(`$${item.price.toFixed(2)}`);
});

it('displays item type in title case', () => {
  const newItem = Object.assign({}, item, { type: 'a few words' });
  const wrapper = mount(<CartTableRow item={newItem} />);

  expect(wrapper.text()).toMatch('A Few Words');
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

  expect(handler).toHaveBeenCalled();
});

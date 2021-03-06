import React from 'react';
import { mount } from 'enzyme';
import CartPreview from './CartPreview';

import { fakeItems } from '../../test/mocks';

it('has a View Cart button that calls onView prop', () => {
  const handler = jest.fn();
  const wrapper = mount(<CartPreview onView={handler} />);

  wrapper.find('button').simulate('click');

  expect(handler).toHaveBeenCalled();
});

it('displays total count of items in cart', () => {
  const wrapper = mount(<CartPreview items={fakeItems} />);
  const totalCount = fakeItems.reduce((t, i) => t + i.quantity, 0);
  const expected = `(${totalCount} items)`

  expect(wrapper.text()).toMatch(expected);
});

it('uses the singular "item" when passed one item', () => {
  const wrapper = mount(<CartPreview items={[fakeItems[0]]} />);
  expect(wrapper.text()).toMatch('1 item');
  expect(wrapper.text()).not.toMatch('1 items');
});

it('shows count of 0 for an empty items list', () => {
  const wrapper = mount(<CartPreview items={[]} />);
  expect(wrapper.text()).toMatch('(0 items)');
});

it('shows count of 0 when passed no items prop', () => {
  const wrapper = mount(<CartPreview />);
  expect(wrapper.text()).toMatch('(0 items)');
});

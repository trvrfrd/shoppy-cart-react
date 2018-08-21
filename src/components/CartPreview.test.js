import React from 'react';
import { mount } from 'enzyme';
import CartPreview from './CartPreview';

import { fakeItems } from '../../test/mocks';

it('has a View Cart button that calls onView callback', () => {
  const handler = jest.fn();
  const wrapper = mount(<CartPreview onView={handler} />);

  wrapper.find('button').simulate('click');

  expect(handler).toHaveBeenCalled();
});

it('displays count of items in cart', () => {
  const wrapper = mount(<CartPreview items={fakeItems} />);
  const expected = `(${fakeItems.length} items)`

  expect(wrapper.text()).toMatch(expected);
});

it('shows count of 0 for an empty items list', () => {
  const wrapper = mount(<CartPreview items={[]} />);
  expect(wrapper.text()).toMatch('(0 items)');
});

it('shows count of 0 when passed no items prop', () => {
  const wrapper = mount(<CartPreview />);
  expect(wrapper.text()).toMatch('(0 items)');
});

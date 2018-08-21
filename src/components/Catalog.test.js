import React from 'react';
import { mount } from 'enzyme';
import Catalog from './Catalog';

import { fakeItems } from '../../test/mocks';

it('renders a Product component for each product', () => {
  const wrapper = mount(<Catalog inventory={fakeItems} />);
  expect(wrapper.find('Product').length).toBe(fakeItems.length);
});

it('renders no Product components when passed empty inventory', () => {
  const wrapper = mount(<Catalog inventory={[]} />);
  expect(wrapper.find('Product').length).toBe(0);
});

it('renders no Product components when passed no inventory', () => {
  const wrapper = mount(<Catalog />);
  expect(wrapper.find('Product').length).toBe(0);
});

it('calls onAddProductToCart prop with correct product', () => {
  const handler = jest.fn();
  const product = fakeItems[0];
  const wrapper = mount(
    <Catalog inventory={fakeItems} onAddProductToCart={handler} />
  );

  wrapper.find('button').at(0).simulate('click');

  expect(handler).toHaveBeenCalledWith(product);
});

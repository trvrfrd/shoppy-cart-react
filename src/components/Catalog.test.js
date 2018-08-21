import React from 'react';
import { mount } from 'enzyme';
import Catalog from './Catalog';

import { fakeItems } from '../../test/mocks';

it('renders a Product component for each product', () => {
  const wrapper = mount(<Catalog inventory={fakeItems} />);
  expect(wrapper.find('Product').length).toBe(fakeItems.length);
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

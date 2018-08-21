import React from 'react';
import { mount } from 'enzyme';
import Product from './Product';

const item = {
  type: 'product type',
  description: 'pretty good product',
  price: 9.99
};

it('displays product type/name in title case', () => {
  const wrapper = mount(<Product product={item} />);
  expect(wrapper.text()).toMatch('Product Type');
});

it('displays capitalized product description', () => {
  const wrapper = mount(<Product product={item} />);
  expect(wrapper.text()).toMatch('Pretty good product');
});

it('displays properl formatted product price', () => {
  const wrapper = mount(<Product product={item} />);
  expect(wrapper.text()).toMatch('$9.99');
});

it('has an Add to cart button that calls onAddToCart handler with product', () => {
  const handler = jest.fn();
  const wrapper = mount( <Product product={item} onAddToCart={handler} />);

  wrapper.find('button').simulate('click');

  expect(handler).toHaveBeenCalledWith(item);
});

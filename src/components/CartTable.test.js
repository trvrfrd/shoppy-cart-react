import React from 'react';
import { mount, shallow } from 'enzyme';
import CartTable from './CartTable';

it('has column headers for Item, Price, Qty', () => {
  const wrapper = mount(<CartTable />);
  const header = wrapper.find('thead');

  expect(header.find('th').at(0).text()).toMatch('Item');
  expect(header.find('th').at(1).text()).toMatch('Price');
  expect(header.find('th').at(2).text()).toMatch('Qty');
});

it('renders a CartTableRow for each item', () => {
  const items = [{ type: 1 }, { type: 2 }, { type: 3 }];
  const wrapper = shallow(<CartTable items={items} />);

  expect(wrapper.find('CartTableRow').length).toBe(3);
});

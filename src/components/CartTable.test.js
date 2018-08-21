import React from 'react';
import { mount, shallow } from 'enzyme';
import CartTable from './CartTable';

import { fakeItems } from '../../test/mocks';

it('renders an empty tbody when no items provided', () => {
  const wrapper = mount(<CartTable />);
  expect(wrapper.find('tbody tr').length).toBe(0);
});

it('has column headers for Item, Price, Qty', () => {
  const wrapper = mount(<CartTable items={fakeItems} />);
  const header = wrapper.find('thead');

  expect(header.find('th').at(0).text()).toMatch('Item');
  expect(header.find('th').at(1).text()).toMatch('Price');
  expect(header.find('th').at(2).text()).toMatch('Qty');
});

it('renders a CartTableRow for each item', () => {
  const wrapper = shallow(<CartTable items={fakeItems} />);

  expect(wrapper.find('CartTableRow').length).toBe(3);
});

it('calls onRemoveItem with correct index when an item is removed', () => {
  const handler = jest.fn();
  const index = 0;
  const wrapper = mount(<CartTable items={fakeItems} onRemoveItem={handler} />);
  const removeFirst = wrapper.find('[data-test-name="remove-item"]').at(index);

  removeFirst.simulate('click');

  expect(handler).toHaveBeenCalledWith(index);
});

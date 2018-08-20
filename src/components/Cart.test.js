import React from 'react';
import { mount } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import Cart from './Cart';

const fakeItems = [
  {
    type: 'a',
    quantity: 1,
    price: 1.00
  },
  {
    type: 'b',
    quantity: 2,
    price: 1.50
  },
  {
    type: 'c',
    quantity: 3,
    price: 2.00
  }
];

describe('UI and rendering', () => {

  it('matches snapshot', () => {
    const wrapper = TestRenderer.create(<Cart items={fakeItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a CartTable with items as prop', () => {
    const wrapper = mount(<Cart items={fakeItems} />);
    const table = wrapper.find('CartTable');

    expect(table.prop('items')).toEqual(fakeItems);
  });

  it('renders a CartTotal with items as prop', () => {
    const wrapper = mount(<Cart items={fakeItems} />);
    const table = wrapper.find('CartTotal');

    expect(table.prop('items')).toEqual(fakeItems);
  });

  describe('controls', () => {

    it('renders CartControls', () => {
      const wrapper = mount(<Cart items={fakeItems} />);
      const controls = wrapper.find('CartControls');

      expect(controls.length).toBe(1);
    });

    it('has a Clear button that calls onClear prop', () => {
      const handler = jest.fn();
      const wrapper = mount(<Cart items={fakeItems} onClear={handler} />);
      const controls = wrapper.find('CartControls');
      const clear = controls.find('button').at(0);

      clear.simulate('click');

      expect(handler).toHaveBeenCalled();
    });

    it('has a Close button that calls onClose prop', () => {
      const handler = jest.fn();
      const wrapper = mount(<Cart items={fakeItems} onClose={handler} />);
      const controls = wrapper.find('CartControls');
      const close = controls.find('button').at(1);

      close.simulate('click');

      expect(handler).toHaveBeenCalled();
    });

    it('calls onRemoveItem with correct index when an item is removed', () => {
      const handler = jest.fn();
      const index = 0;
      const wrapper = mount(<Cart items={fakeItems} onRemoveItem={handler} />);
      const removeFirst = wrapper.find('[data-test-name="remove-item"]').at(index);

      removeFirst.simulate('click');

      expect(handler).toHaveBeenCalledWith(index);
    });
  });
});

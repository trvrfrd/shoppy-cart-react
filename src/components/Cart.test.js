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

it('can set initial state based on items prop', () => {
  const wrapper = mount(<Cart items={fakeItems} />);
  expect(wrapper.state('items')).toEqual(fakeItems);
});

it('creates new items array when setting initial state from props', () => {
  const wrapper = mount(<Cart items={fakeItems} />);
  expect(wrapper.state('items')).not.toBe(fakeItems);
});

describe('UI and rendering', () => {

  it('matches snapshot', () => {
    const wrapper = TestRenderer.create(<Cart items={fakeItems} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a CartTable with state.items as prop', () => {
    const wrapper = mount(<Cart />);
    wrapper.setState({ items: fakeItems });
    const table = wrapper.find('CartTable');

    expect(table.prop('items')).toBe(fakeItems);
  });

  it('renders a CartTotal with state.items as prop', () => {
    const wrapper = mount(<Cart />);
    wrapper.setState({ items: fakeItems });
    const table = wrapper.find('CartTotal');

    expect(table.prop('items')).toBe(fakeItems);
  });

  describe('controls', () => {

    it('renders CartControls', () => {
      const wrapper = mount(<Cart items={fakeItems} />);
      const controls = wrapper.find('CartControls');

      expect(controls.length).toBe(1);
    });

    it('has a Clear button that removes items from state', () => {
      const wrapper = mount(<Cart items={fakeItems} />);
      const controls = wrapper.find('CartControls');
      const clear = controls.find('button').at(0);

      clear.simulate('click');

      expect(wrapper.state('items')).toEqual([]);
    });

    it('has a Close button that calls onClose prop', () => {
      const handler = jest.fn();
      const wrapper = mount(<Cart items={fakeItems} onClose={handler} />);
      const controls = wrapper.find('CartControls');
      const close = controls.find('button').at(1);

      close.simulate('click');

      expect(handler).toHaveBeenCalled();
    });
  });
});


describe('instance methods', () => {

  let wrapper;
  beforeEach(() => wrapper = mount(<Cart items={fakeItems} />));

  describe('.addItem()', () => {

    it('adds a new item to state with quantity: 1', () => {
      const newItem = {
        type: 'd',
        price: 3.15
      };
      const expected = fakeItems.concat(Object.assign({ quantity: 1 }, newItem));

      wrapper.instance().addItem(newItem);

      expect(wrapper.state('items')).toEqual(expected);
    });

    it('increments quantity when adding an existing item to state', () => {
      const existingItem = Object.assign({}, fakeItems[0]);
      existingItem.quantity += 1;
      const expected = [existingItem, ...fakeItems.slice(1)];

      wrapper.instance().addItem(existingItem);

      expect(wrapper.state('items')).toEqual(expected);
    });
  });

  it('removes an item from state by index with .removeItemAt()', () => {
    const index = 1;
    const expected = [...fakeItems.slice(0, index), ...fakeItems.slice(index + 1)];

    wrapper.instance().removeItemAt(index);

    expect(wrapper.state('items')).toEqual(expected);
  });

  it('clears all items', () => {
    wrapper.instance().clearItems();

    expect(wrapper.state('items')).toEqual([]);
  });
});

describe('integrations', () => {
  it('removes an item from Cart with the Remove button', () => {
    const wrapper = mount(<Cart items={fakeItems} />);
    const removeFirst = wrapper.find('[data-test-name="remove-item"]').at(0);
    const expected = fakeItems.slice(1);

    removeFirst.simulate('click');

    expect(wrapper.state('items')).toEqual(expected);
  });
});

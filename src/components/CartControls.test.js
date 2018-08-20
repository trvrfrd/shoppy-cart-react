import React from 'react';
import { shallow } from 'enzyme';
import CartControls from './CartControls.js';

it('has a Clear button', () => {
  const wrapper = shallow(<CartControls />);
  expect(wrapper.find('button').at(0).text()).toMatch('Clear');
});

it('has a Close button', () => {
  const wrapper = shallow(<CartControls />);
  expect(wrapper.find('button').at(1).text()).toMatch('Close');
});

it('calls onClear handler when Clear button clicked', () => {
  const handler = jest.fn();
  const wrapper = shallow(<CartControls onClear={handler} />);

  wrapper.find('button').at(0).simulate('click');

  expect(handler).toHaveBeenCalled();
});

it('calls onClose handler when Close button clicked', () => {
  const handler = jest.fn();
  const wrapper = shallow(<CartControls onClose={handler} />);

  wrapper.find('button').at(1).simulate('click');

  expect(handler).toHaveBeenCalled();
});

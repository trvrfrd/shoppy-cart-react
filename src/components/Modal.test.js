import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

it('renders nothing at all by default', () => {
  const wrapper = shallow(
    <Modal>
      <h1>hello</h1>
    </Modal>
  );
  expect(wrapper.find('h1').length).toBe(0);
  expect(wrapper.type()).toBe(null);
});

it('renders nothing at all when show prop is false', () => {
  const wrapper = shallow(
    <Modal show={false}>
      <h1>hello</h1>
    </Modal>
  );
  expect(wrapper.find('h1').length).toBe(0);
  expect(wrapper.type()).toBe(null);
});

it('renders children when show prop is true', () => {
  const wrapper = shallow(
    <Modal show={true}>
      <h1>hello</h1>
    </Modal>
  );
  expect(wrapper.children().find('h1').length).toBe(1);
});

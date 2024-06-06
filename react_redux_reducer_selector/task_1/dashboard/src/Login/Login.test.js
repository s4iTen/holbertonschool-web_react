// Login.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const logIn = jest.fn();
    const wrapper = shallow(<Login logIn={logIn} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders two input fields and one button', () => {
    const logIn = jest.fn();
    const wrapper = shallow(<Login logIn={logIn} />);
    expect(wrapper.find('input[type="email"]')).toHaveLength(1);
    expect(wrapper.find('input[type="password"]')).toHaveLength(1);
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  });

  it('button is disabled by default', () => {
    const logIn = jest.fn();
    const wrapper = shallow(<Login logIn={logIn} />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('button is enabled when both email and password are filled', () => {
    const logIn = jest.fn();
    const wrapper = shallow(<Login logIn={logIn} />);
    
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });
    
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('calls logIn with the right data when form is submitted', () => {
    const logIn = jest.fn();
    const wrapper = shallow(<Login logIn={logIn} />);
    
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(logIn).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});

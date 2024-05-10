import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging /> HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs on mount and unmount with "Component" when wrapped element is pure html', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs on mount and unmount with the name of the component when wrapped element is the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);

    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
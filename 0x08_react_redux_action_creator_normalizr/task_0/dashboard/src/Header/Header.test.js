// task_2/dashboard/src/Header/Header.test.js

import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

jest.mock("aphrodite", () => ({
  StyleSheet: {
    create: jest.fn().mockImplementation(() => ({
      header: "header",
      img: "img",
      welcome: "welcome",
      logout: "logout",
    })),
  },
  css: jest.fn().mockImplementation(() => "className"),
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
  },
}));

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders an img tag', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('renders an h1 tag', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toEqual(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@test.com' }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toEqual(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@test.com');
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@test.com' }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});

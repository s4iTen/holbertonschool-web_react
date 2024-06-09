import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('App', () => {
  it('renders without crashing when not logged in', () => {
    const mockStore = configureStore();
    const store = mockStore({
      uiReducer: {
        isLoggedIn: false
      }
    });

    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });

  it('renders without crashing when logged in', () => {
    const mockStore = configureStore();
    const store = mockStore({
      uiReducer: {
        isLoggedIn: true
      }
    });

    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
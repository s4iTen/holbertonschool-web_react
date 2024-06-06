import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const state = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER })).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS })).toEqual({
      ...initialState,
      isUserLoggedIn: true,
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const state = { ...initialState, isUserLoggedIn: true };
    expect(uiReducer(state, { type: LOGIN_FAILURE })).toEqual({
      ...initialState,
      isUserLoggedIn: false,
    });
  });

  it('should handle LOGOUT', () => {
    const state = { ...initialState, isUserLoggedIn: true };
    expect(uiReducer(state, { type: LOGOUT })).toEqual({
      ...initialState,
      isUserLoggedIn: false,
      user: {},
    });
  });
});

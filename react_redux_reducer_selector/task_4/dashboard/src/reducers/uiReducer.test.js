import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}),
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState).toEqual(initialState.set('isNotificationDrawerVisible', true));
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const state = initialState.set('isNotificationDrawerVisible', true);
    const newState = uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER });
    expect(newState).toEqual(initialState.set('isNotificationDrawerVisible', false));
  });

  it('should handle LOGIN_SUCCESS', () => {
    const newState = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(newState).toEqual(initialState.set('isUserLoggedIn', true));
  });

  it('should handle LOGIN_FAILURE', () => {
    const state = initialState.set('isUserLoggedIn', true);
    const newState = uiReducer(state, { type: LOGIN_FAILURE });
    expect(newState).toEqual(initialState.set('isUserLoggedIn', false));
  });

  it('should handle LOGOUT', () => {
    const state = initialState.set('isUserLoggedIn', true);
    const newState = uiReducer(state, { type: LOGOUT });
    expect(newState).toEqual(initialState.set('isUserLoggedIn', false).set('user', Map({})));
  });
});

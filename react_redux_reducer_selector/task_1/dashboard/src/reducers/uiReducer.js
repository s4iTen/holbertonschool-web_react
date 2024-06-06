import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

const actionHandlers = {
  [DISPLAY_NOTIFICATION_DRAWER]: (state) => state.set('isNotificationDrawerVisible', true),
  [HIDE_NOTIFICATION_DRAWER]: (state) => state.set('isNotificationDrawerVisible', false),
  [LOGIN_SUCCESS]: (state) => state.set('isUserLoggedIn', true),
  [LOGIN_FAILURE]: (state) => state.set('isUserLoggedIn', false),
  [LOGOUT]: (state) => state.set('isUserLoggedIn', false).set('user', Map({})),
};

const uiReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default uiReducer;

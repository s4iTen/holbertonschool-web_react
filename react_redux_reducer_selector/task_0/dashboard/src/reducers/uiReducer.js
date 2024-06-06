import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from '../actions/uiActionTypes';
  
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  
  const actionHandlers = {
    [DISPLAY_NOTIFICATION_DRAWER]: (state) => ({
      ...state,
      isNotificationDrawerVisible: true,
    }),
    [HIDE_NOTIFICATION_DRAWER]: (state) => ({
      ...state,
      isNotificationDrawerVisible: false,
    }),
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      isUserLoggedIn: true,
    }),
    [LOGIN_FAILURE]: (state) => ({
      ...state,
      isUserLoggedIn: false,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      isUserLoggedIn: false,
      user: {},
    }),
  };
  
  const uiReducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;
  };
  
  export default uiReducer;
  
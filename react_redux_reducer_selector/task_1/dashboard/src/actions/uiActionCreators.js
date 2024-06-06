import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import { dispatch } from "redux";
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });

export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch("../../dist/login-success.json");
      console.log("🚀 ~ return ~ response:", response);
      if (response.ok) {
        dispatch(loginSuccess());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

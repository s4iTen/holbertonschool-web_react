import { bindActionCreators, dispatch } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';


export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
};

export const boundMarkAsRead = bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, dispatch);
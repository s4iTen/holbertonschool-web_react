// reducers/notificationReducer.js
import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Initial state using Immutable Map
const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
});

// Notification reducer
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep({
        notifications: Map(normalizedData.entities.notifications).map(notification => ({
          ...notification,
          isRead: false,
        })),
      });
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    case MARK_AS_READ: {
      return state.setIn(['notifications', action.index, 'isRead'], true);
    }
    default:
      return state;
  }
};

export default notificationReducer;

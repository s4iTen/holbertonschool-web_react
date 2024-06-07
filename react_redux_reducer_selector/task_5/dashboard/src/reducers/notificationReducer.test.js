import { Map } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
  });

  it('should return the initial state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, author: 1, context: 1 },
        { id: 2, author: 2, context: 2 },
      ],
    };

    const normalizedData = notificationsNormalizer(action.data);
    const expectedState = initialState.mergeDeep({
      notifications: Map(normalizedData.entities.notifications).map(notification => ({
        ...notification,
        isRead: false,
      })),
    });

    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      notifications: Map({
        '1': { id: 1, author: 1, context: 1, isRead: false },
        '2': { id: 2, author: 2, context: 2, isRead: false },
      }),
      filter: 'DEFAULT',
    });

    const action = { type: MARK_AS_READ, index: '1' };

    const expectedState = initialState.setIn(['notifications', '1', 'isRead'], true);

    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };

    const expectedState = initialState.set('filter', 'URGENT');

    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});

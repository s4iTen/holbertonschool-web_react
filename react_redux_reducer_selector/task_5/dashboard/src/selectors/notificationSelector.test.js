import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector tests', () => {
  const state = Map({
    filter: 'DEFAULT',
    notifications: Map({
      '1': Map({ id: '1', isRead: false, value: 'Notification 1' }),
      '2': Map({ id: '2', isRead: true, value: 'Notification 2' }),
      '3': Map({ id: '3', isRead: false, value: 'Notification 3' }),
    }),
  });

  it('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications returns a list of the notification entities within the reducer', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      '1': { id: '1', isRead: false, value: 'Notification 1' },
      '2': { id: '2', isRead: true, value: 'Notification 2' },
      '3': { id: '3', isRead: false, value: 'Notification 3' },
    });
  });

  it('getUnreadNotifications returns a list of the unread notification entities within the reducer', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      '1': { id: '1', isRead: false, value: 'Notification 1' },
      '3': { id: '3', isRead: false, value: 'Notification 3' },
    });
  });
});

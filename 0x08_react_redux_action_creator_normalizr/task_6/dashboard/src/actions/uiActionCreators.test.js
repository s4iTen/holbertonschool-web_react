import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
    it('login returns the correct action', () => {
        const action = login('email', 'password');
        expect(action).toEqual({ type: LOGIN, user: { email: 'email', password: 'password' } });
    });

    it('logout returns the correct action', () => {
        const action = logout();
        expect(action).toEqual({ type: LOGOUT });
    });

    it('displayNotificationDrawer returns the correct action', () => {
        const action = displayNotificationDrawer();
        expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    });

    it('hideNotificationDrawer returns the correct action', () => {
        const action = hideNotificationDrawer();
        expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });
});
// Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import holbimg from '../assets/holbimg.jpg';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export function Notifications({ displayDrawer = false, listNotifications = [] }) {
    const handleclick = () => {
        console.log('Close button has been clicked');
    }

    return (
        <>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <button style={{
                        position: 'absolute', top: '10px',
                        right: '10px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                    }}
                        aria-label='Close'
                        onClick={handleclick}
                    >
                        <img src={holbimg} alt="close-icon" />
                    </button>
                    {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
                    <ul>
                        {listNotifications.length === 0 ? (
                            <p>No new notification for now</p>
                        ) : (
                            listNotifications.map(({ id, type, value, html }) => (
                                <NotificationItem key={id} type={type} value={value} html={html} />
                            ))
                        )}
                    </ul>
                </div>
            )}
        </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
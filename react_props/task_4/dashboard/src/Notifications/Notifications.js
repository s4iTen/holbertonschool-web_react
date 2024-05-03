import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import holbimg from '../assets/holbimg.jpg';
import NotificationItem from './NotificationItem';

export function Notifications({ displayDrawer = false }) {
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
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            )}
        </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
};
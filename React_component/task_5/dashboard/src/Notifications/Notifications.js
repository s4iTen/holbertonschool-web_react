import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import holbimg from '../assets/holbimg.jpg';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    static contextTypes = {}; // Define empty contextTypes

    handleClick = () => {
        console.log('Close button has been clicked');
    }

    // Implement markAsRead if needed
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
        // Implement your logic here to mark the notification as read
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        
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
                            onClick={this.handleClick}
                        >
                            <img src={holbimg} alt="close-icon" />
                        </button>
                        {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
                        <ul>
                            {listNotifications.length === 0 ? (
                                <p>No new notification for now</p>
                            ) : (
                                listNotifications.map(({ id, type, value, html }) => (
                                    <NotificationItem key={id} id={id} type={type} value={value} html={html} markAsRead={this.markAsRead} />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export { Notifications };

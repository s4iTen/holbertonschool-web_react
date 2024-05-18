import React from "react";
import PropTypes from "prop-types";
import holbimg from "../assets/holbimg.jpg";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    border: '2px dashed #e01d3f',
    padding: '0',
    marginBottom: '0',
    fontSize: '20px',
    zIndex: '1',
  },
  buttonImg: {
    width: '10px',
  },
  p: {
    margin: '0',
    marginTop: '15px',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick() {
    console.log("Close button has been clicked");
    this.props.handleHideDrawer();
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length !== this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer } = this.props;

    return (
      <>
        <div className="menuItem" onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              aria-label="Close"
              onClick={this.handleClick}
            >
              <img
                src={holbimg}
                alt="close-icon"
                className={css(styles.buttonImg)}
              />
            </button>
            {listNotifications.length > 0 && (
              <p className={css(styles.p)}>Here is the list of notifications</p>
            )}
            <ul>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                listNotifications.map(({ id, type, value, html }) => (
                  <NotificationItem
                    key={id}
                    id={id}
                    type={type}
                    value={value}
                    html={html}
                    markAsRead={this.markAsRead}
                    css={css}
                    styles={styles}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export { Notifications };

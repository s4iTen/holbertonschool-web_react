import React from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import holbimg from "../assets/holbimg.jpg";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    border: "3px dashed #e01d3f",
    padding: "10px",
    marginBottom: "20px",
  },
  buttonImg: {
    width: "10px",
  },
  p: {
    margin: "0",
    marginTop: "15px",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

class Notifications extends React.Component {
  static contextTypes = {};

  handleClick = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className="menuItem">Your notifications</div>
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export { Notifications };

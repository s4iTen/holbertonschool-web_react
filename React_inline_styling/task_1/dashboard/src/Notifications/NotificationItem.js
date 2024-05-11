import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

function NotificationItem({ type, html, value, markAsRead, id, styles }) {
  const handleClick = () => {
    markAsRead(id);
  };

  if (html && html.__html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick} className={css(styles[type + 'Notification'])} />
    );
  }
  return (
    <li data-notification-type={type} onClick={handleClick} className={css(styles[type + 'Notification'])}>{value}</li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  styles: PropTypes.object.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
};

export default NotificationItem;
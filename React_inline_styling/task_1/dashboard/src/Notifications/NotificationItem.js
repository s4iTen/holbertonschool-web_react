import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead, id }) {
  const handleClick = () => {
    markAsRead(id);
  };

  if (html && html.__html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick} />
    );
  }
  return (
    <li data-notification-type={type} onClick={handleClick}>{value}</li>
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
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
};

export default NotificationItem;
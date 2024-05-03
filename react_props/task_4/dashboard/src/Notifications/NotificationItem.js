import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  if (html.__html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} />
    );
  }
  return (
    <li data-notification-type={type}>{value}</li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: function(props, propName, componentName) {
    if (!props['value'] && (!props[propName] || !props[propName].__html)) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`
      );
    }
  },
  value: function(props, propName, componentName) {
    if (!props['html'] && !props[propName]) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`
      );
    }
  },
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
};

export default NotificationItem;
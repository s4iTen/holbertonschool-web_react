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
    if (props[propName] && !props[propName].__html) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. \`html.__html\` should not be empty.`
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
    if (props[propName] && props[propName].trim() === '') {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. \`value\` should not be empty.`
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
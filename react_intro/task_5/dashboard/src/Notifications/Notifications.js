import React from 'react';
import { getLatestNotification } from './utils';
import './Notifications.css';
function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          float: 'right',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        x
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;

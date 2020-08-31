import React from 'react';

import NotificationItem from './NotificationItem';
import {notifications} from './data';
import CustomScrollbars from '../../util/CustomScrollbars';

const AppNotification = () => {
  return (
    <CustomScrollbars className="messages-list scrollbar" style={{height: 280}} data-test="scroll-component">
      <ul className="list-unstyled" data-test="unordered-list-component">
        {notifications.map((notification, index) => <NotificationItem key={index} notification={notification} data-test="notification-item-component"/>)
        }
      </ul>
    </CustomScrollbars>
  )
};

export default AppNotification;


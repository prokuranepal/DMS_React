import React from 'react';

import NotificationItem from './NotificationItem';
import {notifications} from './data';
import CustomScrollbars from '../../util/CustomScrollbars';

const MailNotification = () => {

  return (
    <CustomScrollbars className="messages-list scrollbar" style={{height: 280}} 
    data-test="customScrollComp">
      <ul className="list-unstyled">
        {notifications.map((notification, index) => <NotificationItem key={index}
                                                                      notification={notification}
                                                                      data-test="notificationItemComp"/>)}
      </ul>
    </CustomScrollbars>
  )
};

export default MailNotification;


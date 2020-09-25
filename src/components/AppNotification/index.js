import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NotificationItem from './NotificationItem';
import {notifications} from './data';
import CustomScrollbars from '../../util/CustomScrollbars';
import * as actions from '../../store/actions/Common';

const AppNotification = () => {
  // const dispatch = useDispatch();
  // const notification = useSelector(({commonData}) => commonData.notifications);
  

  // useEffect(() => {
  //   dispatch(actions.getNotifications());
  // },[])
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


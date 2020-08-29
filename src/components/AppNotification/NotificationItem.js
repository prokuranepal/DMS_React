import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button';


const NotificationItem = ({notification}) => {
  const {icon, image, title, time} = notification;
  return (
    <li className="media">
      <Avatar
        alt={image}
        src={image}
        className=" mr-2"
        data-test="avatar-component"
      />
      <div className="media-body align-self-center">
        <p className="sub-heading mb-0" data-test="title-component">{title}</p>
        <Button size="small" className="jr-btn jr-btn-xs mb-0"><i
          className={`zmdi ${icon} zmdi-hc-fw`} data-test="icon-button-component"/></Button> <span className="meta-date"><small data-test="time-component">{time}</small></span>
      </div>
    </li>
  );
};

export default NotificationItem;

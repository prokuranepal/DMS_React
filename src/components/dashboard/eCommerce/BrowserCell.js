import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const BrowserCell = ({browser}) => {
  const {id, image, title, subTitle} = browser;
  return (
    <div key={id} className="user-profile d-flex flex-row">
      <Avatar
        alt={title}
        src={image}
        className="user-avatar-sm mr-3"
        data-test="avatarComp"
      />
      <div className="user-detail">
        <h4 className="mb-0" data-test="titleComp">{title}</h4>
        <div className="user-description" data-test="subTitleComp">{subTitle}</div>
      </div>
    </div>

  );
};

export default BrowserCell;

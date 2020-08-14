import React from 'react';
import {useDispatch} from 'react-redux'
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';

const UserInfoPopup = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="user-profile">
        <img className="user-avatar border-0 size-40 rounded-circle"
             src="https://via.placeholder.com/150x150"
             alt="User"/>
        <div className="user-detail ml-2">
          <h4 className="user-name mb-0">Chris Harris</h4>
          <small>Administrator</small>
        </div>
      </div>
      <span className="jr-link dropdown-item text-muted">
          <i className="zmdi zmdi-face zmdi-hc-fw mr-1"/>
          <IntlMessages id="popup.profile"/>
        </span>
      <span className="jr-link dropdown-item text-muted">
          <i className="zmdi zmdi-settings zmdi-hc-fw mr-1"/>
          <IntlMessages id="popup.setting"/>
        </span>
      <span className="jr-link dropdown-item text-muted" onClick={() => {
        dispatch(userSignOut())
      }}>
          <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1"/>
          <IntlMessages id="popup.logout"/>
        </span>
    </div>
  );
};

export default UserInfoPopup;



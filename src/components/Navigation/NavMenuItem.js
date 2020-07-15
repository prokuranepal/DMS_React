import React from 'react';
import {List, ListItem} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import IntlMessages from "../../util/IntlMessages";

const NavMenuItem = props => {
  const {name, icon, link} = props;

  return (
    <List component="div" className='nav-menu-item'>
      <NavLink className="prepend-icon nav-menu-link" to={link}>
        {/* Display an icon if any */}
        {!!icon && (
          <i className={'zmdi zmdi-hc-fw  zmdi-' + icon}/>
        )}
        <span className="nav-text"><IntlMessages id={name}/></span>
      </NavLink>
    </List>
  )
};

export default NavMenuItem;
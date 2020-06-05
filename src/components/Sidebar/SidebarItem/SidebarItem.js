import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
// import ListItemLink from '@material-ui/core/ListItemLink';
import Icon from '@material-ui/core/Icon';

const SidebarItem = (props) => {
  let name = props.name;
  name = name ? name.toLowerCase() : null;

  return (
    <NavLink to={'/admin/' + name} style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>

        <ListItemIcon>
          <Icon>{props.iconName}</Icon>
        </ListItemIcon>

        <ListItemText primary={props.name} />

      </ListItem>
    </NavLink >
  );
}

export default SidebarItem;
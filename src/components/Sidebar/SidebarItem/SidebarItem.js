import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const SidebarItem = (props) => {
  return (
    <ListItem button>
      <ListItemIcon>
      <Icon>{props.iconName}</Icon>
      </ListItemIcon>
      <ListItemText primary={props.name}  />
    </ListItem>
  );
}

export default SidebarItem;
import React from 'react';
import { List } from '@material-ui/core';
import NavMenuItem from './NavMenuItem';
import NavSection from './NavSection';
import NavCollapse from './NavCollapse';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  sideNavMenu: {
    position: 'relative',
  },
}));

const CmtVertical = props => {
  const { menuItems } = props;
  const classes = useStyles();
  return (
    <List component="nav" disablePadding className={classes.sideNavMenu}>
      {menuItems.map((item, index) => {
        switch (item.type) {
          case 'section':
            return <NavSection {...item} key={index} />;
          case 'collapse':
            return <NavCollapse {...item} key={index} />;
          case 'item':
            return <NavMenuItem {...item} key={index} />;
          default:
            return null;
        }
      })}
    </List>
  );
};

export default CmtVertical;

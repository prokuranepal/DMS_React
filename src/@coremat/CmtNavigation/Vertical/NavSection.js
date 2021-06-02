import React from 'react';
import { List } from '@material-ui/core';
import NavMenuItem from './NavMenuItem';
import NavCollapse from './NavCollapse';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  navSection: {
    position: 'relative',
    fontWeight: theme.typography.fontWeightRegular,
    '&:not(:first-child) $navHeader': {
      borderTop: `solid 1px ${theme.palette.sidebar.borderColor}`,
      // marginTop: 10,
    },
    '&:not(:last-child)': {
      '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
        borderBottom: `solid 1px ${theme.palette.sidebar.borderColor}`,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
  navHeader: {
    position: 'relative',
    // padding: '24px 16px 20px 16px',
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 10,
    letterSpacing: 1.5,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
}));

const NavSection = props => {
  const { name, children = [] } = props;
  const isExpandable = children && children.length > 0;
  const classes = useStyles();

  const MenuCollapse = (
    <List component="div" className={clsx(classes.navHeader, 'Cmt-navHeader')}>
      {name}
    </List>
  );

  const MenuItemChildren = isExpandable ? (
    <List component="div" disablePadding>
      {children.map((item, index) => {
        switch (item.type) {
          case 'section':
            return <NavSection {...item} key={index} />;
          case 'collapse':
            return <NavCollapse {...item} key={index} />;
          default:
            return <NavMenuItem {...item} key={index} />;
        }
      })}
    </List>
  ) : null;

  return (
    <Box className={classes.navSection}>
      {MenuCollapse}
      {MenuItemChildren}
    </Box>
  );
};

export default NavSection;

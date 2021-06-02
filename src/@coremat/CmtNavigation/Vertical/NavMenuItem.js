import React, { cloneElement, isValidElement } from 'react';
import { List } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => (

  {
  navMenuItem: {
    padding: '0 16px 0 0',
    position: 'relative',
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      paddingLeft: 16,
    },
  },
  navMenuLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '9px 16px 9px 32px',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    color: theme.palette.sidebar.textColor,
    '&:hover, &:focus': {
      color: theme.palette.sidebar.textDarkColor,
      backgroundColor: theme.palette.sidebar.navHoverBgColor,
      '& .Cmt-icon-root, & .Cmt-nav-text': {
        color: theme.palette.sidebar.textDarkColor,
      },
    },
    '&.active': {
      color: theme.palette.sidebar.textActiveColor,
      backgroundColor: theme.palette.sidebar.navActiveBgColor,
      '& .Cmt-icon-root, & .Cmt-nav-text': {
        color: theme.palette.sidebar.textActiveColor,
      },
      '&:hover, &:focus': {
        '& .Cmt-nav-text, & .Cmt-icon-root': {
          color: theme.palette.sidebar.textActiveColor,
        },
      },
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      justifyContent: 'center',
      padding: 0,
      height: 40,
      width: 40,
      borderRadius: '50%',
      marginLeft: 4,
      marginRight: 4,
    },
  },
  navText: {
    flex: 1,
    fontSize: 14,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      marginRight: 0,
    },
  },
}));

const NavMenuItem = props => {
  const { name, icon, link } = props;
  // console.log(semiDarkTheme);
  
  const classes = useStyles();
  // const theme = useTheme();

  const renderIcon = () => {
    if (icon && isValidElement(icon)) {
      return cloneElement(icon, {
        className: clsx(classes.iconRoot, 'Cmt-icon-root'),
      });
    }

    return null;
  };

  return (
    <List component="div" className={clsx(classes.navMenuItem, 'Cmt-nav-menu-item')}>
      <NavLink className={clsx(classes.navMenuLink, 'Cmt-nav-menu-link')} to={link}>
        {/* Display an icon if any */}
        {renderIcon()}
        {/* <i className={'zmdi zmdi-hc-fw  zmdi-' + icon}/> */}
        <Box component="span" className={clsx(classes.navText, 'Cmt-nav-text')}>
          {name}
        </Box>
      </NavLink>
    </List>
  );
};

export default NavMenuItem;

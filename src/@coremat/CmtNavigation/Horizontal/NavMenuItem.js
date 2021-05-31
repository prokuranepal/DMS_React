import React, { cloneElement, isValidElement } from 'react';
import { List } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  navMenuLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 10px 10px 20px',
    color: theme.palette.horizontalNav.textColor,
    '&:hover, &:focus': {
      color: theme.palette.horizontalNav.textDarkColor,
      backgroundColor: theme.palette.horizontalNav.menuHoverBgColor,
      '& .Cmt-icon-root': {
        color: theme.palette.horizontalNav.textDarkColor,
      },
    },
    '&.active': {
      color: theme.palette.horizontalNav.textActiveColor,
      backgroundColor: theme.palette.horizontalNav.menuActiveBgColor,
      '& .Cmt-icon-root': {
        color: theme.palette.horizontalNav.textActiveColor,
      },
      '&:hover, &:focus': {
        '& .Cmt-icon-root': {
          color: theme.palette.horizontalNav.textActiveColor,
        },
      },
    },
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
  },
}));

const NavMenuItem = props => {
  const { name, icon, link, handleClick } = props;
  const classes = useStyles();

  const renderIcon = () => {
    if (icon && isValidElement(icon)) {
      return cloneElement(icon, {
        className: clsx(classes.iconRoot, 'Cmt-icon-root'),
      });
    }

    return null;
  };

  return (
    <List component="div" disablePadding onClick={handleClick}>
      <NavLink className={clsx(classes.navMenuLink, 'Cmt-nav-menu-link')} to={link}>
        {/* Display an icon if any */}
        {renderIcon()}
        <Box component="span" className={clsx(classes.navText, 'Cmt-nav-text')}>
          {name}
        </Box>
      </NavLink>
    </List>
  );
};

export default NavMenuItem;

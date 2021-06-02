import React from 'react';
import { Box, darken, fade, Hidden, makeStyles, Toolbar } from '@material-ui/core';
import clsx from 'clsx';
import Logo from '../../partials/Logo';

import SidebarToggleHandler from '../../../../../@coremat/CmtLayouts/Horizontal/SidebarToggleHandler';
import AppsMenu from '../../partials/Header/AppsMenu';
import HeaderMessages from '../../partials/Header/HeaderMessages';
import HeaderNotifications from '../../partials/Header/HeaderNotifications';
import LanguageSwitcher from '../../partials/LanguageSwitcher';
import SearchPopover from '../../partials/SearchPopover';
import HeaderMenu from './HeaderMenu';
import UserDropDown from '../../partials/UserDropDown';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: 0,
    minHeight: 10,
    [theme.breakpoints.down('md')]: {
      paddingTop: 12,
      paddingBottom: 12,
    },
    '& .Cmt-appIcon': {
      color: theme.palette.text.secondary,
      '&:hover, &:focus': {
        color: darken(theme.palette.text.secondary, 0.2),
      },
      [theme.breakpoints.down('xs')]: {
        padding: 7,
      },
    },
    '& .Cmt-horizontalNavMenu': {
      position: 'static',
      '& .Cmt-navMegaBtn, & > .Cmt-navCollapse > .Cmt-navCollapseBtn': {
        minHeight: 64,
      },
    },
  },
  langRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      backgroundColor: fade(theme.palette.common.dark, 0.15),
    },
  },
  searchIcon: {
    [theme.breakpoints.down('xs')]: {
      padding: 9,
    },
  },
}));

const MainHeader = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
      <Logo mr={{ xs: 2, sm: 4, lg: 6, xl: 8 }} color="white" />
      <Hidden mdDown>
        <HeaderMenu />
      </Hidden>

      <Box display="flex" alignItems="center" ml="auto">
        <SearchPopover iconClassName={clsx(classes.searchIcon, 'Cmt-searchIcon')} />
        <AppsMenu />
        <HeaderMessages />
        <HeaderNotifications />
        <Box className={clsx(classes.langRoot, 'Cmt-i18n-switch')}>
          <LanguageSwitcher />
        </Box>
        <UserDropDown />
      </Box>
    </Toolbar>
  );
};

export default MainHeader;

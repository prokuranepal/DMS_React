import React from 'react';
import SidebarToggleHandler from '../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, fade, InputBase } from '@material-ui/core';
import LanguageSwitcher from '../LanguageSwitcher';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';
import AppsMenu from './AppsMenu';
import HeaderNotifications from './HeaderNotifications';
import HeaderMessages from './HeaderMessages';
import Hidden from '@material-ui/core/Hidden';
import Logo from '../Logo';
import SearchPopover from '../SearchPopover';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 64,
    [theme.breakpoints.up('md')]: {
      minHeight: 72,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  searchRoot: {
    position: 'relative',
    width: 260,
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      height: 48,
      borderRadius: 30,
      backgroundColor: fade(theme.palette.common.dark, 0.38),
      color: fade(theme.palette.common.white, 0.7),
      boxSizing: 'border-box',
      padding: '5px 15px 5px 50px',
      transition: 'all 0.3s ease',
      '&:focus': {
        backgroundColor: fade(theme.palette.common.dark, 0.58),
        color: fade(theme.palette.common.white, 0.7),
      },
    },
  },
  langRoot: {
    borderLeft: `solid 1px ${fade(theme.palette.common.dark, 0.15)}`,
    minHeight: 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      minHeight: 64,
    },
  },
  iconBtn: {
    color: fade(theme.palette.common.white, 0.38),
    '&:hover, &:focus': {
      color: theme.palette.common.white,
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
      <Logo ml={2} color="white" />
      <Box flex={1} />
      <Hidden smDown>
        <Box pr={3} className={classes.searchRoot}>
          <InputBase placeholder={'Search here...'} inputProps={{ 'aria-label': 'search' }} />
          <SearchIcon />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <SearchPopover iconClassName={classes.iconBtn} />
      </Hidden>
      <AppsMenu />
      <HeaderMessages />
      <HeaderNotifications />
      <Box className={classes.langRoot}>
        <LanguageSwitcher />
      </Box>
    </Toolbar>
  );
};

export default Header;

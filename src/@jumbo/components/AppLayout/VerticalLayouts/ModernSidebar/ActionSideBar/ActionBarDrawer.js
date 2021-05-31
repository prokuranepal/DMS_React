import React from 'react';
import { Box, fade, IconButton, makeStyles } from '@material-ui/core';
import Notifications from './Notifications';
import Messages from './Messages';
import Search from './Search';
import Settings from './Settings';
import CmtDrawer from '../../../../../../@coremat/CmtDrawer';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  actionSidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px 5px',
    width: 65,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  contentArea: {
    width: 300,
    [theme.breakpoints.up('sm')]: {
      width: 557,
    },
  },
  scrollbarRoot: {
    height: '100vh',
    padding: 30,
  },
  iconBtn: {
    position: 'relative',
    color: fade(theme.palette.common.dark, 0.38),
    '&:hover, &:focus, &.active': {
      color: theme.palette.primary.main,
      backgroundColor: fade(theme.palette.primary.main, 0.08),
    },
  },
  counterRoot: {
    color: theme.palette.common.white,
    border: `solid 1px ${theme.palette.common.white}`,
    backgroundColor: theme.palette.warning.main,
    width: 20,
  },
}));

const ActionBarDrawer = ({ activeOption, onIconClick, onDrawerClose, ...rest }) => {
  const classes = useStyles();

  return (
    <CmtDrawer variant="temporary" anchor="left" onClose={onDrawerClose} {...rest}>
      <Box className={clsx(classes.root)}>
        <Box className={classes.actionSidebar}>
          <IconButton className={classes.iconBtn} onClick={onDrawerClose}>
            <CloseIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.iconBtn, {
              active: activeOption === 'search',
            })}
            onClick={() => onIconClick('search')}>
            <SearchIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.iconBtn, {
              active: activeOption === 'messages',
            })}
            onClick={() => onIconClick('messages')}>
            <MessageIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.iconBtn, {
              active: activeOption === 'notifications',
            })}
            onClick={() => onIconClick('notifications')}>
            <Badge badgeContent={4} classes={{ badge: classes.counterRoot }}>
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            className={clsx(classes.iconBtn, {
              active: activeOption === 'settings',
            })}
            onClick={() => onIconClick('settings')}>
            <SettingsIcon />
          </IconButton>
        </Box>
        <Box className={classes.contentArea}>
          <PerfectScrollbar className={classes.scrollbarRoot}>
            {activeOption === 'notifications' && <Notifications />}
            {activeOption === 'messages' && <Messages />}
            {activeOption === 'search' && <Search />}
            {activeOption === 'settings' && <Settings />}
          </PerfectScrollbar>
        </Box>
      </Box>
    </CmtDrawer>
  );
};

export default ActionBarDrawer;

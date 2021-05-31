import React, { useContext, useEffect, useState } from 'react';
import { Box, fade, Hidden, IconButton, withWidth } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import SettingsIcon from '@material-ui/icons/Settings';
import CmtDropdownMenu from '../../../../../../@coremat/CmtDropdownMenu';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import { useDispatch } from 'react-redux';
import { AuhMethods } from '../../../../../../services/auth';
import { CurrentAuthMethod } from '../../../../../constants/AppConstants';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import SidebarToggleHandler from '../../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler';
import LayoutContext from '../../../../../../@coremat/CmtLayouts/Vertical/LayoutContext/LayoutContext';
import Logo from '../../../partials/Logo';
import ActionBarDrawer from './ActionBarDrawer';
import AppContext from '../../../../contextProvider/AppContextProvider/AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '10px 24px 10px 15px',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
      padding: '16px 5px',
    },
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  iconBtn: {
    position: 'relative',
    color: fade(theme.palette.common.white, 0.9),
    '&:hover, &:focus': {
      color: theme.palette.common.white,
    },
  },
  counterRoot: {
    color: theme.palette.common.white,
    border: `solid 1px ${theme.palette.common.white}`,
    backgroundColor: theme.palette.warning.main,
    width: 20,
  },
}));

const actionsList = [
  {
    icon: <PersonIcon />,
    label: 'Account',
  },
  {
    icon: <ExitToAppIcon />,
    label: 'Logout',
  },
];

const ActionSideBar = ({ setSidebarWidth, width }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isDrawerOpen, setDrawerStatus] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const { isOpen, setOpen } = useContext(LayoutContext);
  const { sidebarSize } = useContext(AppContext);

  useEffect(() => {
    if (isOpen && (width === 'lg' || width === 'xl')) {
      setSidebarWidth(0);
    } else {
      setSidebarWidth(sidebarSize);
    }
  }, [isOpen, width]);

  useEffect(() => {
    if (activeOption && !isDrawerOpen) {
      setDrawerStatus(true);
    }
  }, [activeOption]);

  const onItemClick = item => {
    if (item.label === 'Logout') {
      dispatch(AuhMethods[CurrentAuthMethod].onLogout());
    }
  };

  const onIconClick = option => {
    setActiveOption(option);
  };

  const onDrawerClose = () => {
    setDrawerStatus(false);
    setActiveOption(null);
  };

  return (
    <Box className={clsx(classes.root, 'actionSidebar')}>
      <Box display="flex" alignItems="center">
        <SidebarToggleHandler className={classes.iconBtn}>
          {isOpen && (width === 'lg' || width === 'xl') && <CloseIcon />}
        </SidebarToggleHandler>
        <Hidden lgUp>
          <Logo color="white" ml={{ xs: 3, sm: 6 }} />
        </Hidden>
      </Box>
      <Box display="flex" flexDirection={{ xs: 'row', lg: 'column' }} ml={{ xs: 'auto', lg: 'unset' }}>
        <IconButton className={classes.iconBtn} onClick={() => onIconClick('search')}>
          <SearchIcon />
        </IconButton>

        <IconButton className={classes.iconBtn} onClick={() => onIconClick('messages')}>
          <MessageIcon />
        </IconButton>

        <IconButton className={classes.iconBtn} onClick={() => onIconClick('notifications')}>
          <Badge badgeContent={4} classes={{ badge: classes.counterRoot }}>
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {isOpen && (width === 'lg' || width === 'xl') && (
          <IconButton className={classes.iconBtn} onClick={() => setOpen(!isOpen)}>
            <MoreVertIcon />
          </IconButton>
        )}
      </Box>
      <Box display="flex" flexDirection={{ xs: 'row', lg: 'column' }} mt={{ xs: 'unset', lg: 'auto' }}>
        <IconButton className={classes.iconBtn} onClick={() => onIconClick('settings')}>
          <SettingsIcon />
        </IconButton>

        <CmtDropdownMenu
          onItemClick={onItemClick}
          TriggerComponent={<CmtAvatar src={'https://via.placeholder.com/150x150'} />}
          items={actionsList}
        />
      </Box>

      <ActionBarDrawer
        activeOption={activeOption}
        open={isDrawerOpen}
        onDrawerClose={onDrawerClose}
        onIconClick={onIconClick}
      />
    </Box>
  );
};

export default withWidth()(ActionSideBar);

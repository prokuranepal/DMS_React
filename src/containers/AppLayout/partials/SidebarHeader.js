import React, {useState} from 'react';
import { Box, MenuItem, MenuList, Paper, Popover, Typography } from '@material-ui/core';
import CmtAvatar from '../../../@coremat/CmtAvatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from '../../../assets/profile.png';
import { Redirect } from 'react-router';
import * as authActions from '../../../store/actions/auth';
// import { AuhMethods } from '../../../../services/auth';
// import { CurrentAuthMethod } from '../../@jumbo/constants/AppConstants';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 16px 12px 16px',
    borderBottom: `solid 1px ${theme.palette.sidebar.borderColor}`,
    // borderBottom: `solid 1px black`
  },
  userInfo: {
    paddingTop: 24,
    transition: 'all 0.1s ease',
    height: 75,
    opacity: 1,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: 'all 0.3s ease',
    },
  },
  userTitle: {
    color: theme.palette.sidebar.textDarkColor,
    // color: 'black',
    marginBottom: 8,
  },
  userSubTitle: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0.25,
  },
}));

const SidebarHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const selfUserData = useSelector(({users}) => users.selfUserData)
  const [link, setLink] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onLogoutClick = () => {
    handlePopoverClose();
    dispatch(authActions.logout());
  };
  
  const linkProfile = () => {
    handlePopoverClose();
    const l = <Redirect to="/app/profile" />
    setLink(l);
  }

  

  return (
    <Box className={classes.root}>
      <CmtAvatar src={ProfileImage} alt="User Avatar" />
      <Box className={classes.userInfo} onClick={handlePopoverOpen}>
        <Box className="pointer" display="flex" justifyContent="space-between" alignItems="flex-end">
          <Box mr={2}>
            <Typography className={classes.userTitle} component="h3" variant="h6">
              {selfUserData?selfUserData.name:null}
            </Typography>
            <Typography className={classes.userSubTitle}>{selfUserData !== null && selfUserData.bodiesId !== undefined?selfUserData.bodiesId.name:'Super Admin'}</Typography>
          </Box>
          <ArrowDropDownIcon />
        </Box>
      </Box>

      {open && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          container={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}>
          <Paper elevation={8}>
            <MenuList>
              {link}
              {/* <MenuItem onClick={linkProfile}>
                <PersonIcon />
                <Box ml={2}>Profile</Box>
              </MenuItem> */}
              <MenuItem onClick={onLogoutClick}>
                <ExitToAppIcon />
                <Box ml={2}>Logout</Box>
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      )}
    </Box>
  );
};

export default SidebarHeader;

import React from 'react';
import { Box } from '@material-ui/core';
import HeaderNavigations from '../../partials/Header/HeaderNavigations';
import AppsMenu from '../../partials/Header/AppsMenu';
import HeaderMessages from '../../partials/Header/HeaderMessages';
import HeaderNotifications from '../../partials/Header/HeaderNotifications';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const HeaderTopMenus = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <HeaderNavigations />
      <Box display="flex" alignItems="center" ml="auto">
        <AppsMenu />
        <HeaderMessages />
        <HeaderNotifications />
      </Box>
    </Box>
  );
};

export default HeaderTopMenus;

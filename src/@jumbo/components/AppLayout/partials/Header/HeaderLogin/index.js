import React from 'react';
import { Box, Button, Divider } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  loginSection: {
    display: 'flex',
    alignItems: 'center',
    '& > .MuiDivider-root': {
      height: 14,
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: theme.palette.text.secondary,
    },
  },
}));

const HeaderLogin = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box display="flex" alignItems="center" color="warning.main">
        <CachedIcon fontSize="small" />
        <Box ml={3}>This is primary alert-check it out!</Box>
      </Box>
      <Box className={classes.loginSection}>
        <Button className="Cmt-btn" size="small">
          Login
        </Button>
        <Divider className="Cmt-divider" orientation="vertical" />
        <Button className="Cmt-btn" size="small">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderLogin;

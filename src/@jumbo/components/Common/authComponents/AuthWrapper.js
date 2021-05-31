import React from 'react';
import { Box, fade } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
const bgImage = '/images/auth/auth-bg-pattern.png';

const useStyles = makeStyles(theme => ({
  authWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: props => (props.variant === 'bgColor' ? `URL(${bgImage})` : ''),
    backgroundPosition: props => (props.variant === 'bgColor' ? 'center center' : ''),
    backgroundRepeat: props => (props.variant === 'bgColor' ? 'no-repeat' : ''),
    backgroundSize: props => (props.variant === 'bgColor' ? 'cover' : ''),
    position: 'relative',
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      padding: 40,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: props => (props.variant === 'bgColor' ? fade(theme.palette.primary.main, 0.5) : ''),
    },
  },
  authCard: {
    position: 'relative',
    zIndex: 3,
    maxWidth: props => (props.variant === 'default' ? '850px' : '550px'),
    width: '100%',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: props => (props.variant === 'default' ? '1050px' : '750px'),
    },
  },
}));

const AuthWrapper = ({ children, variant }) => {
  const classes = useStyles({ variant });
  return (
    <Box className={classes.authWrap}>
      <Box className={classes.authCard}>{children}</Box>
    </Box>
  );
};

export default AuthWrapper;

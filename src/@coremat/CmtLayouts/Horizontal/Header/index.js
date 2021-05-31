import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  appHeader: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    boxShadow: '0 1px 8px -1px rgba(0,0,0,.2)',
    position: 'relative',
    zIndex: 99,
  },
}));

const CmtHeader = React.forwardRef(function Header(props, ref) {
  const { children, className } = props;

  const headerRef = useRef(null);
  const classes = useStyles();

  return (
    <Box ref={headerRef} className={clsx(classes.appHeader, className, 'Cmt-header')}>
      {children}
    </Box>
  );
});

export default CmtHeader;

CmtHeader.defaultProps = {
  name: 'Header',
};

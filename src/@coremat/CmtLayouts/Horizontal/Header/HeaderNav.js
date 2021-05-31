import React, { useImperativeHandle } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  headerNav: {
    width: '100%',
    minHeight: 46,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
}));

const CmtHeaderNav = React.forwardRef(function HeaderNav(props, ref) {
  const { type, children } = props;

  useImperativeHandle(ref, () => ({
    headerType: type,
  }));

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={clsx(classes.headerNav, 'Cmt-header-nav')} {...props}>
      <Box className="Cmt-container">{children}</Box>
    </Box>
  );
});

export default CmtHeaderNav;

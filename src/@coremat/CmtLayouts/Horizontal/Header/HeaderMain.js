import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  headerMain: {
    width: '100%',
    boxSizing: 'border-box',
  },
  '@global': {
    '.Cmt-container': {
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: 15,
      paddingRight: 15,
      width: '100%',
      boxSizing: 'border-box',
      [theme.breakpoints.up('md')]: {
        width: 900,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1100,
      },
      [theme.breakpoints.up('xl')]: {
        width: 1400,
      },
    },
  },
}));

const CmtHeaderMain = React.forwardRef(function HeaderMain(props, ref) {
  const { children } = props;

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={clsx(classes.headerMain, 'Cmt-headerMain')} {...props}>
      <Box className="Cmt-container">{children}</Box>
    </Box>
  );
});

export default CmtHeaderMain;

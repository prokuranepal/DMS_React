import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  headerTop: {
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 14,
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

const CmtHeaderTop = React.forwardRef(function HeaderTop(props, ref) {
  const { children } = props;

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={classes.headerTop} {...props}>
      <Box className="Cmt-container">{children}</Box>
    </Box>
  );
});

export default CmtHeaderTop;

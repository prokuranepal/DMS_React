import React, { useImperativeHandle } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  appFooter: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.15)',
  },
  appFooterWrapper: {
    padding: '12px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 64,
    marginRight: 'auto',
    marginLeft: 'auto',
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
}));

const CmtFooter = React.forwardRef(function CmtFooter(props, ref) {
  const { type, children } = props;

  useImperativeHandle(ref, () => ({
    headerType: type,
  }));

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={clsx(classes.appFooter, 'Cmt-footer')} bgcolor="primary.main">
      <Box ref={contentRef} className={clsx(classes.appFooterWrapper, 'Cmt-footer-wrapper')}>
        {children}
      </Box>
    </Box>
  );
});

export default CmtFooter;
CmtFooter.defaultProps = {
  type: 'fixed',
  name: 'LayoutFooter',
};
CmtFooter.propTypes = {
  type: PropTypes.oneOf(['fixed', 'static']),
};

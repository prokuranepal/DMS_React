import React, { useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  appHeader: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.primary.main,
  },
}));

const CmtHeader = React.forwardRef(function LayoutHeader(props, ref) {
  const { type, fullHeader, className, children } = props;

  useImperativeHandle(ref, () => ({
    headerType: type,
    fullHeader: fullHeader,
  }));

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <AppBar position="static" ref={contentRef} className={clsx(classes.appHeader, className, 'Cmt-header')}>
      {children}
    </AppBar>
  );
});

export default CmtHeader;
CmtHeader.defaultProps = {
  type: 'fixed',
  name: 'LayoutHeader',
  fullHeader: false,
};
CmtHeader.propTypes = {
  type: PropTypes.oneOf(['fixed', 'static']),
  fullHeader: PropTypes.bool,
};

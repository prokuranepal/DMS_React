import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
  },
  listFooterLoaderRoot: {
    width: '100%',
    display: 'flex',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    padding: 8,
    borderTop: `1px solid ${theme.palette.sidebar.borderColor}`,
    boxSizing: 'border-box',
  },
}));

const ListFooter = ({ loading, footerText }) => {
  const classes = useStyles();

  return loading ? (
    <Box className={classes.listFooterLoaderRoot}>
      <CircularProgress size={16} />
      <Box component="span" ml={2}>
        Loading...
      </Box>
    </Box>
  ) : (
    <Box className={clsx(classes.listFooterRoot, 'Cmt-list-footer')}>
      <Box component="p">{footerText}</Box>
    </Box>
  );
};

ListFooter.prototype = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

ListFooter.defaultProps = {
  loading: false,
};

export default ListFooter;

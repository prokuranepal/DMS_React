import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
  },
}));

const GridFooter = ({ loading, footerText }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <Box width={1} display="flex" color="text.secondary" justifyContent="center" p={2}>
        <CircularProgress size={16} />
        <Box component="span" ml={2}>
          Loading...
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={clsx(classes.listFooterRoot, 'Cmt-list-footer')}>
        <Box component="p">{footerText}</Box>
      </Box>
    );
  }
};

GridFooter.propTypes = {
  loading: PropTypes.bool,
  footerText: PropTypes.string,
};

GridFooter.defaultProps = {
  loading: false,
  footerText: '',
};

export default GridFooter;

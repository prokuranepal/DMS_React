import React from 'react';
import { CardActions, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
    padding: '8px 24px',
  },
}));

const CmtCardActions = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <CardActions className={clsx(classes.root, className, 'CmtCard-Actions')} {...rest}>
      {children}
    </CardActions>
  );
};

CmtCardActions.propTypes = {
  className: PropTypes.string,
};

export default CmtCardActions;

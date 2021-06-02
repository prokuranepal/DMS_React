import React from 'react';
import { CardActionArea, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },
}));

const CmtCardActionArea = ({ className, children, ...rest }) => {
  const classes = useStyles();
  return (
    <CardActionArea className={clsx(classes.root, className, 'CmtCard-ActionArea')} {...rest}>
      {children}
    </CardActionArea>
  );
};

CmtCardActionArea.propTypes = {
  className: PropTypes.string,
};

export default CmtCardActionArea;

import React from 'react';
import { CardContent, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: props => ({
    padding: 24,
  }),
}));

const CmtCardContent = ({ children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <CardContent className={clsx(classes.root, 'Cmt-card-content', className)} {...rest}>
      {children}
    </CardContent>
  );
};

export default CmtCardContent;

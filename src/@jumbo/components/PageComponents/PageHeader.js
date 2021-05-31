import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  pageHeaderRoot: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  titleRoot: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
}));

const PageHeader = ({ heading, breadcrumbComponent, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.pageHeaderRoot, 'page-header')} mb={{ xs: 5, md: 6, lg: 8 }} {...rest}>
      <Typography component="div" variant="h1" className={clsx(classes.titleRoot, 'title')}>
        {heading}
      </Typography>
      <Box ml={{ sm: 'auto' }}>{breadcrumbComponent}</Box>

      {children}
    </Box>
  );
};

export default PageHeader;

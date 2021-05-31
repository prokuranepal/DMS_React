import React from 'react';
import Box from '@material-ui/core/Box';
import { PageBreadcrumbs, PageHeader } from '../index';
import Slide from '@material-ui/core/Slide';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  pageFull: {
    width: '100%',
  },
}));

const PageContainer = ({ heading, breadcrumbs, children, className, restProps }) => {
  const classes = useStyles();

  return (
    <Slide in={true} direction="up" mountOnEnter unmountOnExit>
      <Box className={clsx(classes.pageFull, className)} {...restProps}>
        {(heading || breadcrumbs) && (
          <PageHeader heading={heading} breadcrumbComponent={breadcrumbs && <PageBreadcrumbs items={breadcrumbs} />} />
        )}
        {children}
      </Box>
    </Slide>
  );
};

export default PageContainer;

import React from 'react';
import { Box, Hidden, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageContainer from './PageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  contentArea: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.typography.pxToRem(30),
      width: `calc(100% - ${theme.typography.pxToRem(175)})`,
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.typography.pxToRem(54),
    },
  },
  contentSidebar: {
    width: theme.typography.pxToRem(175),
    height: `calc(100vh - ${theme.typography.pxToRem(102)})`,
    position: 'sticky',
    top: 30,
    overflowY: 'auto',
    flexShrink: 0,
  },
}));

const ComponentsDemo = ({ pageTitle, menus, breadcrumbs, children }) => {
  const classes = useStyles();

  return (
    <PageContainer heading={pageTitle} breadcrumbs={breadcrumbs}>
      <Box className={classes.root}>
        <Box className={classes.contentArea}>{children}</Box>
        <Hidden xsDown>
          <Box className={classes.contentSidebar}>
            <Typography component="h4" variant="h4">
              Contents
            </Typography>
            <List>
              {menus.map((menu, index) => (
                <ListItem key={index} dense button component="a" href={`#${menu.link}`}>
                  <ListItemText primary={menu.label} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Hidden>
      </Box>
    </PageContainer>
  );
};
export default ComponentsDemo;

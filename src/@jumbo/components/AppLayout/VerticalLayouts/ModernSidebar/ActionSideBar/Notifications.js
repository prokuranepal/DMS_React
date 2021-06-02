import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import CmtList from '../../../../../../@coremat/CmtList';
import NotificationItem from '../../../partials/Header/HeaderNotifications/NotificationItem';
import EmptyResult from './EmptyResult';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 10,
    color: theme.palette.text.secondary,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
}));

const notifications = [];
const Notifications = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.header}>
        <Box fontSize={22} fontWeight={700}>
          Notifications
        </Box>
        <Button color="primary">Dismiss</Button>
      </Box>
      <Box className={classes.sectionHeading}>Latest Notifications</Box>
      {notifications.length > 0 ? (
        <CmtList data={notifications} renderRow={(item, index) => <NotificationItem key={index} item={item} />} />
      ) : (
        <EmptyResult content="No record found" />
      )}
    </Box>
  );
};

export default Notifications;

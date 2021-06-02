import React, { useState } from 'react';
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CmtList from '../CmtList';
import CmtMediaObject from '../CmtMediaObject';
import Avatar from '@material-ui/core/Avatar';
import CmtNotificationItem from './CmtNotificationItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  headingRoot: {
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const RenderRow = ({ notification, onReadUnread }) => {
  const { name, avatar, content, icon, time, media, status } = notification;
  return (
    <CmtNotificationItem
      content={
        <CmtMediaObject
          style={{
            alignItems: 'center',
          }}
          avatar={avatar}
          avatarPos="center"
          avatarProps={{
            style: { height: 48, width: 48 },
          }}
          title={
            <Typography component="span">
              <Typography component="span">{content}</Typography>
              <Typography component="span" color="primary">
                {name}
              </Typography>
            </Typography>
          }
          subTitle={
            <Box display="flex" alignItems="center">
              {icon}
              <Typography component="span" style={{ marginLeft: 4 }}>
                {time}
              </Typography>
            </Box>
          }
          footerComponent={
            media && (
              <Avatar
                src={media}
                variant="square"
                style={{
                  height: 48,
                  width: 48,
                }}
              />
            )
          }
        />
      }
      readState={status === 'read'}
      onReadUnread={() => onReadUnread(notification)}
      actionMenu={
        <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
      }
    />
  );
};

const CmtNotifications = ({ title, controlOption }) => {
  const classes = useStyles();
  const [data, setData] = useState(notifications);

  const handleReadUnread = notification => {
    notification.status = notification.status === 'read' ? 'unread' : 'read';

    setData(
      data.map(item => {
        if (item.id === notification.id) {
          return notification;
        }

        return item;
      }),
    );
  };

  return (
    <Box p={1}>
      <Box className={classes.headingRoot}>
        <Box component="h3" color="text.primary" my={0}>
          {title}
        </Box>
        <Box ml="auto">{controlOption}</Box>
      </Box>

      <CmtList
        data={data}
        renderRow={(item, index) => <RenderRow notification={item} key={index} onReadUnread={handleReadUnread} />}
        onEndReached={() => {}}
        footerProps={{
          loading: true,
          footerText: 'No More Notifications',
        }}
      />
    </Box>
  );
};

CmtNotifications.prototype = {
  title: PropTypes.string,
};

CmtNotifications.defaultProps = {
  title: 'Notifications',
};
export default CmtNotifications;

const notifications = [
  {
    id: 1,
    name: 'Remy Sharp',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/1.jpg',
    icon: <AllInclusiveIcon />,
    time: '5h',
    media: 'https://material-ui.com/static/images/grid-list/camera.jpg',
    status: 'unread',
  },
  {
    id: 2,
    name: 'Travis Howard',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/2.jpg',
    icon: <InfoIcon />,
    time: '10h',
    media: '',
    status: 'unread',
  },
  {
    id: 3,
    name: 'Sumitra Choudhary',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
    icon: <AllInclusiveIcon />,
    time: '1d',
    media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    status: 'unread',
  },
  {
    id: 4,
    name: 'Cindy Baker',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
    icon: 'favorite',
    time: '2d',
    media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    status: 'unread',
  },
  {
    id: 5,
    name: 'Agnes Walker',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
    icon: <AllInclusiveIcon />,
    time: '5d',
    media: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    status: 'unread',
  },
  {
    id: 6,
    name: 'Trevor Henderson',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/6.jpg',
    icon: <InfoIcon />,
    time: '1w',
    media: '',
    status: 'unread',
  },
  {
    id: 7,
    name: 'Sumitra Choudhary',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
    icon: <AllInclusiveIcon />,
    time: '4w',
    media: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    status: 'unread',
  },
  {
    id: 8,
    name: 'Sumitra Choudhary',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
    icon: 'favorite',
    time: '1m',
    media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    status: 'unread',
  },
  {
    id: 9,
    name: 'Trevor Henderson',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
    icon: <InfoIcon />,
    time: '2m',
    media: '',
    status: 'unread',
  },
  {
    id: 10,
    name: 'Sharp Henderson',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/7.jpg',
    icon: 'favorite',
    time: '5m',
    media: '',
    status: 'unread',
  },
  {
    id: 11,
    name: 'Travis  Baker',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/3.jpg',
    icon: <AllInclusiveIcon />,
    time: '6m',
    media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    status: 'unread',
  },
  {
    id: 12,
    name: 'Agnes  Baker',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/4.jpg',
    icon: <InfoIcon />,
    time: '6m',
    media: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    status: 'unread',
  },
  {
    id: 13,
    name: 'Sumitra Henderson',
    content: 'You have a new friend suggestion: ',
    avatar: 'https://material-ui.com/static/images/avatar/5.jpg',
    icon: <AllInclusiveIcon />,
    time: '7m',
    media: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    status: 'read',
  },
];

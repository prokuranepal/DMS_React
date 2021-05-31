import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import EmailIcon from '@material-ui/icons/Email';
import CakeIcon from '@material-ui/icons/Cake';
import CmtMediaObject from '../../../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import { getDateElements } from '../../../../../utils/dateHelper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  feedItemRoot: {
    padding: '10px 0',
    position: 'relative',
    borderBottom: `1px solid ${fade(theme.palette.common.dark, 0.035)}`,
    '& .Cmt-media-object': {
      alignItems: 'center',
    },
    '& .Cmt-media-image': {
      alignSelf: 'flex-start',
      width: 56,
    },
    '& .Cmt-media-body': {
      width: 'calc(100% - 56px)',
      flex: 'inherit',
    },
  },
  titleRoot: {
    letterSpacing: 0.25,
    marginBottom: 6,
    cursor: 'pointer',
  },
}));

const icons = {
  POSTING: <MessageIcon style={{ color: '#836AFF' }} />,
  SHARED_POST: <ShareIcon style={{ color: '#0795F4' }} />,
  INVITATION: <EmailIcon style={{ color: '#00C4B4' }} />,
  BIRTHDAY: <CakeIcon style={{ color: '#EF933C' }} />,
};

const getPostContent = (item, classes) => (
  <Typography component="div" variant="h5" className={classes.titleRoot}>
    <Box component="span" color="primary.main">
      {item.user.name}
    </Box>
    <Box component="span" ml={1}>
      has recently posted an
    </Box>
    <Box component="span" ml={1}>
      {item.metaData.post.type}
    </Box>
  </Typography>
);

const getSharedContent = (item, classes) => (
  <Typography component="div" variant="h5" className={classes.titleRoot}>
    <Box component="span" color="primary.main">
      {item.user.name}
    </Box>
    <Box component="span" ml={1}>
      has shared
    </Box>
    <Box component="span" ml={1} color="primary.main">
      {`${item.metaData.post.owner.name}'s`}
    </Box>
    <Box component="span" ml={1}>
      post.
    </Box>
  </Typography>
);

const getBirthdayContent = (item, classes) => (
  <Typography component="div" variant="h5" className={classes.titleRoot}>
    <Box component="span" color="blue">
      {item.user.name}
    </Box>
    <Box component="span" ml={1}>
      has birthday today.
    </Box>
  </Typography>
);

const getInvitationContent = (item, classes) => (
  <Typography component="div" variant="h5" className={classes.titleRoot}>
    <Box component="span" color="blue">
      {item.metaData.user.name}
    </Box>
    <Box component="span" ml={1}>
      has sent you a group invitation for
    </Box>
    <Box component="span" color="blue" ml={1}>
      {item.metaData.group.name}
    </Box>
  </Typography>
);

const NotificationItem = ({ item }) => {
  const classes = useStyles();

  const getTitle = (item, classes) => {
    switch (item.type) {
      case 'POSTING':
        return getPostContent(item, classes);
      case 'SHARED_POST':
        return getSharedContent(item, classes);
      case 'INVITATION':
        return getInvitationContent(item, classes);
      case 'BIRTHDAY':
        return getBirthdayContent(item, classes);
      default:
        return '';
    }
  };

  const getSubTitle = () => (
    <Box display="flex" alignItems="center" fontSize={12} color="text.disabled">
      <Box fontSize={16} clone>
        {icons[item.type]}
      </Box>
      <Box ml={2}>{getDateElements(item.date).time}</Box>
    </Box>
  );

  return (
    <Box className={classes.feedItemRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar size={40} src={item.user.profile_pic} alt={item.user.name} />}
        title={getTitle(item, classes)}
        subTitle={getSubTitle()}
      />
    </Box>
  );
};

export default NotificationItem;

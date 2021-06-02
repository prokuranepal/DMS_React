import React from 'react';
import { Box, fade } from '@material-ui/core';
import CmtMediaObject from '../../../../../../@coremat/CmtMediaObject';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import { getDateElements } from '../../../../../utils/dateHelper';
import ReplyIcon from '@material-ui/icons/Reply';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
    '& .Cmt-media-header-content': {
      width: 'calc(100% - 75px)',
      flex: 'inherit',
    },
    '& .Cmt-media-actions': {
      textAlign: 'right',
    },
  },
  titleRoot: {
    letterSpacing: 0.25,
    fontSize: 14,
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  subTitleRoot: {
    letterSpacing: 0.4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginBottom: 0,
  },
}));

const MessageItem = ({ item }) => {
  const classes = useStyles();
  return (
    <Box className={classes.feedItemRoot}>
      <CmtMediaObject
        avatarPos="center"
        avatar={<CmtAvatar size={40} src={item.user.profile_pic} alt={item.user.name} />}
        title={item.user.name}
        titleProps={{ className: classes.titleRoot }}
        subTitle={item.message}
        subTitleProps={{ className: classes.subTitleRoot }}
        actionsComponent={
          <Box fontSize={12} color="text.disabled">
            {getDateElements(item.date).time}
          </Box>
        }>
        <Box display="flex" alignItems="center" mt={2} fontSize={12} color="text.secondary">
          <Box display="flex" alignItems="center" className="pointer">
            <Box fontSize={16} clone>
              <ReplyIcon />
            </Box>
            <Box ml={2}>Reply</Box>
          </Box>
          <Box ml={4} display="flex" alignItems="center" className="pointer">
            <Box fontSize={16} clone>
              <CheckCircleOutlineIcon />
            </Box>
            <Box ml={2}>Read</Box>
          </Box>
        </Box>
      </CmtMediaObject>
    </Box>
  );
};

export default MessageItem;

import React from 'react';
import { Box, fade, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    '&:not(:first-child)': {
      borderTop: `1px solid ${fade(theme.palette.divider, 0.035)}`,
    },
  },
  dotBtn: {
    position: 'relative',
    '& .MuiSvgIcon-root': {
      fontSize: 10,
      width: 10,
      height: 10,
    },
  },
}));

const CmtNotificationItem = ({ content, readIcon, unReadIcon, readState, className, onReadUnread, actionMenu, ...rest }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, 'CmtNotificationItem-root', className)} {...rest}>
      <Box flex={1}>{content}</Box>
      <Box display="flex" flexDirection="column" alignItems="center" ml={3}>
        {actionMenu}
        <Tooltip title={readState ? 'Mark as unread' : 'Mark as read'}>
          <IconButton className={clsx(classes.dotBtn, 'Cmt-dot-btn')} size="small" onClick={onReadUnread}>
            {readState ? readIcon || <Brightness1Icon /> : unReadIcon || <RadioButtonUncheckedIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

CmtNotificationItem.prototype = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  readIcon: PropTypes.element,
  unReadIcon: PropTypes.element,
  readState: PropTypes.bool,
  onReadUnread: PropTypes.func,
  actionMenu: PropTypes.element,
};

CmtNotificationItem.defaultProps = {
  readState: false,
  readIcon: '',
  unReadIcon: '',
};

export default CmtNotificationItem;

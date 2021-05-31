import React from 'react';
import { Box, fade, IconButton, makeStyles, Popover, Tooltip, useTheme } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import CmtCardHeader from '../../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../../@coremat/CmtCard/CmtCardContent';
import CmtCard from '../../../../../../@coremat/CmtCard';
import CmtList from '../../../../../../@coremat/CmtList';
import MessageItem from './MessageItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      paddingTop: 4,
      paddingBottom: 4,
    },
    '& .Cmt-card-content': {
      padding: '0 0 16px !important',
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  iconRoot: {
    color: fade(theme.palette.common.white, 0.38),
    '&:hover, &:focus': {
      color: theme.palette.common.white,
    },
  },
  scrollbarRoot: {
    height: 300,
    padding: 16,
  },
  popoverRoot: {
    '& .MuiPopover-paper': {
      width: 375,
    },
  },
}));

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const messages = [];

const HeaderMessages = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const onOpenPopOver = event => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopOver = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Tooltip title="Messages">
        <IconButton onClick={onOpenPopOver} className={clsx(classes.iconRoot, 'Cmt-appIcon')}>
          <MessageIcon />
        </IconButton>
      </Tooltip>
      <Popover
        className={classes.popoverRoot}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClosePopOver}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <CmtCard className={classes.cardRoot}>
          <CmtCardHeader
            title="Messages"
            actionsPos="top-corner"
            actions={actions}
            separator={{
              color: theme.palette.borderColor.dark,
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          />
          <CmtCardContent>
            {messages.length > 0 ? (
              <PerfectScrollbar className={classes.scrollbarRoot}>
                <CmtList data={messages} renderRow={(item, index) => <MessageItem key={index} item={item} />} />
              </PerfectScrollbar>
            ) : (
              <Box p={6}>
                <Typography variant="body2">No messages found</Typography>
              </Box>
            )}
          </CmtCardContent>
        </CmtCard>
      </Popover>
    </Box>
  );
};

export default HeaderMessages;

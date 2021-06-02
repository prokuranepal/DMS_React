import React from 'react';
import { Box, fade, IconButton, makeStyles, Popover, Tooltip, useTheme } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtGridView from '../../../../@coremat/CmtGridView';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      paddingTop: 4,
      paddingBottom: 4,
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
}));

const actions = [
  {
    label: 'More Detail',
  },
  {
    label: 'Close',
  },
];

const applications = [];

const appItem = (item, index, onClick) => {
  return (
    <Box
      key={index}
      py={2}
      className="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onClick={() => onClick(item.path)}>
      <CmtAvatar style={{ backgroundColor: item.bgColor }} size={62}>
        {item.icon}
      </CmtAvatar>
      <Box mt={5} fontSize={16} fontWeight="bold" color="#666666">
        {item.name}
      </Box>
    </Box>
  );
};

const AppsMenu = () => {
  const classes = useStyles();
  const history = useHistory();
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

  const onClickApp = path => {
    history.push(path);
    onClosePopOver();
  };

  return (
    <Box>
      <Tooltip title="Applications">
        <IconButton onClick={onOpenPopOver} className={clsx(classes.iconRoot, 'Cmt-appIcon')}>
          <AppsIcon />
        </IconButton>
      </Tooltip>

      <Popover
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
            title="Applications"
            actionsPos="top-corner"
            actions={actions}
            separator={{
              // color: theme.palette.borderColor.dark,
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          />
          <CmtCardContent>
            {applications.length > 0 ? (
              <CmtGridView
                itemPadding={24}
                column={2}
                data={applications}
                renderRow={(item, index) => appItem(item, index, onClickApp)}
              />
            ) : (
              <Typography variant="body2">No applications found</Typography>
            )}
          </CmtCardContent>
        </CmtCard>
      </Popover>
    </Box>
  );
};

export default AppsMenu;

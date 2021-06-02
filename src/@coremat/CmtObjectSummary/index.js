import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';
import CmtAvatar from '../CmtAvatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&.vertical': {
      flexDirection: 'column',
      textAlign: 'center',
    },
    '&.horizontal': {
      '& $userInfo': {
        marginLeft: 15,
        marginTop: 0,
      },
    },
  },
  badgeRoot: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.15)',
    borderRadius: 30,
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  badgeAvatarRoot: {
    position: 'relative',
    '&.top.center': {
      marginTop: 14,
    },
    '&.top.center .MuiBadge-badge': {
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '&.bottom.left, &.bottom.center, &.bottom.right': {
      marginBottom: 14,
      '& .vertical': {
        paddingBottom: 16,
      },
    },
    '&.bottom.center .MuiBadge-badge': {
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
    },
  },
  userInfo: {
    position: 'relative',
    marginTop: 6,
  },
  title: {
    fontSize: 14,
    color: theme.palette.text.primary,
    margin: 0,
  },
  subTitle: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    margin: 0,
  },
}));

const CmtObjectSummary = ({
  align,
  anchorOrigin,
  showItemBadge,
  avatar,
  avatarProps,
  badge,
  badgeProps,
  title,
  titleProps,
  subTitle,
  subTitleProps,
}) => {
  const classes = useStyles({ align, anchorOrigin });

  let badgeContent = {
    badgeContent: badge,
    color: 'secondary',
    ...badgeProps,
  };

  if (typeof badge !== 'string') {
    const node = <Box className={clsx(classes.badgeRoot, 'Cmt-badge')}>{badge}</Box>;
    badgeContent = { badgeContent: node, ...badgeProps };
  }

  const getAvatarComponent = () => {
    if (showItemBadge) {
      if (typeof avatar === 'string') {
        return <CmtAvatar src={avatar} alt={title} {...avatarProps} />;
      }
      return avatar;
    }

    return (
      <RenderBadge {...{ badge, anchorOrigin, badgeContent, classes }}>
        {typeof avatar === 'string' ? <CmtAvatar src={avatar} alt={title} {...avatarProps} /> : avatar}
      </RenderBadge>
    );
  };

  const componentContent = () => {
    return (
      <Box className={clsx(classes.root, align)}>
        {getAvatarComponent()}
        <Box className={clsx(classes.userInfo, 'Cmt-user-info')}>
          <Box component="p" className={clsx(classes.title, 'Cmt-title')} {...titleProps}>
            {title}
          </Box>
          <Box component="p" className={clsx(classes.subTitle, 'Cmt-sub-title')} {...subTitleProps}>
            {subTitle}
          </Box>
        </Box>
      </Box>
    );
  };

  const getComponent = () => {
    if (showItemBadge) {
      return <RenderBadge {...{ badge, anchorOrigin, badgeContent, classes }}>{componentContent()}</RenderBadge>;
    }
    return componentContent();
  };

  return getComponent();
};

const RenderBadge = ({ badge, badgeContent, anchorOrigin, classes, children }) => {
  return badge ? (
    <Badge
      className={clsx(classes.badgeAvatarRoot, 'Cmt-badge-avatar', anchorOrigin.vertical, anchorOrigin.horizontal)}
      {...badgeContent}
      anchorOrigin={anchorOrigin}>
      {children}
    </Badge>
  ) : (
    children
  );
};

CmtObjectSummary.prototype = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  avatarProps: PropTypes.object,
  badgeProps: PropTypes.object,
  showItemBadge: PropTypes.bool,
  align: PropTypes.string,
  anchorOrigin: PropTypes.object,
  titleProps: PropTypes.object,
  subTitleProps: PropTypes.object,
};

CmtObjectSummary.defaultProps = {
  align: 'horizontal',
  showItemBadge: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

export default React.memo(CmtObjectSummary);

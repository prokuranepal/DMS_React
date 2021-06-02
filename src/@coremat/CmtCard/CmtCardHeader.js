import React, { useEffect, useImperativeHandle, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@material-ui/core';

import CmtContentHead from '../CmtTypography/CmtContentHead';
import CmtDropdownMenu from '../CmtDropdownMenu';
import useStyles from './CmtCardHeader.style';
import clsx from 'clsx';
import { getBackgroundStyle, getSeparatorStyle } from '../CmtHelpers/JssHelper';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ActionsMenu = ({ actions, actionHandler, icon }) => {
  return (
    <CmtDropdownMenu
      TriggerComponent={<IconButton size="small">{icon || <MoreVertIcon />}</IconButton>}
      items={actions}
      onItemClick={actionHandler}
    />
  );
};

const CmtCardHeader = React.forwardRef(function CmtCardHeader(props, ref) {
  const {
    icon,
    avatar,
    title,
    titleProps,
    subTitle,
    subTitleProps,
    actions,
    actionMenuClassName,
    actionHandleIcon,
    actionHandler,
    actionsPos,
    actionsShowOnHover,
    backgroundColor,
    gradientDirection,
    separator,
    alignCenter,
    children,
    className,
    ...rest
  } = props;

  const backgroundStyles = getBackgroundStyle(backgroundColor, null, gradientDirection);
  const separatorStyles = getSeparatorStyle(separator);
  const contentRef = React.createRef();
  const [showActions, setActionsVisibility] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const contentHeadProps = {
    icon,
    avatar,
    title,
    titleProps,
    subTitle,
    subTitleProps,
  };

  const classes = useStyles({ separatorStyles, contentWidth });
  let showHideActionClass = showActions ? classes.showActionMenu : classes.hideActionMenu;
  if (actionsPos === 'default') {
    showHideActionClass = showActions ? classes.showActionDefaultMenu : classes.hideActionDefaultMenu;
  }

  const headerRootClasses = alignCenter
    ? clsx(className, classes.headerRoot, classes.headerAlignCenter, separator.color ? 'Cmt-separator' : '')
    : clsx(className, classes.headerRoot, separator.color ? 'Cmt-separator' : '');

  const menuRootClasses = actionsShowOnHover
    ? clsx(classes.actionMenu, classes.actionMenuHover, 'Cmt-action-menu-hover', showHideActionClass, actionMenuClassName)
    : clsx(classes.actionMenu, 'Cmt-action-menu', actionMenuClassName);
  const menuRootActionsClasses = actionsShowOnHover
    ? actionsPos === 'default'
      ? classes.actionMenuDefault
      : ''
    : classes.actionMenuDefault;

  useImperativeHandle(ref, () => ({
    onHeaderMouseEntered: () => {
      setActionsVisibility(true);
    },
    onHeaderMouseLeft: () => {
      setActionsVisibility(false);
    },
  }));

  const windowSized = () => {
    if (contentRef.current) setContentWidth(contentRef.current.clientWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', windowSized);
    windowSized();
    return () => window.removeEventListener('resize', windowSized);
  }, []);

  useEffect(() => {
    windowSized();
  }, [actionsPos, actionsShowOnHover]);

  return (
    <Box className={clsx(headerRootClasses, 'Cmt-header-root')} style={backgroundStyles} {...rest}>
      <React.Fragment>
        {(icon || avatar || title || subTitle) && (
          <CmtContentHead titleStyle={classes.titleStyle} subTitleStyle={classes.subTitleStyle} {...contentHeadProps} />
        )}
      </React.Fragment>

      {/* {(actions.length > 0 || children) && (
        <Box ref={contentRef} className={clsx(menuRootActionsClasses, 'Cmt-action-default-menu')}>
          {children}
          {actions.length > 0 && (
            <Box ml={2} className={menuRootClasses}>
              <ActionsMenu actions={actions} actionHandler={actionHandler} icon={actionHandleIcon} />
            </Box>
          )}
        </Box>
      )} */}
    </Box>
  );
});

CmtCardHeader.propTypes = {
  icon: PropTypes.element,
  avatar: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitleProps: PropTypes.object,
  actions: PropTypes.array, //example: [{label: "Close", icon: "icon-slug", onClick: (func optional), ...}, ...]
  actionMenuClassName: PropTypes.string,
  actionHandleIcon: PropTypes.element,
  actionsPos: PropTypes.oneOf(['default', 'top-corner']),
  actionsShowOnHover: PropTypes.bool,
  actionHandler: PropTypes.func,
  alignCenter: PropTypes.bool,
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gradientDirection: PropTypes.string,
  separator: PropTypes.object,
  className: PropTypes.string,
};

CmtCardHeader.defaultProps = {
  title: '',
  subTitle: '',
  actions: [],
  actionsPos: 'default',
  actionsShowOnHover: false,
  actionMenuClassName: '',
  actionHandler: null,
  alignCenter: false,
  separator: { color: '', borderWidth: 0, borderStyle: 'solid' },
  className: '',
};

export default CmtCardHeader;

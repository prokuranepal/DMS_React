import React, { Children, cloneElement, isValidElement, useContext, useRef } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import LayoutContext from './LayoutContext/LayoutContext';
import { useTheme } from '@material-ui/styles';
import useStyles from './MainContainer.style';

const MainContainer = ({
  miniSidebarWidth,
  sidebarWidth,
  drawerBreakPoint,
  children,
  className,
  actionSidebarWidth,
  ...rest
}) => {
  const theme = useTheme();
  const { isOpen } = useContext(LayoutContext);
  const headerRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  let header = null;
  let sidebar = null;
  let content = null;
  let footer = null;

  let headerType = 'fixed';
  let sidebarType = 'full';
  let fullHeader = false;
  let isSidebarFixed = true;
  let footerType = 'fixed';

  Children.map(children, child => {
    if (isValidElement(child)) {
      if (child.type.render && child.type.defaultProps.name) {
        if (child.type.defaultProps.name === 'LayoutHeader') {
          headerType = child.props.type;
          fullHeader = child.props.fullHeader;
          header = cloneElement(child, { ref: headerRef });
        } else if (child.type.defaultProps.name === 'LayoutSidebar') {
          sidebarType = child.props.type;
          isSidebarFixed = child.props.isSidebarFixed;
          sidebar = cloneElement(child, {
            ref: sidebarRef,
            drawerBreakPoint,
            sidebarWidth,
            actionSidebarWidth,
            miniSidebarWidth,
          });
        } else if (child.type.defaultProps.name === 'LayoutContent') {
          content = cloneElement(child, { ref: contentRef });
        } else if (child.type.defaultProps.name === 'LayoutFooter') {
          footerType = child.props.type;
          footer = cloneElement(child, { ref: footerRef });
        }
      }
    }
  });

  const isDrawer = useMediaQuery(theme.breakpoints.down(drawerBreakPoint));
  const classes = useStyles({
    miniSidebarWidth,
    sidebarWidth,
    actionSidebarWidth,
    drawerBreakPoint,
  });

  const getHeaderClasses = () => {
    if (!header) return;
    if (headerType === 'fixed') {
      if (fullHeader) return 'Cmt-fullFixedHeaderLayout';
      else return 'Cmt-fixedHeaderLayout';
    }
  };

  const getFooterClasses = () => {
    if (!footer) return;
    if (footerType === 'fixed') {
      return 'Cmt-FixedFooterLayout';
    }
  };

  const getSidebarClasses = () => {
    if (sidebarType === 'drawer' || isDrawer) {
      return 'Cmt-drawerLayout';
    }

    if (sidebarType === 'mini') {
      if (isOpen) {
        return 'Cmt-fullMiniLayout';
      }
      return 'Cmt-miniLayout';
    }
  };

  return (
    <Box
      className={clsx(classes.appRoot, getHeaderClasses(), getSidebarClasses(), getFooterClasses(), className, {
        'Cmt-sidebar-fixed': isSidebarFixed,
      })}
      {...rest}>
      <Box className={classes.appInnerRoot}>
        <Box className={classes.appMainContainer}>
          {sidebar}
          <Box className={classes.appMain}>
            {header}
            {content}
            {footer}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContainer;

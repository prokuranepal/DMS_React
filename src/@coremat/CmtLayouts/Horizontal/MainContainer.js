import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './MainContainer.style';

const MainContainer = ({ drawerBreakPoint, sidebarWidth, className, children }) => {
  const headerRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const horizontalLayout = {};

  Children.map(children, child => {
    if (isValidElement(child)) {
      if (child.type.render && child.type.defaultProps.name) {
        if (child.type.defaultProps.name === 'Header') {
          horizontalLayout.header = cloneElement(child, { ref: headerRef });
        } else if (child.type.defaultProps.name === 'LayoutSidebar') {
          horizontalLayout.sidebar = cloneElement(child, {
            ref: sidebarRef,
            drawerBreakPoint,
            sidebarWidth,
          });
        } else if (child.type.defaultProps.name === 'LayoutContent') {
          horizontalLayout.content = cloneElement(child, { ref: contentRef });
        } else if (child.type.defaultProps.name === 'LayoutFooter') {
          horizontalLayout.footer = cloneElement(child, { ref: footerRef });
        }
      }
    }
  });

  const classes = useStyles({ drawerBreakPoint });

  return (
    <Box className={clsx(classes.appRoot, className)}>
      <Box className={classes.appInnerRoot}>
        <Box className={classes.appMainContainer}>
          {horizontalLayout.sidebar}
          <Box className={classes.appMain}>
            {horizontalLayout.header}
            {horizontalLayout.content}
            {horizontalLayout.footer}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContainer;

import React, { useContext, useImperativeHandle } from 'react';
import { Box, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import LayoutContext from './LayoutContext/LayoutContext';
import CmtDrawer from '../../CmtDrawer';
import { getBackgroundStyle, getOverLayStyle } from '../../CmtHelpers/JssHelper';

const useStyles = makeStyles(theme => ({
  appSidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: props => props.sidebarWidth,
    height: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    position: 'relative',
    zIndex: 1103,
  },
  appSidebarContent: {
    height: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.sidebar.bgColor,
    color: theme.palette.sidebar.textColor,
    // backgroundColor: 'black',
    // color: 'white',
    overflow: 'hidden',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)',
    '.Cmt-miniLayout &': {
      width: props => props.miniSidebarWidth,
      '&:hover': {
        width: props => props.sidebarWidth,
      },
    },
    '& > *': {
      position: 'relative',
      zIndex: 3,
    },
  },
  actionSidebarWrapper: {
    display: 'flex',
    width: props => props.sidebarWidth + props.actionSidebarWidth,
    transition: 'all 0.3s ease',

    '& .actionSidebar': {
      width: props => props.actionSidebarWidth,
    },
  },
  overlayRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
}));

const CmtSidebar = React.forwardRef(function LayoutSidebar(props, ref) {
  const {
    type,
    children,
    className,
    sidebarWidth,
    miniSidebarWidth,
    actionSidebarWidth,
    drawerBreakPoint,
    actionBar,
    backgroundColor,
    backgroundImage,
    gradientDirection,
  } = props;
  const { isOpen, setOpen } = useContext(LayoutContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(drawerBreakPoint));

  const backgroundStyles = getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection);
  const overlayStyles = getOverLayStyle({
    colors: backgroundColor,
    opacity: 0.8,
    direction: '180deg',
  });

  useImperativeHandle(ref, () => ({
    sidebarType: type,
    drawerBreakPoint,
  }));

  const contentRef = React.createRef();
  const classes = useStyles({
    sidebarWidth,
    miniSidebarWidth,
    actionSidebarWidth,
  });

  const getSidebarContent = () => {
    return (
      <Box ref={contentRef} className={clsx(classes.appSidebar, 'Cmt-sidebar', className)}>
        <Box className={clsx(classes.appSidebarContent, 'Cmt-sidebar-content')} style={backgroundStyles}>
          {children}
          {overlayStyles && backgroundImage && (
            <Box className={clsx(classes.overlayRoot, 'Cmt-Drawer-overlay')} style={overlayStyles} />
          )}
        </Box>
      </Box>
    );
  };

  const getDrawerContent = () => {
    return (
      <CmtDrawer
        variant="temporary"
        open={isOpen}
        onClose={() => setOpen(false)}
        classes={{
          paper: 'Cmt-drawer-sidebar',
        }}>
        {getSidebarContent()}
      </CmtDrawer>
    );
  };

  if (type === 'drawer' || matches) {
    return actionBar ? (
      <React.Fragment>
        {actionBar}
        {getDrawerContent()}
      </React.Fragment>
    ) : (
      getDrawerContent()
    );
  } else {
    return actionBar ? (
      <Box className={clsx(classes.actionSidebarWrapper, 'Cmt-actionSidebarWrapper')}>
        {actionBar}
        {getSidebarContent()}
      </Box>
    ) : (
      getSidebarContent()
    );
  }
});

CmtSidebar.propTypes = {
  type: PropTypes.oneOf(['full', 'mini', 'drawer']),
  drawerBreakPoint: PropTypes.oneOf(['xs', 'sm', 'md']),
  className: PropTypes.string,
  sidebarWidth: PropTypes.number,
  miniSidebarWidth: PropTypes.number,
  actionSidebarWidth: PropTypes.number,
  actionBar: PropTypes.element,
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
};

CmtSidebar.defaultProps = {
  type: 'full',
  sidebarWidth: 304,
  miniSidebarWidth: 80,
  drawerBreakPoint: 'sm',
  actionSidebarWidth: 72,
  name: 'LayoutSidebar',
};

export default CmtSidebar;

import React, { useContext } from 'react';
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
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 999,
    '.Cmt-drawer-sidebar &': {
      position: 'relative',
    },
    '& .scrollbar-container': {
      height: '100vh',
      width: '100%',
    },
  },
  appSidebarContent: {
    height: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.sidebar.bgColor,
    color: theme.palette.sidebar.textColor,
    overflow: 'hidden',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)',
    '& > *': {
      position: 'relative',
      zIndex: 3,
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
  const { children, drawerBreakPoint, sidebarWidth, backgroundColor, backgroundImage, gradientDirection } = props;
  const { isOpen, setOpen } = useContext(LayoutContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(drawerBreakPoint));

  const contentRef = React.createRef();
  const classes = useStyles({ sidebarWidth });

  const backgroundStyles = getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection);
  const overlayStyles = getOverLayStyle({
    colors: backgroundColor,
    opacity: 0.8,
    direction: '180deg',
  });

  const getSidebarContent = () => {
    return (
      <Box ref={contentRef} className={clsx(classes.appSidebar, 'Cmt-sidebar')}>
        <Box className={clsx(classes.appSidebarContent, 'Cmt-sidebar-content')} style={backgroundStyles}>
          {children}
          {overlayStyles && backgroundImage && (
            <Box className={clsx(classes.overlayRoot, 'Cmt-Drawer-overlay')} style={overlayStyles} />
          )}
        </Box>
      </Box>
    );
  };

  if (matches) {
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
  } else {
    return null;
  }
});

export default CmtSidebar;

CmtSidebar.defaultProps = {
  sidebarWidth: 304,
  drawerBreakPoint: 'xs',
  name: 'LayoutSidebar',
  gradientDirection: '180deg',
};

CmtSidebar.propTypes = {
  sidebarWidth: PropTypes.number,
  drawerBreakPoint: PropTypes.oneOf(['xs', 'sm', 'md']),
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
};

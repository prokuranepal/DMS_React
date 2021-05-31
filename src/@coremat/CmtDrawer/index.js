import React from 'react';
import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { getBackgroundStyle, getOverLayStyle } from '../CmtHelpers/JssHelper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  drawerContainer: {
    width: '100%',
    height: '100%',
  },
  drawerContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
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

const CmtDrawer = ({ backgroundColor, backgroundImage, gradientDirection, children, overlay, ...rest }) => {
  const backgroundStyles = getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection);
  const overlayStyles = getOverLayStyle(overlay);
  const classes = useStyles();

  return (
    <Drawer {...rest}>
      <Box className={clsx(classes.drawerContainer, 'Cmt-Drawer-container')} style={backgroundStyles}>
        <Box className={clsx(classes.drawerContent, 'Cmt-Drawer-content')}>{children}</Box>
        {overlay.colors && <Box className={clsx(classes.overlayRoot, 'Cmt-Drawer-overlay')} style={overlayStyles} />}
      </Box>
    </Drawer>
  );
};

CmtDrawer.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
  overlay: PropTypes.object,
};

CmtDrawer.defaultProps = {
  overlay: { colors: '', opacity: 0, direction: '' },
};

export default CmtDrawer;
